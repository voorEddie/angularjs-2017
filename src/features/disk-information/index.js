import uiRouter from 'angular-ui-router';
import DiskInfoComponent from './disk-information.component';

const diskInformation = angular
  .module('diskInformation', [
    uiRouter
  ])
  .component('appDiskInfo', DiskInfoComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('base.statistics.diskInformation', {
        url: '/disk-information',
        component: 'appDiskInfo'
      })
  })
  .name;

export default diskInformation;
