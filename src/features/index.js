import angular from 'angular';
import auth from './auth';
import login from './login';
import api from './api';
import base from './base';

const features = angular
  .module('features', [
    api,
    auth,
    login,
    base
  ])
  .name;

export default features;
