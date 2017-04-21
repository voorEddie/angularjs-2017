import LoginFormComponent from './login-form.component';
import './login-form.css';

const LoginForm = angular
  .module('login.form', [])
  .component('appLoginForm', LoginFormComponent)
  .value('EventEmitter', payload => ({ $event: payload }))
  .name;

export default LoginForm;
