import uiRouter from 'angular-ui-router';
import DslrComponent from './dslr.component';

const dslr = angular
  .module('dslr', [
    uiRouter
  ])
  .component('appDslr', DslrComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('base.statistics.dslr', {
        url: '/dslr',
        component: 'appDslr'
      })
  })
  .name;

export default dslr;
