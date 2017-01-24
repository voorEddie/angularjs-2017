import angular from 'angular';
import uiRouter from 'angular-ui-router';
import BaseComponent from './component';

const base = angular
  .module('base', [
    uiRouter
  ])
  .component('appBase', BaseComponent)
  .config([
    '$stateProvider',
    ($stateProvider) => {
      $stateProvider
        .state('base', {
          url: '/base',
          component: 'appBase'
        })
    }
  ])
  .name;

export default base;
