import uiRouter from 'angular-ui-router';
import LoginComponent from './login.component';
import './login.css';

const login = angular
  .module('login', [
    uiRouter
  ])
  .component('appLogin', LoginComponent)
  .config(($urlRouterProvider, $stateProvider) => {
    'ngInject';
    $urlRouterProvider
      .otherwise('/hmt');
    $stateProvider
      .state('login', {
        url: '/login',
        component: 'appLogin'
      });
  })
  .name;

export default login;
