const ToolbarComponent = {
  template: require('./toolbar.html'),
  controller: class ToolbarComponent {
    constructor($transitions, $state, $mdDialog, AuthService) {
      'ngInject';
      this.$transitions = $transitions;
      this.$state = $state;
      this.$mdDialog = $mdDialog;
      this.AuthService = AuthService;
    }

    $onInit() {
      this.currentUser = this.AuthService.userData.username;
      this.currentFeatureName = this._getCurrentFeatureName(this.$state.current.url);
      this.$transitions.onSuccess({}, () => {
        this.currentFeatureName = this._getCurrentFeatureName(this.$state.current.url);
      });
    }

    openMenu($mdMenu, ev) {
      $mdMenu.open(ev);
    }

    logout(ev) {
      this.$mdDialog.show({
        targetEvent: ev,
        template: `
          <md-dialog aria-label="Confirm action">
            <app-confirm-dialog
              class="hmt-dialog"
              confirm-title="$ctrl.title"
              confirm-text="$ctrl.text"></app-confirm-dialog>
          </md-dialog>
        `,
        controller: function () {
          this.title = 'Confirm logout action';
          this.text = 'Would you like to logout?';
        },
        controllerAs: '$ctrl'
      })
      .then(() => this.AuthService.clearAuth());
    }

    _getCurrentFeatureName(featureName) {
      let result =  featureName.replace(/\//g, '').split('-').join(' ');
      if (result === 'smart' || result === 'dslr') {
        result = result.toUpperCase();
      } else if (result === 'hmt') {
        result = 'health monitor tool';
      }
      return result;
    }
  }
};

export default ToolbarComponent;
