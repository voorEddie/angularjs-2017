const TreeViewComponent = {
  bindings: {
    nodeConfig: '<'
  },
  template: require('./tree-view.html'),
  controller: class TreeViewComponent {
    constructor() {
      'ngInject';
    }

    $onChanges(changes) {
      if (changes.nodeConfig && !changes.nodeConfig.isFirstChange()) {
        this.nodeConfig = Object.assign({}, this.nodeConfig);
      }
    }

    $onInit() {
      this.apiMessage = {};
      this.nodeConfig = Object.assign({}, this.nodeConfig);
    }

  }
};

export default TreeViewComponent;
