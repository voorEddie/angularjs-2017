class ApiService {
  constructor($q, $http) {
    'ngInject';
    this.$q = $q;
    this.$http = $http;
    this.debug = true;
  }

  api(method, url, data) {
    const { $q, $http } = this;

    return $q((resolve, reject) => {
      $http({
        method: this.debug ? 'GET' : method,
        url: this.debug ? url + '.json' : url,
        data: data
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
