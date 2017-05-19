const BaseComponent = {
  template: require('./base.html'),
  controller: class BaseComponent {
    constructor(ApiService, AuthService) {
      'ngInject';
      this.ApiService = ApiService;
      this.AuthService = AuthService;
    }

    $onInit() {
        this.getNodeConfig();
        this.getFilterTemplates();
    }

    getNodeConfig() {
      this.ApiService.api('GET', 'allMonitorServerLists', null, {sessionId:this.AuthService.userData.sessionId})
        .then(res => {
          this.nodeConfig = res;
          this.selectedSsd = null;
        });
    };

    getFilterTemplates() {
      this.ApiService.api('GET', 'filterTemplates', null, {sessionId:this.AuthService.userData.sessionId})
      .then(res => {
        this.filterTemplates = res;
      });
    }

    loadSsdInfo({nodeIp, serverIndex, ssdList, isLoadingSsd, isToggleOpen}) {
      let server = this.nodeConfig[nodeIp].servers[serverIndex];
      server.isLoadingSsd = false;
      server.loadedSsd = isLoadingSsd;
      server.isToggleOpen = isToggleOpen;
      server.ssdList = ssdList;
      this.nodeConfig = JSON.parse(JSON.stringify(this.nodeConfig));
    }

    selectSsd({ssd, nodeIp, serverIp}) {
      this.selectedSsd = JSON.parse(JSON.stringify(ssd));
      this.selectedNodeIp = nodeIp;
      this.selectedServerIp = serverIp;
    }

    openMenu($mdMenu, ev) {
      $mdMenu.open(ev);
    }

  }
};

export default BaseComponent;
