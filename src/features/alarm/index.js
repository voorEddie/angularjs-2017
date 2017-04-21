import uiRouter from 'angular-ui-router';
import AlarmComponent from './alarm.component';

const alarm = angular
  .module('alarm', [
    uiRouter
  ])
  .component('appAlarm', AlarmComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('base.alarm', {
        url: '/alarm',
        component: 'appAlarm'
      })
  })
  .name;

export default alarm;
