const ConfirmDialogComponent = {
  bindings: {
    confirmTitle: '<',
    confirmText: '<'
  },
  template: require('./confirm-dialog.html'),
  controller: class ConfirmDialogComponent {
    constructor($mdDialog) {
      'ngInject';
      this.$mdDialog = $mdDialog;
    }

    cancel() {
      this.$mdDialog.cancel();
    }

    confirm() {
      this.$mdDialog.hide();
    }

  }
};

export default ConfirmDialogComponent;
