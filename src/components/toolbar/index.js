import ToolbarComponent from './toolbar.component';
import './toolbar.css';

const Toolbar = angular
  .module('toolbar', [])
  .component('appToolbar', ToolbarComponent)
  .name;

export default Toolbar;
