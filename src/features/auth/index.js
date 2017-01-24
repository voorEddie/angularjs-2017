import angular from 'angular';
import AuthService from './service';

const auth = angular
  .module('auth', [])
  .service('AuthService', AuthService)
  .name;

export default auth;
