import angular from 'angular';
import uiRouter from 'angular-ui-router';
import LoginComponent from './login.component';
import './login.css';

const login = angular
  .module('login', [
    uiRouter
  ])
  .component('appLogin', LoginComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('login', {
        url: '/login',
        component: 'appLogin'
      })
    $urlRouterProvider.otherwise('/base');
  })
  .name;

export default login;
