const StatisticsComponent = {
  bindings: {
    nodeConfig: '<'
  },
  template: require('./statistics.html'),
  controller: class StatisticsComponent {
    constructor($mdSidenav) {
      'ngInject';
      this.$mdSidenav = $mdSidenav;
    }

    $onChanges(changes) {
      if (changes.nodeConfig && !changes.nodeConfig.isFirstChange()) {
        this.nodeConfig = Object.assign({}, this.nodeConfig);
      }
    }

    toggleTree(id) {
      this.$mdSidenav(id)
        .toggle()
    }
  }
};

export default StatisticsComponent;
