const StatisticsComponent = {
  bindings: {
    nodeConfig: '<',
    selectedSsd: '<',
    onLoadSsdInfo: '&',
    onSelectSsd: '&'
  },
  template: require('./statistics.html'),
  controller: class StatisticsComponent {
    constructor($mdSidenav, EventEmitter) {
      'ngInject';
      this.$mdSidenav = $mdSidenav;
      this.EventEmitter = EventEmitter;
    }

    $onChanges(changes) {
      if (changes.nodeConfig && !changes.nodeConfig.isFirstChange()) {
        this.nodeConfig = JSON.parse(JSON.stringify(this.nodeConfig));
      }
    }

    loadSsdInfo({nodeIp, serverIndex, ssdList, isLoadingSsd, isToggleOpen}) {
      this.onLoadSsdInfo(
        this.EventEmitter({nodeIp, serverIndex, ssdList, isLoadingSsd, isToggleOpen})
      );
    }

    selectSsd({ssdId}) {
      this.onSelectSsd(
        this.EventEmitter({ssdId})
      );
    }

    toggleTree(id) {
      this.$mdSidenav(id)
        .toggle()
    }
  }
};

export default StatisticsComponent;
