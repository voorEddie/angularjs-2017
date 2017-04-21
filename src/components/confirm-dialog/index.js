import ConfirmDialogComponent from './confirm-dialog.component';
import './confirm-dialog.css';

const ConfirmDialog = angular
  .module('confirmDialog', [])
  .component('appConfirmDialog', ConfirmDialogComponent)
  .name;

export default ConfirmDialog;
