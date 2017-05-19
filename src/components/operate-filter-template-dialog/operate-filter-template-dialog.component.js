const OperateFilterTemplateDialogComponent = {
  bindings: {
    dialogTitle: '<',
    currentTemplate: '<',
    templates: '<'
  },
  template: require('./operate-filter-template-dialog.html'),
  controller: class OperateFilterTemplateDialogComponent {
    constructor($mdDialog) {
      'ngInject';
      this.$mdDialog = $mdDialog;
    }

    cancel() {
      this.$mdDialog.cancel();
    }

    submit(selectedTemplate) {
      this.$mdDialog.hide(selectedTemplate);
    }

  }
};

export default OperateFilterTemplateDialogComponent;
