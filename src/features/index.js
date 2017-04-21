import auth from './auth';
import login from './login';
import signUp from './sign-up'
import api from './api';
import base from './base';
import statistics from './statistics';
import dashboard from './dashboard';
import monitorNode from './monitor-node';
import userSetting from './user-setting';
import alarm from './alarm';
import diskInformation from './disk-information';
import dslr from './dslr';
import smart from './smart';

const features = angular
  .module('features', [
    api,
    auth,
    login,
    signUp,
    base,
    statistics,
    dashboard,
    monitorNode,
    userSetting,
    alarm,
    diskInformation,
    dslr,
    smart
  ])
  .name;

export default features;
