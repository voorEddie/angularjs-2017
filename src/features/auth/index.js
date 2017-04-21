import AuthService from './auth.service';

const auth = angular
  .module('auth', [])
  .service('AuthService', AuthService)
  .run(($transitions, $state, AuthService) => {
    'ngInject';
    const checkAuth = () => {
      if (!AuthService.isAuthenticated()) {
        return $state.target('login');
      }
    };
    $transitions.onBefore({to: 'base.**'}, checkAuth);
  })
  .name;

export default auth;
