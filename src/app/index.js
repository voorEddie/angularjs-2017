import angular from 'angular';
import uiRouter from 'angular-ui-router';
import features from '../features';
import AppComponent from './component';
import 'normalize.css';
import './style.css';

const app = angular
  .module('app', [
    features,
    uiRouter
  ])
  .component('appRoot', AppComponent)
  .name;

export default app;
