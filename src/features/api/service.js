class ApiService {
  constructor($q, $http) {
    this.$q = $q;
    this.$http = $http;
    this.debug = true;
  }

  api(params, postData) {
    const { $q, $http } = this;

    return $q((resolve, reject) => {
      $http({
        method: this.debug ? 'GET' : 'POST',
        url: this.debug ? params.reqType + '.json' : '/CogServer/BasicServlet',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        params: params,
        data: postData
      })
      .then((res) => {
        if (res.data.status === 0) {
          resolve(res.data);
        } else {
          reject(res.data.resData);
        }
      })
      .catch(({status, statusText}) => {
        reject('Error: ' + status + ' ' + statusText);
      });
    });
  }

}

ApiService.$inject = ['$q', '$http'];

export default ApiService;
