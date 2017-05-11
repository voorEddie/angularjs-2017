import loginForm from './login-form';
import signUpForm from './sign-up-form';
import toolbar from './toolbar';
import sideNav from './side-nav';
import confirmDialog from './confirm-dialog';
import monitorNodeDialog from './monitor-node-dialog';
import treeView from './tree-view';

const components = angular
  .module('components', [
    loginForm,
    signUpForm,
    toolbar,
    sideNav,
    confirmDialog,
    monitorNodeDialog,
    treeView
  ])
  .name;

export default components;
