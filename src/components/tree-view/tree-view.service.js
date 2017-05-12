class TreeViewService {
  constructor() {
    'ngInject';
  }

  getSsdId(nodeIp, serverIp) {
    return 's' + nodeIp.split('.').join('D') + 'l' + serverIp.split('.').join('D');
  }

}

export default TreeViewService;
