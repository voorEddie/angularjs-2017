const BaseComponent = {
  template: require('./base.html'),
  controller: class BaseComponent {
    constructor($interval, ApiService) {
      'ngInject';
      this.$interval = $interval;
      this.ApiService = ApiService;
    }

    getNodeConfig() {
      this.ApiService.api('GET', 'allMonitorServerLists')
        .then(res => this.nodeConfig = res)
    };

    $onInit() {
        this.getNodeConfig();

        // this.getNodeConfigInterval = this.$interval(() => {
        //   this.ApiService.api('GET', 'allMonitorServerLists')
        //     .then(res => {
        //
        //     })
        //     .catch(error => console.log(error))
        // }, 1000)
    }

    openMenu($mdMenu, ev) {
      $mdMenu.open(ev);
    }

    $onDestroy() {
      // this.$interval.cancel(this.getNodeConfigInterval);
    }
  }
};

export default BaseComponent;
