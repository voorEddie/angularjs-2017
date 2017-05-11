import TreeViewComponent from './tree-view.component';
import './tree-view.css';

const TreeView = angular
  .module('treeView', [])
  .component('appTreeView', TreeViewComponent)
  .name;

export default TreeView;
