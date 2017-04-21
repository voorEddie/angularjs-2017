import uiRouter from 'angular-ui-router';
import BaseComponent from './base.component';
import BaseService from './base.service';
import './base.css';

const base = angular
  .module('base', [
    uiRouter
  ])
  .service('BaseService', BaseService)
  .component('appBase', BaseComponent)
  .config(($urlRouterProvider, $stateProvider) => {
    'ngInject';
    const redirectToDefaultState = ($state, ApiService, AuthService) => {
      if (!AuthService.isAuthenticated()) {
        return $state.go('login');
      } else {
        ApiService.api('GET', 'allMonitorServerLists')
          .then(res => {
            if (Object.getOwnPropertyNames(res).length > 0) {
              return $state.go('base.dashboard');
            } else {
              return $state.go('base.monitorNode');
            }
          });
      }
    };
    $urlRouterProvider
      .when('/hmt', redirectToDefaultState);
    $stateProvider
      .state('base', {
        url: '/hmt',
        component: 'appBase'
      });
  })
  .name;

export default base;
