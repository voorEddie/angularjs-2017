class AuthService {
  constructor($q, $http, ApiService) {
    this.$q = $q;
    this.$http = $http;
    this.ApiService = ApiService;
    this.authenticatedUser = {};
    this.load();
  }

  load() {
    try {
      return angular.extend(this.authenticatedUser, angular.fromJson(sessionStorage.getItem('appDataFromSession')));
    } catch (error) {
      console.error(error);
    }
  }

  save() {
    sessionStorage.setItem('appDataFromSession', angular.toJson(angular.extend({}, this.authenticatedUser)));
  }

  isAuthenticated() {
    return !!this.authenticatedUser;
  }

  authenticate(username, password) {
    return this.ApiService.api('login', null, {name: username, password: password})
      .then((res) => {
        this.authenticatedUser = res.data;
        this.save();
      })
  }

  logout() {
    this.authenticatedUser = undefined;
    this.save();
  }
}

AuthService.$inject = ['$q', '$http', 'ApiService'];

export default AuthService;
