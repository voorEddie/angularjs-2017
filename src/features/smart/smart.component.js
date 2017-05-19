const SmartComponent = {
  bindings: {
    selectedSsd: '<',
    selectedNodeIp: '<',
    selectedServerIp: '<',
    filterTemplates: '<',
    getFilterTemplates: '&'
  },
  template: require('./smart.html'),
  controller: class SmartComponent {
    constructor(ApiService, StatisticsService, AuthService) {
      'ngInject';
      this.ApiService = ApiService;
      this.StatisticsService = StatisticsService;
      this.AuthService = AuthService;
    }

    $onChanges(changes) {
      if (changes.selectedSsd && !changes.selectedSsd.isFirstChange()) {
        this.getSmartInfo(this.selectedNodeIp, this.selectedServerIp, this.selectedSsd);
      }
    }

    $onInit() {
      this.apiMessage = {};
      this.currentNavItem = 'basic';
      if (this.selectedSsd) {
        this.getSmartInfo(this.selectedNodeIp, this.selectedServerIp, this.selectedSsd);
      }
    }

    getSmartInfo(nodeIp, serverIp, ssdData) {
      if (nodeIp && serverIp && ssdData) {
        let postData = this.StatisticsService.getSmartDslrPostData(nodeIp, serverIp, ssdData);
        this.ApiService.api('POST', 'smartinfo', postData, {sessionId: this.AuthService.userData.sessionId})
        .then(res => {
          this.apiMessage.success = 'Get SMART information successfully.';
          this.smartInfo = res[0];
        })
        .catch(error => {
          this.apiMessage.error = 'Failed to get SMART information.'
        });
      }
    }

  }
};

export default SmartComponent;
