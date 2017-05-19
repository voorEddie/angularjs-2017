const DiskInformationComponent = {
  bindings: {
    selectedSsd: '<'
  },
  template: require('./disk-information.html'),
  controller: class DiskInformationComponent {
    constructor(DiskInformationService) {
      'ngInject';
      this.DiskInformationService = DiskInformationService;
    }

    $onChanges(changes) {
      if (changes.selectedSsd && !changes.selectedSsd.isFirstChange()) {
        this.selectedSsd = JSON.parse(JSON.stringify(this.selectedSsd));
        this.selectedSsdInfo = this.DiskInformationService.getSelectedSsdInfo(this.selectedSsd);
      }
    }

    $onInit() {
      if (this.selectedSsd) {
        this.selectedSsdInfo = this.DiskInformationService.getSelectedSsdInfo(this.selectedSsd);
      }
    }

  }
};

export default DiskInformationComponent;
