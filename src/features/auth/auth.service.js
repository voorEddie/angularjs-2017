class AuthService {
  constructor(ApiService, $state) {
    'ngInject';
    this.ApiService = ApiService;
    this.$state = $state;
    this.userData = null;
    this._loadAppDataFromSession();
  }

  authenticate(username, password) {

    return this.ApiService.api('POST', 'login', {username, password})
      .then((res) => {
        this.userData = {
          username, password,
          sessionId: res.sessionId
        };
        sessionStorage.setItem('hmtSessionData', JSON.stringify(Object.assign({}, this.userData)));
      });
  }

  clearAuth() {
    this.userData = null;
    sessionStorage.removeItem('hmtSessionData');
    this.$state.go('login');
  }

  isAuthenticated() {
    return !!this.userData;
  }

  _loadAppDataFromSession() {
    let appDataFromSession = JSON.parse(sessionStorage.getItem('hmtSessionData'));

    if (appDataFromSession) {
      this.userData = Object.assign({}, appDataFromSession);
    }
  }

}

export default AuthService;
