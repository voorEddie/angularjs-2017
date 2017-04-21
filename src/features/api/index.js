import ApiService from './api.service';

const api = angular
  .module('api', [])
  .service('ApiService', ApiService)
  .name;

export default api;
