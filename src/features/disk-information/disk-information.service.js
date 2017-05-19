class DiskInformationService {
  getSelectedSsdInfo(ssd) {
    if (ssd) {
      let ssdDetail = ssd.attr.text.split('@');
      return {
        'Model Name': ssdDetail[4],
        'Serial Number': ssdDetail[5],
        'Capacity': ssdDetail[1],
        'Bus Type': ssdDetail[0],
        'Disk Number': ssdDetail[2],
        'Firmware Version': ssdDetail[3],
        'Health Status': ssdDetail[6],
        'Health Reason': ssdDetail[7]
      };
    } else {
      return null;
    }
  }
}

export default DiskInformationService;
