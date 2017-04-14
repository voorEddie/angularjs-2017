import angular from 'angular';
import loginForm from './login-form';

const components = angular
  .module('components', [
    loginForm
  ])
  .name;

export default components;
