const UserSettingComponent = {
  template: require('./user-setting.html'),
  controller: class UserSettingComponent {
    constructor(ApiService, AuthService) {
      'ngInject';
      this.ApiService = ApiService;
      this.AuthService = AuthService;
    }

    $onInit() {
      this.apiMessage = {};
    }

    onSubmit(oldPassword, newPassword, confirmPassword) {
      if (newPassword && confirmPassword && newPassword === confirmPassword) {
        this.userSettingForm.confirmPassword.$setValidity('notMatch', true);
        this.ApiService.api('POST', 'resetPassword', {
          userName: this.AuthService.userData.username,
          oldPassword,
          newPassword
        })
          .then(successMsg => this.apiMessage.success = 'Your password has been reset successfully!')
          .catch(errorMsg => this.apiMessage.error = errorMsg);
      } else {
        this.userSettingForm.confirmPassword.$setValidity('notMatch', false);
      }
    }

    inputChange() {
      this.userSettingForm.confirmPassword.$setValidity('notMatch', true);
      this.apiMessage = {};
    }
  }
};

export default UserSettingComponent;
