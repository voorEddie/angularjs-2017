const TreeViewComponent = {
  bindings: {
    nodeConfig: '<',
    selectedSsd: '<',
    loadSsdInfo: '&',
    selectSsd: '&'
  },
  template: require('./tree-view.html'),
  controller: class TreeViewComponent {
    constructor(ApiService, AuthService, TreeViewService, EventEmitter) {
      'ngInject';
      this.ApiService = ApiService;
      this.AuthService = AuthService;
      this.TreeViewService = TreeViewService;
      this.EventEmitter = EventEmitter;
    }

    $onChanges(changes) {
      if (changes.nodeConfig && !changes.nodeConfig.isFirstChange()) {
        this.nodeConfig = JSON.parse(JSON.stringify(this.nodeConfig));
      }
    }

    $onInit() {
      this.apiMessage = {};
    }

    toggleServer(nodeIp, serverIndex) {
      let server = this.nodeConfig[nodeIp].servers[serverIndex];
      if (server.loadedSsd === true) {
        this.loadSsdInfo(
          this.EventEmitter({nodeIp, serverIndex, ssdList: server.ssdList, isLoadingSsd: true, isToggleOpen: !server.isToggleOpen})
        );
      } else {
        server.isLoadingSsd = true;
        this.ApiService.api('GET', 'diskinfo', null, {id: this.TreeViewService.getSsdId(nodeIp, server.ip_address), sessionId: this.AuthService.userData.sessionId})
        .then(ssdList => {
          this.loadSsdInfo(
            this.EventEmitter({nodeIp, serverIndex, ssdList, isLoadingSsd: true, isToggleOpen: true})
          );
        })
        .catch(error => {
          server.isLoadingSsd = false;
        });
      }
    }

    onSelectSsd(ssd, nodeIp, serverIp) {
      this.selectSsd(
        this.EventEmitter({ssd, nodeIp, serverIp})
      );
    }

  }
};

export default TreeViewComponent;
