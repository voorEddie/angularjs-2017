import angular from 'angular';
import ApiService from './service';

const api = angular
  .module('api', [])
  .service('ApiService', ApiService)
  .name;

export default api;
