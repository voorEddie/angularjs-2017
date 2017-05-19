class StatisticsBasicService {
  constructor() {
    'ngInject';
  }

  filterRawDataByTemplate(rawData, template) {
    let filteredData = JSON.parse(JSON.stringify(rawData));
    filteredData.Value.Basic = rawData.Value.Basic.filter(item => template.config.indexOf(item.Description) > -1);
    return filteredData;
  }

  setTemplateSelection(templateName, data) {
    let sn = data['Serial Number'],
        key = 'hmt-ssd-' + sn;
    if (templateName === null) {
      sessionStorage.removeItem(key)
    } else {
      sessionStorage.setItem(key, templateName);
    }
  }

  getTemplateSelection(data) {
    let sn = data['Serial Number'],
        key = 'hmt-ssd-' + sn;
    return sessionStorage.getItem(key);
  }



}

export default StatisticsBasicService;
