import angular from 'angular';
import LoginFormComponent from './login-form.component';

const LoginForm = angular
  .module('login.form', [])
  .component('appLoginForm', LoginFormComponent)
  .value('EventEmitter', payload => ({ $event: payload }))
  .name;

export default LoginForm;
