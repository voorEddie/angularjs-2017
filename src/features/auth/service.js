export default class AuthService {
  constructor($timeout, $q) {
    this.$timeout = $timeout;
    this.$q = $q;
    this.load();
  }

  load() {
    try {
      return angular.extend(this, angular.fromJson(sessionStorage.getItem('appDataFromSession')));
    } catch (error) {
      console.log(error);
    }

    return this;
  }

  save() {
    sessionStorage.setItem('appDataFromSession', angular.toJson(angular.extend({}, this)));
  }

  isAuthenticated() {
    return !!this.authenticatedUser;
  }

  authenticate(username, password) {
    let { $timeout, $q, AppConfig } = this;

    // checks if the username is one of the known usernames, and the password is 'password'
    const checkCredentials = () => $q((resolve, reject) => {
      var validUsername = true;
      var validPassword = password === 'password';

      return (validUsername && validPassword) ? resolve(username) : reject("Invalid username or password");
    });

    return $timeout(checkCredentials, 800)
      .then((authenticatedUser) => {
        this.authenticatedUser = authenticatedUser;
        this.save();
      });
  }

  logout() {
    this.authenticatedUser = undefined;
    this.save();
  }
}
