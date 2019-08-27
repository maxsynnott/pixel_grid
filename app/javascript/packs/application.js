import "bootstrap";
import panzoom from "panzoom";
import { initGrid } from '../modules/init_grid';
initGrid();
var theStage = document.querySelector('#stage');
panzoom(theStage);
