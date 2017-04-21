import loginForm from './login-form';
import signUpForm from './sign-up-form';
import toolbar from './toolbar';
import sideNav from './side-nav';
import confirmDialog from './confirm-dialog';

const components = angular
  .module('components', [
    loginForm,
    signUpForm,
    toolbar,
    sideNav,
    confirmDialog
  ])
  .name;

export default components;
