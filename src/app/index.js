import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import features from '../features';
import AppComponent from './component';
import 'normalize.css';
import 'angular-material/angular-material.css';
import './style.css';

const app = angular
  .module('app', [
    uiRouter,
    ngMaterial,
    features,
  ])
  .config([
    '$mdThemingProvider',
    ($mdThemingProvider) => {
      $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('red');
    }
  ])
  .component('appRoot', AppComponent)
  .name;

export default app;
