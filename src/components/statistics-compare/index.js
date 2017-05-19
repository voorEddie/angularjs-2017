import StatisticsCompareComponent from './statistics-compare.component';
import './statistics-compare.css';

const StatisticsCompare = angular
  .module('statisticsCompare', [])
  .component('appStatisticsCompare', StatisticsCompareComponent)
  .name;

export default StatisticsCompare;
