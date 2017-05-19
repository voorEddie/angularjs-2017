const StatisticsCompareComponent = {
  bindings: {
    data: '<'
  },
  template: require('./statistics-compare.html'),
  controller: class StatisticsCompareComponent {
    constructor() {
      'ngInject';

    }

    $onChanges(changes) {
      if (changes.data && !changes.data.isFirstChange()) {
        this.data = JSON.parse(JSON.stringify(this.data));
      }
    }

    $onInit() {
    }

  }
};

export default StatisticsCompareComponent;
