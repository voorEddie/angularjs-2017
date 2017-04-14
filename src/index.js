// loading ES6 'Object.assign' polyfill for IE11
import "core-js/fn/object/assign";

import angular from 'angular';
import App from './app';

angular.bootstrap(document, [App], {strictDi: true});
