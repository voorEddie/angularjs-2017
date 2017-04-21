const SignUpComponent = {
  template: require('./sign-up.html'),
  controller: class SignUpComponent {
    constructor($state, ApiService) {
      'ngInject';
      this.$state = $state;
      this.ApiService = ApiService;
    }

    signUp({username, password}) {
      const redirectToLogin = () => {
        this.$state.go('login');
      };
      const showError = (errorMessage) => this.errorMessage = errorMessage;

      this.ApiService.api('post', 'signUp', {username, password})
        .then(redirectToLogin)
        .catch(showError)
    }

    inputChange() {
      this.errorMessage = null;
    }
  }
};

export default SignUpComponent;
