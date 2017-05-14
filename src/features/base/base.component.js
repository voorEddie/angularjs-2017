const BaseComponent = {
  template: require('./base.html'),
  controller: class BaseComponent {
    constructor(ApiService) {
      'ngInject';
      this.ApiService = ApiService;
    }

    $onInit() {
        this.getNodeConfig();
    }

    getNodeConfig() {
      this.ApiService.api('GET', 'allMonitorServerLists')
        .then(res => this.nodeConfig = res);
    };

    loadSsdInfo({nodeIp, serverIndex, ssdList, isLoadingSsd, isToggleOpen}) {
      let server = this.nodeConfig[nodeIp].servers[serverIndex];
      server.isLoadingSsd = false;
      server.loadedSsd = isLoadingSsd;
      server.isToggleOpen = isToggleOpen;
      server.ssdList = ssdList;
      this.nodeConfig = JSON.parse(JSON.stringify(this.nodeConfig));
    }

    selectSsd({ssdId}) {
      this.selectedSsd = ssdId;
    }

    openMenu($mdMenu, ev) {
      $mdMenu.open(ev);
    }

  }
};

export default BaseComponent;
