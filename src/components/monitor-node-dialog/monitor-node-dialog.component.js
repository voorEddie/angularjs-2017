const MonitorNodeDialogComponent = {
  bindings: {
    dialogType: '<',
    dialogTitle: '<',
    nodeIp: '<',
    nodeDetail: '<',
    allNodeList: '<'
  },
  template: require('./monitor-node-dialog.html'),
  controller: class MonitorNodeDialogComponent {
    constructor($mdDialog, $timeout, MonitorNodeDialogService, ApiService) {
      'ngInject';
      this.$timeout = $timeout;
      this.$mdDialog = $mdDialog;
      this.MonitorNodeDialogService = MonitorNodeDialogService;
      this.ApiService = ApiService;
    }

    $onInit() {
      this.apiMessage = {};
      this.smartInterval = this.MonitorNodeDialogService.getSmartInterval();
      this.dslrInterval = this.MonitorNodeDialogService.getDslrInterval();
      this.nodeDialog = this.MonitorNodeDialogService.getNodeDialog(this.dialogType, this.nodeDetail);
    }

    serverAdd() {
      this.nodeDialog.servers.unshift(this.MonitorNodeDialogService.getNewServer());
    }

    serverRemove(collection, index) {
      this.nodeDialog.servers = collection.filter((item, itemIndex) => itemIndex !== index);
    }

    cancel() {
      this.$mdDialog.cancel();
    }

    submit(data) {
      if (this.nodeDialogForm.$valid) {
        let validateResult = this.MonitorNodeDialogService.validateDialogData(data, this.allNodeList, this.nodeIp);
        if (validateResult.isValid) {
          this.apiMessage.progress = 'Saving Monitor Node configuration...';
          this.ApiService.api('POST', 'connectNode', {
            nodeIP: data.nodeip,
            port: data.nodeport
          })
          .then(res => {
            this.ApiService.api('POST', 'monitorNodeServer', data)
            .then(res => {
              this.apiMessage.success = 'Save configuration successfully!';
              this.$timeout(() => {
                this.$mdDialog.hide();
              }, 1000);
            })
            .catch(errorMsg => {
              this.apiMessage.progress = null;
              this.apiMessage.error = 'Failed to save configuration.';
            });
          })
          .catch(errorMsg => {
            this.apiMessage.progress = null;
            this.apiMessage.error = 'Failed to connect Monitor Node.';
          });
        } else {
          this.apiMessage.error = validateResult.errorMsg;
        }
      }
    }

  }
};

export default MonitorNodeDialogComponent;
