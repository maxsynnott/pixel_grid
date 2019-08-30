    const rgbas = {0: [255, 255, 255, 255],
                  1: [87, 87, 87, 255],
                  2: [173, 35, 35, 255],
                  3: [42, 75, 215, 255],
                  4: [29, 105, 20, 255],
                  5: [129, 74, 25, 255],
                  6: [129, 38, 192, 255],
                  7: [160, 160, 160, 255],
                  8: [129, 197, 122, 255],
                  9: [157, 175, 255, 255],
                  10: [41, 208, 208, 255],
                  11: [255, 146, 51, 255],
                  12: [255, 238, 51, 255],
                  13: [233, 222, 187, 255],
                  14: [255, 205, 243, 255],
                  15: [0, 0, 0, 255]}


import "bootstrap";
import { initGrid } from '../modules/init_grid';
import { initStage } from '../modules/init_stage';
import { initTracker } from '../modules/init_tracker';
import { initClicker } from '../modules/init_clicker';
// import { initColsPicker } from '../modules/init_colspicker';
initGrid();
initStage();
initTracker();
initClicker();
// initColsPicker();

