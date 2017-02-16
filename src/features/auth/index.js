import angular from 'angular';
import AuthService from './service';

const auth = angular
  .module('auth', [])
  .service('AuthService', AuthService)
  .run([
    '$transitions', 'AuthService',
    ($transitions, AuthService) => {
      let redirectToLogin = (transition) => {
        let $state = transition.router.stateService;
        if (!AuthService.isAuthenticated()) {
          return $state.target('login');
        }
      };
      $transitions.onBefore({to: 'base'}, redirectToLogin);
    }
  ])
  .name;

export default auth;
