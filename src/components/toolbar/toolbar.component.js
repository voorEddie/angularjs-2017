const ToolbarComponent = {
  template: require('./toolbar.html'),
  controller: class ToolbarComponent {
    constructor($mdDialog, AuthService) {
      'ngInject';
      this.$mdDialog = $mdDialog;
      this.AuthService = AuthService;
    }

    $onInit() {
      this.currentUser = this.AuthService.userData.username;
    }

    openMenu($mdMenu, ev) {
      $mdMenu.open(ev);
    }

    logout(ev) {
      this.$mdDialog.show({
        targetEvent: ev,
        template: `
          <md-dialog aria-label="Confirm action">
            <app-confirm-dialog confirm-title="$ctrl.title" confirm-text="$ctrl.text"></app-confirm-dialog>
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
  }
};

export default ToolbarComponent;
