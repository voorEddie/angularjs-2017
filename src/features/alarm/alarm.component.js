const AlarmComponent = {
  template: require('./alarm.html'),
  controller: class AlarmComponent {
    constructor(ApiService, $timeout, AuthService) {
      'ngInject';
      this.ApiService = ApiService;
      this.$timeout = $timeout;
      this.AuthService = AuthService;
    }

    $onInit() {
      this.apiMessage = {};
      this.query = {
        limit: 8,
        page: 1
      };
      this.historyAlarm();
    }

    historyAlarm() {
      this.apiMessage = {};
      this.ApiService.api('GET', 'historyAlarm', null, {sessionId: this.AuthService.userData.sessionId})
      .then(res => {
        this.alarm = res;
        this.total = this.alarm.length;
        this.apiMessage.success = 'Get alarm informarion successfully!';
        this.$timeout(() => {
          this.apiMessage.success = null;
        }, 2000);
      })
      .catch(errorMsg => {
        this.apiMessage.error = errorMsg;
      });
    };

    $onChanges(changes) {
      if (changes.apiMessage && !changes.apiMessage.isFirstChange()) {
        this.apiMessage = {};
      }
    }
  }
};

export default AlarmComponent;
