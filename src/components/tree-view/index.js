import TreeViewComponent from './tree-view.component';
import TreeViewService from './tree-view.service';
import './tree-view.css';

const TreeView = angular
  .module('treeView', [])
  .component('appTreeView', TreeViewComponent)
  .value('EventEmitter', payload => ({ $event: payload }))
  .service('TreeViewService', TreeViewService)
  .name;

export default TreeView;
