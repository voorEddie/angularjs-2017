class LoginController {
  constructor(AuthService, $state) {
    this.AuthService = AuthService;
    this.$state = $state;
  }

  login(username, password) {
    const redirectToBase = () => {
      this.$state.go('base');}
    const showError = (errorMessage) => this.errorMessage = errorMessage;

    this.AuthService.authenticate(username, password)
      .then(redirectToBase)
      .catch(showError)
  }

  logout() {
    this.AuthService.clearAuth();
  }
}

LoginController.$inject = ['AuthService', '$state'];

export default LoginController;
