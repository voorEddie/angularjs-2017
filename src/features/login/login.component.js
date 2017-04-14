const LoginComponent = {
  template: require('./login.html'),
  controller: class LoginComponent {
    constructor(AuthService, $state) {
      'ngInject';
      this.AuthService = AuthService;
      this.$state = $state;
    }

    $onInit() {
      this.isAuthenticated = this.AuthService.isAuthenticated();
      this.username = this.AuthService.userData ? this.AuthService.userData.username : null;
    }

    login({username, password}) {
      const redirectToBase = () => {
        this.isAuthenticated = this.AuthService.isAuthenticated();
        this.$state.go('base');
      };
      const showError = (errorMessage) => this.errorMessage = errorMessage;

      this.AuthService.authenticate(username, password)
        .then(redirectToBase)
        .catch(showError)
    }

    logout() {
      this.AuthService.clearAuth();
      this.isAuthenticated = this.AuthService.isAuthenticated();
      this.username = null;
    }

    inputChange() {
      this.errorMessage = null;
    }
  }
};

export default LoginComponent;
