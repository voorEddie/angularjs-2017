class AuthService {
  constructor(ApiService) {
    this.ApiService = ApiService;
    this.userData = null;
    this._loadAppDataFromSession();
  }

  authenticate(username, password) {
    let params = { reqType: 'login' };
    let postData = 'login=' + encodeURIComponent(JSON.stringify({name: username, password: password}));

    return this.ApiService.api(params, postData)
      .then((res) => {
        this.userData = res.result;
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
