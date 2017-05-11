class MonitorNodeDialogService {
  constructor() {
    'ngInject';
  }

  getSmartInterval() {
    return [
      {text: '10 Minutes', value: '10'},
      {text: '1 Hour', value: '60'},
      {text: 'Never', value: '0'}
    ];
  }

  getDslrInterval() {
    return [
      {text: '1 Hour', value: '60'},
      {text: 'Never', value: '0'}
    ];
  }

  getNewServer() {
    return {
      "ip_address": "",
      "port": "22",
      "description": "",
      "servertype": "",
      "username": "",
      "password": ""
    };
  }

  getNodeDialog(type, rawData) {
    if (type === 'Add') {
      return {
        nodeport: '9000',
        smart: '60',
        dslr: '60',
        nodeusername: 'root',
        nodepassword: 'magician',
        servers: []
      }
    } else if (type === 'Edit') {
      let result = {};
      result = JSON.parse(JSON.stringify(rawData));
      result.smart += '';
      result.dslr += '';
      return result;
    }
  }

  validateDialogData(rawData, allNodeList, nodeIp = false) {
    let data = JSON.parse(angular.toJson(rawData));
    if (data.nodeip !== nodeIp && allNodeList.indexOf(data.nodeip) > -1) {
      return {
        isValid: false,
        errorMsg: 'IP Address: (' + data.nodeip + ') has been added already'
      };
    } else {
      return {
        isValid: true,
        errorMsg: 'WIP',
        data
      };
    }
  }

}

export default MonitorNodeDialogService;
