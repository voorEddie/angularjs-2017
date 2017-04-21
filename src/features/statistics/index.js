import uiRouter from 'angular-ui-router';
import StatisticsComponent from './statistics.component';

const statistics = angular
  .module('statistics', [
    uiRouter
  ])
  .component('appStatistics', StatisticsComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('base.statistics', {
        url: '/statistics',
        component: 'appStatistics'
      })
  })
  .name;

export default statistics;
