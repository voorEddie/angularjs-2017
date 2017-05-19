const LoginFormComponent = {
  bindings: {
    isAuthenticated: '<',
    isInvalidSession: '<',
    errorMessage: '<',
    username: '<',
    onLogin: '&',
    onLogout: '&',
    onInputChange: '&'
  },
  template: require('./login-form.html'),
  controller: class LoginFormComponent {
    constructor(EventEmitter) {
      'ngInject';
      this.EventEmitter = EventEmitter;
    }

    onSubmit(username, password) {
      this.onLogin(
        this.EventEmitter({username, password})
      );
    }
  }
};

export default LoginFormComponent;
