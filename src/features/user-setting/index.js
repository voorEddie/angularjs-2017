import uiRouter from 'angular-ui-router';
import UserSettingComponent from './user-setting.component';

const userSetting = angular
  .module('userSetting', [
    uiRouter
  ])
  .component('appUserSetting', UserSettingComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('base.userSetting', {
        url: '/user-setting',
        component: 'appUserSetting'
      })
  })
  .name;

export default userSetting;
