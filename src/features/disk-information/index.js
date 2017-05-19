import uiRouter from 'angular-ui-router';
import DiskInfoComponent from './disk-information.component';
import DiskInformationService from './disk-information.service';
import './disk-information.css';

const diskInformation = angular
  .module('diskInformation', [
    uiRouter
  ])
  .component('appDiskInfo', DiskInfoComponent)
  .service('DiskInformationService', DiskInformationService)
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
