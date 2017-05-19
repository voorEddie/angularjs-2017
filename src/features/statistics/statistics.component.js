const StatisticsComponent = {
  bindings: {
    nodeConfig: '<',
    selectedSsd: '<',
    selectedNodeIp: '<',
    selectedServerIp: '<',
    onLoadSsdInfo: '&',
    onSelectSsd: '&',
    filterTemplates: '<',
    getFilterTemplates: '&',
  },
  template: require('./statistics.html'),
  controller: class StatisticsComponent {
    constructor($mdSidenav, EventEmitter) {
      'ngInject';
      this.$mdSidenav = $mdSidenav;
      this.EventEmitter = EventEmitter;
    }

    loadSsdInfo({nodeIp, serverIndex, ssdList, isLoadingSsd, isToggleOpen}) {
      this.onLoadSsdInfo(
        this.EventEmitter({nodeIp, serverIndex, ssdList, isLoadingSsd, isToggleOpen})
      );
    }

    selectSsd({ssd, nodeIp, serverIp}) {
      this.onSelectSsd(
        this.EventEmitter({ssd, nodeIp, serverIp})
      );
    }

    toggleTree(id) {
      this.$mdSidenav(id)
        .toggle()
    }
  }
};

export default StatisticsComponent;
