import uiRouter from 'angular-ui-router';
import StatisticsComponent from './statistics.component';
import StatisticsService from './statistics.service';
import './statistics.css';

const statistics = angular
  .module('statistics', [
    uiRouter
  ])
  .component('appStatistics', StatisticsComponent)
  .service('StatisticsService', StatisticsService)
  .value('EventEmitter', payload => ({ $event: payload }))
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
