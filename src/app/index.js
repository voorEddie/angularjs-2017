import angular from 'angular';
import uiRouter from 'angular-ui-router';
import features from '../features';
import AppComponent from './component';

const app = angular
  .module('app', [
    features,
    uiRouter
  ])
  .component('appRoot', AppComponent)
  .name;

export default app;
