import LoginController from './controller';

const LoginComponent = {
  controller: LoginController,
  template: `
    <div>Login</div>
    Username: <input type="txt" ng-model="$ctrl.username" />
    Password: <input type="password" ng-model="$ctrl.password" />
    <md-button class="md-primary md-raised" ng-click="$ctrl.login($ctrl.username, $ctrl.password)">Login</md-button>
    <md-button class="md-primary" ng-click="$ctrl.logout()">Logout</md-button>
    <span>{{$ctrl.errorMessage}}</span>
  `
};

export default LoginComponent;
