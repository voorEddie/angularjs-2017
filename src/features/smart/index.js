import uiRouter from 'angular-ui-router';
import SmartComponent from './smart.component';

const smart = angular
  .module('smart', [
    uiRouter
  ])
  .component('appSmart', SmartComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('base.statistics.smart', {
        url: '/smart',
        component: 'appSmart'
      })
  })
  .name;

export default smart;
