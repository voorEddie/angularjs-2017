import SideNavComponent from './side-nav.component';
import './side-nav.css';

const SideNav = angular
  .module('sideNav', [])
  .component('appSideNav', SideNavComponent)
  .name;

export default SideNav;
