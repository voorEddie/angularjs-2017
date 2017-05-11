import MonitorNodeDialogComponent from './monitor-node-dialog.component';
import MonitorNodeDialogService from './monitor-node-dialog.service';
import './monitor-node-dialog.css';

const MonitorNodeDialog = angular
  .module('monitorNodeDialog', [])
  .component('appMonitorNodeDialog', MonitorNodeDialogComponent)
  .service('MonitorNodeDialogService', MonitorNodeDialogService)
  .name;

export default MonitorNodeDialog;
