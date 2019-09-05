import "bootstrap";

import { initGrid } from '../modules/init_grid';
import { initPanzoom } from '../modules/init_panzoom';
import { initTracker } from '../modules/init_tracker';
import { initColsPicker } from '../modules/init_colspicker';
import { initClicker } from '../modules/init_clicker';
import { initColorCopier } from '../modules/init_color_copier';
import { initEffectListeners } from '../modules/init_effect_listeners';
import { initImgPainter } from '../modules/init_img_painter';

initGrid();
initPanzoom();
initTracker();
initColsPicker();
initClicker();
initColorCopier();
initEffectListeners();
initImgPainter();
