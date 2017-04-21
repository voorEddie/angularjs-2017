import uiRouter from 'angular-ui-router';
import SignUpComponent from './sign-up.component';
import './sign-up.css';

const signUp = angular
  .module('sign-up', [
    uiRouter
  ])
  .component('appSignUp', SignUpComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('sign-up', {
        url: '/sign-up',
        component: 'appSignUp'
      })
  })
  .name;

export default signUp;
