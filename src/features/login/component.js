import LoginController from './controller';

const LoginComponent = {
  controller: LoginController,
  template: `
    <div>Login</div>
    Username: <input type="txt" ng-model="$ctrl.username" />
    Password: <input type="password" ng-model="$ctrl.password" />
    <button ng-click="$ctrl.login($ctrl.username, $ctrl.password)">Login</button>
    <button ng-click="$ctrl.logout()">Logout</button>
  `
};

export default LoginComponent;
