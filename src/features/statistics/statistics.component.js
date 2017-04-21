const StatisticsComponent = {
  bindings: {
    nodeConfig: '<'
  },
  template: `
    <div>Statistics module placeholder</div>
    <div>{{$ctrl.nodeConfig}}</div>
    <div ui-view>Statistics subview</div>
  `
};

export default StatisticsComponent;
