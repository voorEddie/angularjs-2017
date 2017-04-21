import uiRouter from 'angular-ui-router';
import MonitorNodeComponent from './monitor-node.component';

const monitorNode = angular
  .module('monitorNode', [
    uiRouter
  ])
  .component('appMonitorNode', MonitorNodeComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('base.monitorNode', {
        url: '/monitor-node',
        component: 'appMonitorNode'
      })
  })
  .name;

export default monitorNode;
