class ApiService {
  constructor($q, $http) {
    'ngInject';
    this.$q = $q;
    this.$http = $http;
    this.debug = true;
  }

  api(method, url, data, params) {
    const { $q, $http } = this;

    return $q((resolve, reject) => {
      $http({
        method: this.debug ? 'GET' : method,
        url: this.debug ? url + '.json' : '../' + url,
        data,
        params
      })
      .then(({data}) => {
        resolve(data);
      })
      .catch(({status, statusText}) => {
        reject('Error: ' + status + ' ' + statusText);
      });
    });
  }

}

export default ApiService;
