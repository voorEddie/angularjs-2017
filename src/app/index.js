import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import angularLoadingBar from 'angular-loading-bar';
import features from '../features';
import components from '../components';
import AppComponent from './component';
import 'normalize.css';
import 'angular-material/angular-material.css';
import 'angular-loading-bar/build/loading-bar.css';
import './style.css';

const app = angular
  .module('app', [
    uiRouter,
    ngMaterial,
    ngMessages,
    angularLoadingBar,
    features,
    components
  ])
  .config(($mdThemingProvider) => {
    'ngInject';
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('red');
  })
  .component('appRoot', AppComponent)
  .name;

export default app;
