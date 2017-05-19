import StatisticsBasicComponent from './statistics-basic.component';
import StatisticsBasicService from './statistics-basic.service';
import './statistics-basic.css';

const StatisticsBasic = angular
  .module('statisticsBasic', [])
  .component('appStatisticsBasic', StatisticsBasicComponent)
  .service('StatisticsBasicService', StatisticsBasicService)
  .name;

export default StatisticsBasic;
