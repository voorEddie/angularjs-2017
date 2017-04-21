import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import angularLoadingBar from 'angular-loading-bar';
import features from '../features';
import components from '../components';
import AppComponent from './app.component';
import 'normalize.css';
import 'angular-material/angular-material.css';
import 'angular-loading-bar/build/loading-bar.css';
import './app.css';

const app = angular
  .module('app', [
    uiRouter,
    ngMaterial,
    ngMessages,
    angularLoadingBar,
    features,
    components
  ])
  .config(($mdThemingProvider, $mdIconProvider) => {
    'ngInject';
    $mdThemingProvider
      .theme('default')
      .primaryPalette('blue')
      .accentPalette('grey');
    $mdIconProvider
			.iconSet('action', './iconsets/action-icons.svg', 24)
			.iconSet('alert', './iconsets/alert-icons.svg', 24)
			.iconSet('av', './iconsets/av-icons.svg', 24)
			.iconSet('communication', './iconsets/communication-icons.svg', 24)
			.iconSet('content', './iconsets/content-icons.svg', 24)
			.iconSet('device', './iconsets/device-icons.svg', 24)
			.iconSet('editor', './iconsets/editor-icons.svg', 24)
			.iconSet('file', './iconsets/file-icons.svg', 24)
			.iconSet('hardware', './iconsets/hardware-icons.svg', 24)
			.iconSet('icons', './iconsets/icons-icons.svg', 24)
			.iconSet('image', './iconsets/image-icons.svg', 24)
			.iconSet('maps', './iconsets/maps-icons.svg', 24)
			.iconSet('navigation', './iconsets/navigation-icons.svg', 24)
			.iconSet('notification', './iconsets/notification-icons.svg', 24)
			.iconSet('social', './iconsets/social-icons.svg', 24)
			.iconSet('toggle', './iconsets/toggle-icons.svg', 24);
  })
  .component('appRoot', AppComponent)
  .name;

export default app;
