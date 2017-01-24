import angular from 'angular';
import auth from './auth';
import login from './login';
import base from './base';

const features = angular
  .module('features', [
    auth,
    login,
    base
  ])
  .name;

export default features;
