import loginForm from './login-form';
import signUpForm from './sign-up-form';
import toolbar from './toolbar';
import sideNav from './side-nav';
import confirmDialog from './confirm-dialog';
import monitorNodeDialog from './monitor-node-dialog';
import treeView from './tree-view';
import statisticsBasic from './statistics-basic';
import statisticsCompare from './statistics-compare';
import operateFilterTemplateDialog from './operate-filter-template-dialog';

const components = angular
  .module('components', [
    loginForm,
    signUpForm,
    toolbar,
    sideNav,
    confirmDialog,
    monitorNodeDialog,
    treeView,
    statisticsBasic,
    statisticsCompare,
    operateFilterTemplateDialog
  ])
  .name;

export default components;
