const StatisticsBasicComponent = {
  bindings: {
    data: '<',
    filterTemplates: '<',
    getFilterTemplates: '&'
  },
  template: require('./statistics-basic.html'),
  controller: class StatisticsBasicComponent {
    constructor($mdDialog, StatisticsBasicService) {
      'ngInject';
      this.$mdDialog = $mdDialog;
      this.StatisticsBasicService = StatisticsBasicService;
    }

    $onChanges(changes) {
      if (changes.data && !changes.data.isFirstChange()) {
        this.data = JSON.parse(JSON.stringify(this.data));
        this.selectedFilterTemplate = this.StatisticsBasicService.getTemplateSelection(this.data);
        this.filteredData = this.getFilteredData(this.filterTemplates, this.selectedFilterTemplate, this.data);
        this.total = this.filteredData.Value.Basic.length;
        this.hasfilterTemplates = this.filterTemplates && Object.keys(this.filterTemplates).length > 0;
      }
    }

    $onInit() {
      this.getFilterTemplates();
      if (this.data) {
        this.selectedFilterTemplate = this.StatisticsBasicService.getTemplateSelection(this.data);
        this.filteredData = this.getFilteredData(this.filterTemplates, this.selectedFilterTemplate, this.data);
        this.total = this.filteredData.Value.Basic.length;
      }
      if (this.filterTemplates) {
        this.hasfilterTemplates = this.filterTemplates && Object.keys(this.filterTemplates).length > 0;
      }
      this.query = {
        filter: '',
        limit: 8,
        page: 1
      };

      this.filter = {
        options: {
          debounce: 500
        }
      };
    }

    getFilteredData(filterTemplates = {}, selectedFilterTemplate = null, rawData) {
      if (Object.keys(filterTemplates).length > 0 && selectedFilterTemplate) {
        return this.StatisticsBasicService.filterRawDataByTemplate(rawData, filterTemplates[selectedFilterTemplate]);
      } else {
        return rawData;
      }
    }

    selectFilterTemplate(currentTemplate, templates, ev) {
      this.$mdDialog.show({
        targetEvent: ev,
        template: `
          <md-dialog aria-label="Filter templates">
            <app-operate-filter-template-dialog
              class="hmt-dialog"
              dialog-title="$ctrl.dialogTitle"
              current-template="$ctrl.currentTemplate"
              templates="$ctrl.templates"></app-operate-filter-template-dialog>
          </md-dialog>
        `,
        controller: function () {
          this.dialogTitle = "Select a filter template";
          this.currentTemplate = currentTemplate;
          this.templates = templates;
        },
        controllerAs: '$ctrl'
      })
      .then(selectedTemplate => {
        this.selectedFilterTemplate = selectedTemplate;
        this.StatisticsBasicService.setTemplateSelection(selectedTemplate, this.filteredData);
        this.filteredData = this.getFilteredData(this.filterTemplates, this.selectedFilterTemplate, this.data);
        this.total = this.filteredData.Value.Basic.length;
      });
    }

    createFilterTemplate(data) {
      console.info(data)
    }

    clearSelectedFilterTemplate() {
      this.selectedFilterTemplate = null;
      this.StatisticsBasicService.setTemplateSelection(this.selectedFilterTemplate, this.filteredData);
      this.filteredData = this.getFilteredData(this.filterTemplates, this.selectedFilterTemplate, this.data);
      this.total = this.filteredData.Value.Basic.length;
    }

    openMenu($mdMenu, ev) {
      $mdMenu.open(ev);
    }

  }
};

export default StatisticsBasicComponent;
