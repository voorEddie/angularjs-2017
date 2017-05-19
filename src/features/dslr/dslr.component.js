const DslrComponent = {
  bindings: {
    selectedSsd: '<',
    selectedNodeIp: '<',
    selectedServerIp: '<',
  },
  template: require('./dslr.html'),
  controller: class DslrComponent {
    constructor(ApiService, StatisticsService, AuthService) {
      'ngInject';
      this.ApiService = ApiService;
      this.StatisticsService = StatisticsService;
      this.AuthService = AuthService;
    }

    $onChanges(changes) {
      if (changes.selectedSsd && !changes.selectedSsd.isFirstChange()) {
        this.getDslrInfo(this.selectedNodeIp, this.selectedServerIp, this.selectedSsd);
      }
    }

    $onInit() {
      this.apiMessage = {};
      this.currentNavItem = 'basic';
      if (this.selectedSsd) {
        this.getDslrInfo(this.selectedNodeIp, this.selectedServerIp, this.selectedSsd);
      }
    }

    getDslrInfo(nodeIp, serverIp, ssdData) {
      if (nodeIp && serverIp && ssdData) {
        let postData = this.StatisticsService.getSmartDslrPostData(nodeIp, serverIp, ssdData);
        this.ApiService.api('POST', 'dslrinfo', postData, {sessionId: this.AuthService.userData.sessionId})
        .then(res => {
          this.apiMessage.success = 'Get DSLR information successfully.';
          this.dslrInfo = res.dslr[0];
        })
        .catch(error => {
          this.apiMessage.error = 'Failed to get DSLR information.'
        });
      }
    }

  }
};

export default DslrComponent;
