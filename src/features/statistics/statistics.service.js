class StatisticsService {
  getSmartDslrPostData(nodeIP, targetIP, ssdData) {
    let other = ssdData.attr.text.split('@');
    let diskNumber = other[2];

    return {
      nodeIP,
      targetIP,
      diskNumber,
      other
    };
  }
}

export default StatisticsService;
