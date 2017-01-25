class AuthService {
  constructor($q, $http) {
    this.$q = $q;
    this.$http = $http;
    this.load();
  }

  load() {
    try {
      return angular.extend(this, angular.fromJson(sessionStorage.getItem('appDataFromSession')));
    } catch (error) {
      console.error(error);
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
    const { $q, $http } = this;

    const checkCredentials = () => $q((resolve, reject) => {
      $http({
        method: 'POST',
        url: '/CogServer/BasicServlet',
        data: 'login=' + encodeURIComponent(JSON.stringify({name: username, password: password})),
        params: {reqType: 'login'},
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      })
      .then(({data: {status, resData}}) => {
        console.info(status)
        console.info(resData)
        if (status === 0) {
          resolve(data);
        } else {
          reject(resData);
        }
      })
      .catch(({status, statusText}) => {
        reject('Error: ' + status + ' ' + statusText);
      });
    });

    return checkCredentials()
      .then((data) => {
        this.authenticatedUser = data;
        this.save();
      });
  }

  logout() {
    this.authenticatedUser = undefined;
    this.save();
  }
}

AuthService.$inject = ['$q', '$http'];

export default AuthService;
