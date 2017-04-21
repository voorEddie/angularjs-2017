import uiRouter from 'angular-ui-router';
import DashboardComponent from './dashboard.component';

const dashboard = angular
  .module('dashboard', [
    uiRouter
  ])
  .component('appDashboard', DashboardComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('base.dashboard', {
        url: '/dashboard',
        component: 'appDashboard'
      })
  })
  .name;

export default dashboard;
