class LoginController {
  constructor(AuthService) {
    this.AuthService = AuthService;
  }

  $onInit() {
  }

  $onChanges(changes) {
  }

  login(username, password) {
    this.AuthService.authenticate(username, password);
  }

  logout() {
    this.AuthService.logout();
  }
}

LoginController.$inject = ['AuthService'];

export default LoginController;
