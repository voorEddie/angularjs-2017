class AuthService {
  constructor(ApiService) {
    this.ApiService = ApiService;
    this.userData = null;
    this._loadAppDataFromSession();
  }

  authenticate(username, password) {
    return this.ApiService.api('login', null, {name: username, password: password})
      .then((res) => {
        this.userData = res.data;
        sessionStorage.setItem('appDataFromSession', angular.toJson(angular.extend({}, this.userData)));
      });
  }

  clearAuth() {
    this.userData = null;
    sessionStorage.removeItem('appDataFromSession');
  }

  isAuthenticated() {
    return !!this.userData;
  }

  _loadAppDataFromSession() {
    let appDataFromSession = angular.fromJson(sessionStorage.getItem('appDataFromSession'));
    if (appDataFromSession) {
      this.userData = angular.extend({}, appDataFromSession);
    }
  }

}

AuthService.$inject = ['ApiService'];

export default AuthService;
