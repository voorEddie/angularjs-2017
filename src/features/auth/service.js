class AuthService {
  constructor(ApiService) {
    'ngInject';
    this.ApiService = ApiService;
    this.userData = null;
    this._loadAppDataFromSession();
  }

  authenticate(username, password) {

    return this.ApiService.api('POST', 'login', {username, password})
      .then((res) => {
        // TODO: should replace dummy sessionId when Server can reposonse a real sessionId
        this.userData = {
          username, password,
          sessionId: 'someDummySessionId'
        };
        sessionStorage.setItem('hmtSessionData', JSON.stringify(Object.assign({}, this.userData)));
      });
  }

  clearAuth() {
    this.userData = null;
    sessionStorage.removeItem('hmtSessionData');
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
