const MonitorNodeComponent = {
  bindings: {
    nodeConfig: '<',
    getNodeConfig: '&'
  },
  template: require('./monitor-node.html'),
  controller: class MonitorNodeComponent {
    constructor($mdDialog, ApiService, AuthService) {
      'ngInject';
      this.$mdDialog = $mdDialog;
      this.ApiService = ApiService;
      this.AuthService = AuthService;
    }

    $onChanges(changes) {
      if (changes.nodeConfig && !changes.nodeConfig.isFirstChange()) {
        this.nodeConfig = Object.assign({}, this.nodeConfig);
        this.hasNodeConfig = Object.getOwnPropertyNames(this.nodeConfig).length > 0;
      }
    }

    $onInit() {
      this.apiMessage = {};
      this.nodeConfig = Object.assign({}, this.nodeConfig);
      this.hasNodeConfig = Object.getOwnPropertyNames(this.nodeConfig).length > 0;
    }

    monitorNodeAdd(allNodeList, ev) {
      this.apiMessage = {};
      this.$mdDialog.show({
        targetEvent: ev,
        template: `
          <md-dialog aria-label="Modify Monitor Node">
            <app-monitor-node-dialog
              class="hmt-dialog"
              dialog-type="$ctrl.dialogType"
              dialog-title="$ctrl.dialogTitle"
              all-node-list="$ctrl.allNodeList"></app-monitor-node-dialog>
          </md-dialog>
        `,
        controller: function () {
          this.dialogType = 'Add';
          this.dialogTitle = "Add Monitor Node";
          this.allNodeList = Object.keys(allNodeList);
        },
        controllerAs: '$ctrl'
      })
      .then(() => this.getNodeConfig());
    }

    monitorNodeModify(nodeIp, nodeDescription, allNodeList, ev) {
      this.apiMessage = {};
      this.$mdDialog.show({
        targetEvent: ev,
        template: `
          <md-dialog aria-label="Modify Monitor Node">
            <app-monitor-node-dialog
              class="hmt-dialog"
              dialog-type="$ctrl.dialogType"
              dialog-title="$ctrl.dialogTitle"
              node-ip="$ctrl.nodeIp"
              node-detail="$ctrl.nodeDetail"
              all-node-list="$ctrl.allNodeList"></app-monitor-node-dialog>
          </md-dialog>
        `,
        controller: function () {
          this.dialogType = 'Edit';
          this.dialogTitle = "Monitor Node settings";
          this.nodeIp = nodeIp;
          this.nodeDetail = nodeDescription;
          this.allNodeList = Object.keys(allNodeList);
        },
        controllerAs: '$ctrl'
      })
      .then(() => this.getNodeConfig());
    }

    monitorNodeDelete(nodeIp, nodeDescription, ev) {
      this.apiMessage = {};
      this.$mdDialog.show({
        targetEvent: ev,
        template: `
          <md-dialog aria-label="Confirm action">
            <app-confirm-dialog
              class="hmt-dialog"
              confirm-title="$ctrl.title"
              confirm-text="$ctrl.text"></app-confirm-dialog>
          </md-dialog>
        `,
        controller: function () {
          this.title = 'Confirm delete action';
          this.text = 'Would you like to delete: ' + nodeDescription + ' (' + nodeIp + ')';
        },
        controllerAs: '$ctrl'
      })
      .then(() => {
        this.ApiService.api(
          'POST',
          'monitorNodeDel', {nodeIP: nodeIp}, {sessionId: this.AuthService.userData.sessionId}
        )
        .then(successMsg => {
          this.getNodeConfig();
          this.apiMessage.success = 'Monitor node has been deleted successfully!';
        })
        .catch(errorMsg => this.apiMessage.error = errorMsg);
      });
    }
  }
};

export default MonitorNodeComponent;
