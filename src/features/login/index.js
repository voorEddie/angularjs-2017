import angular from 'angular';
import uiRouter from 'angular-ui-router';
import LoginComponent from './component';

const login = angular
  .module('login', [
    uiRouter
  ])
  .component('appLogin', LoginComponent)
  .config([
    '$stateProvider', '$urlRouterProvider',
    ($stateProvider, $urlRouterProvider) => {
      $stateProvider
        .state('login', {
          url: '/login',
          component: 'appLogin'
        })
      $urlRouterProvider.otherwise('/base');
    }
  ])
  .name;

export default login;
