const SignUpFormComponent = {
  bindings: {
    errorMessage: '<',
    onSignUp: '&',
    onInputChange: '&'
  },
  template: require('./sign-up-form.html'),
  controller: class SignUpFormComponent {
    constructor(EventEmitter) {
      'ngInject';
      this.EventEmitter = EventEmitter;
    }

    onSubmit(username, password, confirmPassword) {
      if (password && confirmPassword && password === confirmPassword) {
        this.signUpForm.confirmPassword.$setValidity('notMatch', true);
        this.onSignUp(this.EventEmitter({username, password}));
      } else {
        this.signUpForm.confirmPassword.$setValidity('notMatch', false);
      }
    }

    inputChange() {
      this.signUpForm.confirmPassword.$setValidity('notMatch', true);
      this.onInputChange();
    }
  }
};

export default SignUpFormComponent;
