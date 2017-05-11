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
    
    openMenu($mdMenu, ev) {
      $mdMenu.open(ev);
    }

  }
};

export default BaseComponent;
