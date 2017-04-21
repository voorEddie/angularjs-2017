import SignUpFormComponent from './sign-up-form.component';
import './sign-up-form.css';

const SignUpForm = angular
  .module('signUp.form', [])
  .component('appSignUpForm', SignUpFormComponent)
  .value('EventEmitter', payload => ({ $event: payload }))
  .name;

export default SignUpForm;
