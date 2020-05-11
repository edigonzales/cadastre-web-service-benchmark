/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 221.0, "minX": 0.0, "maxY": 2162.0, "series": [{"data": [[0.0, 221.0], [0.1, 231.0], [0.2, 237.0], [0.3, 243.0], [0.4, 246.0], [0.5, 247.0], [0.6, 249.0], [0.7, 251.0], [0.8, 255.0], [0.9, 256.0], [1.0, 257.0], [1.1, 258.0], [1.2, 258.0], [1.3, 262.0], [1.4, 263.0], [1.5, 265.0], [1.6, 268.0], [1.7, 268.0], [1.8, 270.0], [1.9, 270.0], [2.0, 270.0], [2.1, 271.0], [2.2, 272.0], [2.3, 274.0], [2.4, 275.0], [2.5, 275.0], [2.6, 276.0], [2.7, 276.0], [2.8, 276.0], [2.9, 277.0], [3.0, 279.0], [3.1, 280.0], [3.2, 282.0], [3.3, 284.0], [3.4, 284.0], [3.5, 284.0], [3.6, 285.0], [3.7, 285.0], [3.8, 286.0], [3.9, 288.0], [4.0, 288.0], [4.1, 289.0], [4.2, 289.0], [4.3, 290.0], [4.4, 290.0], [4.5, 290.0], [4.6, 291.0], [4.7, 291.0], [4.8, 292.0], [4.9, 292.0], [5.0, 293.0], [5.1, 294.0], [5.2, 294.0], [5.3, 294.0], [5.4, 295.0], [5.5, 296.0], [5.6, 297.0], [5.7, 297.0], [5.8, 298.0], [5.9, 298.0], [6.0, 298.0], [6.1, 299.0], [6.2, 300.0], [6.3, 300.0], [6.4, 300.0], [6.5, 301.0], [6.6, 302.0], [6.7, 302.0], [6.8, 303.0], [6.9, 303.0], [7.0, 304.0], [7.1, 305.0], [7.2, 305.0], [7.3, 305.0], [7.4, 306.0], [7.5, 306.0], [7.6, 306.0], [7.7, 307.0], [7.8, 308.0], [7.9, 308.0], [8.0, 309.0], [8.1, 310.0], [8.2, 310.0], [8.3, 311.0], [8.4, 312.0], [8.5, 312.0], [8.6, 313.0], [8.7, 313.0], [8.8, 314.0], [8.9, 314.0], [9.0, 315.0], [9.1, 315.0], [9.2, 316.0], [9.3, 316.0], [9.4, 317.0], [9.5, 317.0], [9.6, 317.0], [9.7, 317.0], [9.8, 318.0], [9.9, 318.0], [10.0, 318.0], [10.1, 319.0], [10.2, 319.0], [10.3, 319.0], [10.4, 320.0], [10.5, 320.0], [10.6, 320.0], [10.7, 321.0], [10.8, 321.0], [10.9, 321.0], [11.0, 321.0], [11.1, 322.0], [11.2, 322.0], [11.3, 323.0], [11.4, 323.0], [11.5, 323.0], [11.6, 324.0], [11.7, 324.0], [11.8, 324.0], [11.9, 324.0], [12.0, 324.0], [12.1, 325.0], [12.2, 325.0], [12.3, 325.0], [12.4, 326.0], [12.5, 326.0], [12.6, 327.0], [12.7, 327.0], [12.8, 328.0], [12.9, 329.0], [13.0, 329.0], [13.1, 329.0], [13.2, 329.0], [13.3, 330.0], [13.4, 330.0], [13.5, 330.0], [13.6, 331.0], [13.7, 331.0], [13.8, 331.0], [13.9, 332.0], [14.0, 332.0], [14.1, 332.0], [14.2, 333.0], [14.3, 333.0], [14.4, 333.0], [14.5, 334.0], [14.6, 334.0], [14.7, 334.0], [14.8, 335.0], [14.9, 335.0], [15.0, 336.0], [15.1, 337.0], [15.2, 337.0], [15.3, 337.0], [15.4, 337.0], [15.5, 339.0], [15.6, 339.0], [15.7, 339.0], [15.8, 339.0], [15.9, 340.0], [16.0, 341.0], [16.1, 341.0], [16.2, 341.0], [16.3, 342.0], [16.4, 342.0], [16.5, 342.0], [16.6, 342.0], [16.7, 342.0], [16.8, 343.0], [16.9, 343.0], [17.0, 344.0], [17.1, 344.0], [17.2, 344.0], [17.3, 345.0], [17.4, 345.0], [17.5, 345.0], [17.6, 346.0], [17.7, 346.0], [17.8, 347.0], [17.9, 347.0], [18.0, 347.0], [18.1, 348.0], [18.2, 348.0], [18.3, 348.0], [18.4, 349.0], [18.5, 349.0], [18.6, 349.0], [18.7, 350.0], [18.8, 350.0], [18.9, 350.0], [19.0, 351.0], [19.1, 351.0], [19.2, 351.0], [19.3, 352.0], [19.4, 352.0], [19.5, 352.0], [19.6, 353.0], [19.7, 353.0], [19.8, 354.0], [19.9, 354.0], [20.0, 355.0], [20.1, 355.0], [20.2, 356.0], [20.3, 356.0], [20.4, 356.0], [20.5, 358.0], [20.6, 358.0], [20.7, 359.0], [20.8, 359.0], [20.9, 360.0], [21.0, 360.0], [21.1, 360.0], [21.2, 361.0], [21.3, 361.0], [21.4, 361.0], [21.5, 362.0], [21.6, 362.0], [21.7, 363.0], [21.8, 363.0], [21.9, 364.0], [22.0, 364.0], [22.1, 364.0], [22.2, 364.0], [22.3, 364.0], [22.4, 365.0], [22.5, 365.0], [22.6, 365.0], [22.7, 365.0], [22.8, 366.0], [22.9, 366.0], [23.0, 366.0], [23.1, 367.0], [23.2, 367.0], [23.3, 367.0], [23.4, 367.0], [23.5, 367.0], [23.6, 368.0], [23.7, 368.0], [23.8, 368.0], [23.9, 368.0], [24.0, 369.0], [24.1, 369.0], [24.2, 369.0], [24.3, 370.0], [24.4, 370.0], [24.5, 371.0], [24.6, 371.0], [24.7, 371.0], [24.8, 372.0], [24.9, 372.0], [25.0, 373.0], [25.1, 374.0], [25.2, 375.0], [25.3, 375.0], [25.4, 376.0], [25.5, 376.0], [25.6, 376.0], [25.7, 377.0], [25.8, 378.0], [25.9, 378.0], [26.0, 379.0], [26.1, 379.0], [26.2, 379.0], [26.3, 380.0], [26.4, 381.0], [26.5, 381.0], [26.6, 381.0], [26.7, 381.0], [26.8, 382.0], [26.9, 382.0], [27.0, 383.0], [27.1, 384.0], [27.2, 384.0], [27.3, 384.0], [27.4, 385.0], [27.5, 386.0], [27.6, 387.0], [27.7, 387.0], [27.8, 388.0], [27.9, 388.0], [28.0, 388.0], [28.1, 389.0], [28.2, 389.0], [28.3, 390.0], [28.4, 391.0], [28.5, 391.0], [28.6, 391.0], [28.7, 392.0], [28.8, 392.0], [28.9, 393.0], [29.0, 393.0], [29.1, 393.0], [29.2, 394.0], [29.3, 394.0], [29.4, 394.0], [29.5, 395.0], [29.6, 395.0], [29.7, 395.0], [29.8, 396.0], [29.9, 396.0], [30.0, 397.0], [30.1, 397.0], [30.2, 397.0], [30.3, 398.0], [30.4, 398.0], [30.5, 399.0], [30.6, 399.0], [30.7, 400.0], [30.8, 400.0], [30.9, 402.0], [31.0, 402.0], [31.1, 402.0], [31.2, 403.0], [31.3, 403.0], [31.4, 404.0], [31.5, 405.0], [31.6, 405.0], [31.7, 405.0], [31.8, 406.0], [31.9, 407.0], [32.0, 407.0], [32.1, 407.0], [32.2, 408.0], [32.3, 408.0], [32.4, 408.0], [32.5, 410.0], [32.6, 410.0], [32.7, 410.0], [32.8, 410.0], [32.9, 411.0], [33.0, 411.0], [33.1, 412.0], [33.2, 412.0], [33.3, 413.0], [33.4, 413.0], [33.5, 414.0], [33.6, 414.0], [33.7, 415.0], [33.8, 415.0], [33.9, 415.0], [34.0, 416.0], [34.1, 416.0], [34.2, 417.0], [34.3, 418.0], [34.4, 418.0], [34.5, 419.0], [34.6, 420.0], [34.7, 420.0], [34.8, 421.0], [34.9, 421.0], [35.0, 421.0], [35.1, 421.0], [35.2, 422.0], [35.3, 423.0], [35.4, 424.0], [35.5, 425.0], [35.6, 425.0], [35.7, 425.0], [35.8, 426.0], [35.9, 426.0], [36.0, 427.0], [36.1, 427.0], [36.2, 428.0], [36.3, 430.0], [36.4, 430.0], [36.5, 430.0], [36.6, 431.0], [36.7, 431.0], [36.8, 431.0], [36.9, 432.0], [37.0, 432.0], [37.1, 433.0], [37.2, 433.0], [37.3, 434.0], [37.4, 435.0], [37.5, 436.0], [37.6, 437.0], [37.7, 437.0], [37.8, 438.0], [37.9, 438.0], [38.0, 438.0], [38.1, 439.0], [38.2, 439.0], [38.3, 440.0], [38.4, 440.0], [38.5, 441.0], [38.6, 442.0], [38.7, 443.0], [38.8, 443.0], [38.9, 444.0], [39.0, 444.0], [39.1, 444.0], [39.2, 444.0], [39.3, 445.0], [39.4, 446.0], [39.5, 446.0], [39.6, 447.0], [39.7, 447.0], [39.8, 448.0], [39.9, 449.0], [40.0, 449.0], [40.1, 450.0], [40.2, 450.0], [40.3, 451.0], [40.4, 451.0], [40.5, 451.0], [40.6, 452.0], [40.7, 453.0], [40.8, 454.0], [40.9, 455.0], [41.0, 455.0], [41.1, 456.0], [41.2, 457.0], [41.3, 458.0], [41.4, 458.0], [41.5, 459.0], [41.6, 459.0], [41.7, 460.0], [41.8, 461.0], [41.9, 462.0], [42.0, 462.0], [42.1, 462.0], [42.2, 463.0], [42.3, 464.0], [42.4, 464.0], [42.5, 465.0], [42.6, 465.0], [42.7, 465.0], [42.8, 466.0], [42.9, 466.0], [43.0, 467.0], [43.1, 467.0], [43.2, 467.0], [43.3, 467.0], [43.4, 468.0], [43.5, 469.0], [43.6, 469.0], [43.7, 470.0], [43.8, 470.0], [43.9, 472.0], [44.0, 472.0], [44.1, 473.0], [44.2, 473.0], [44.3, 474.0], [44.4, 474.0], [44.5, 474.0], [44.6, 475.0], [44.7, 476.0], [44.8, 476.0], [44.9, 477.0], [45.0, 478.0], [45.1, 478.0], [45.2, 479.0], [45.3, 480.0], [45.4, 481.0], [45.5, 481.0], [45.6, 483.0], [45.7, 483.0], [45.8, 484.0], [45.9, 484.0], [46.0, 485.0], [46.1, 486.0], [46.2, 486.0], [46.3, 487.0], [46.4, 487.0], [46.5, 488.0], [46.6, 488.0], [46.7, 489.0], [46.8, 489.0], [46.9, 490.0], [47.0, 490.0], [47.1, 491.0], [47.2, 491.0], [47.3, 492.0], [47.4, 492.0], [47.5, 493.0], [47.6, 493.0], [47.7, 494.0], [47.8, 494.0], [47.9, 495.0], [48.0, 495.0], [48.1, 495.0], [48.2, 495.0], [48.3, 496.0], [48.4, 496.0], [48.5, 496.0], [48.6, 497.0], [48.7, 497.0], [48.8, 498.0], [48.9, 498.0], [49.0, 499.0], [49.1, 500.0], [49.2, 500.0], [49.3, 500.0], [49.4, 501.0], [49.5, 501.0], [49.6, 501.0], [49.7, 502.0], [49.8, 502.0], [49.9, 503.0], [50.0, 504.0], [50.1, 504.0], [50.2, 504.0], [50.3, 505.0], [50.4, 506.0], [50.5, 506.0], [50.6, 507.0], [50.7, 507.0], [50.8, 508.0], [50.9, 508.0], [51.0, 508.0], [51.1, 508.0], [51.2, 509.0], [51.3, 510.0], [51.4, 510.0], [51.5, 511.0], [51.6, 511.0], [51.7, 511.0], [51.8, 511.0], [51.9, 512.0], [52.0, 513.0], [52.1, 513.0], [52.2, 514.0], [52.3, 515.0], [52.4, 515.0], [52.5, 516.0], [52.6, 517.0], [52.7, 517.0], [52.8, 517.0], [52.9, 517.0], [53.0, 518.0], [53.1, 519.0], [53.2, 519.0], [53.3, 520.0], [53.4, 520.0], [53.5, 521.0], [53.6, 521.0], [53.7, 521.0], [53.8, 523.0], [53.9, 523.0], [54.0, 523.0], [54.1, 524.0], [54.2, 524.0], [54.3, 524.0], [54.4, 525.0], [54.5, 525.0], [54.6, 525.0], [54.7, 526.0], [54.8, 526.0], [54.9, 527.0], [55.0, 528.0], [55.1, 529.0], [55.2, 529.0], [55.3, 529.0], [55.4, 530.0], [55.5, 530.0], [55.6, 531.0], [55.7, 532.0], [55.8, 532.0], [55.9, 533.0], [56.0, 533.0], [56.1, 534.0], [56.2, 534.0], [56.3, 535.0], [56.4, 535.0], [56.5, 536.0], [56.6, 536.0], [56.7, 536.0], [56.8, 537.0], [56.9, 538.0], [57.0, 539.0], [57.1, 539.0], [57.2, 539.0], [57.3, 540.0], [57.4, 540.0], [57.5, 541.0], [57.6, 542.0], [57.7, 544.0], [57.8, 544.0], [57.9, 544.0], [58.0, 545.0], [58.1, 545.0], [58.2, 546.0], [58.3, 546.0], [58.4, 546.0], [58.5, 549.0], [58.6, 549.0], [58.7, 550.0], [58.8, 550.0], [58.9, 551.0], [59.0, 552.0], [59.1, 552.0], [59.2, 552.0], [59.3, 552.0], [59.4, 552.0], [59.5, 553.0], [59.6, 554.0], [59.7, 555.0], [59.8, 555.0], [59.9, 555.0], [60.0, 556.0], [60.1, 557.0], [60.2, 557.0], [60.3, 557.0], [60.4, 557.0], [60.5, 558.0], [60.6, 559.0], [60.7, 560.0], [60.8, 563.0], [60.9, 563.0], [61.0, 564.0], [61.1, 565.0], [61.2, 566.0], [61.3, 566.0], [61.4, 566.0], [61.5, 567.0], [61.6, 567.0], [61.7, 567.0], [61.8, 569.0], [61.9, 570.0], [62.0, 571.0], [62.1, 571.0], [62.2, 571.0], [62.3, 572.0], [62.4, 573.0], [62.5, 574.0], [62.6, 575.0], [62.7, 575.0], [62.8, 577.0], [62.9, 578.0], [63.0, 578.0], [63.1, 579.0], [63.2, 579.0], [63.3, 580.0], [63.4, 580.0], [63.5, 581.0], [63.6, 581.0], [63.7, 581.0], [63.8, 582.0], [63.9, 582.0], [64.0, 585.0], [64.1, 585.0], [64.2, 587.0], [64.3, 587.0], [64.4, 588.0], [64.5, 588.0], [64.6, 589.0], [64.7, 590.0], [64.8, 590.0], [64.9, 591.0], [65.0, 591.0], [65.1, 592.0], [65.2, 592.0], [65.3, 593.0], [65.4, 594.0], [65.5, 595.0], [65.6, 596.0], [65.7, 597.0], [65.8, 598.0], [65.9, 599.0], [66.0, 601.0], [66.1, 601.0], [66.2, 602.0], [66.3, 604.0], [66.4, 605.0], [66.5, 605.0], [66.6, 605.0], [66.7, 605.0], [66.8, 606.0], [66.9, 607.0], [67.0, 608.0], [67.1, 609.0], [67.2, 609.0], [67.3, 614.0], [67.4, 614.0], [67.5, 615.0], [67.6, 616.0], [67.7, 616.0], [67.8, 617.0], [67.9, 618.0], [68.0, 619.0], [68.1, 620.0], [68.2, 620.0], [68.3, 621.0], [68.4, 621.0], [68.5, 625.0], [68.6, 626.0], [68.7, 627.0], [68.8, 629.0], [68.9, 630.0], [69.0, 630.0], [69.1, 631.0], [69.2, 631.0], [69.3, 632.0], [69.4, 633.0], [69.5, 633.0], [69.6, 634.0], [69.7, 634.0], [69.8, 637.0], [69.9, 638.0], [70.0, 638.0], [70.1, 639.0], [70.2, 640.0], [70.3, 642.0], [70.4, 642.0], [70.5, 643.0], [70.6, 644.0], [70.7, 645.0], [70.8, 645.0], [70.9, 646.0], [71.0, 647.0], [71.1, 647.0], [71.2, 648.0], [71.3, 649.0], [71.4, 650.0], [71.5, 651.0], [71.6, 652.0], [71.7, 653.0], [71.8, 657.0], [71.9, 658.0], [72.0, 659.0], [72.1, 660.0], [72.2, 661.0], [72.3, 662.0], [72.4, 662.0], [72.5, 663.0], [72.6, 664.0], [72.7, 665.0], [72.8, 668.0], [72.9, 668.0], [73.0, 670.0], [73.1, 671.0], [73.2, 671.0], [73.3, 672.0], [73.4, 673.0], [73.5, 674.0], [73.6, 676.0], [73.7, 677.0], [73.8, 679.0], [73.9, 680.0], [74.0, 681.0], [74.1, 682.0], [74.2, 682.0], [74.3, 683.0], [74.4, 684.0], [74.5, 684.0], [74.6, 685.0], [74.7, 686.0], [74.8, 688.0], [74.9, 688.0], [75.0, 690.0], [75.1, 691.0], [75.2, 693.0], [75.3, 694.0], [75.4, 694.0], [75.5, 694.0], [75.6, 697.0], [75.7, 699.0], [75.8, 700.0], [75.9, 701.0], [76.0, 702.0], [76.1, 703.0], [76.2, 703.0], [76.3, 704.0], [76.4, 705.0], [76.5, 707.0], [76.6, 708.0], [76.7, 709.0], [76.8, 712.0], [76.9, 713.0], [77.0, 714.0], [77.1, 715.0], [77.2, 717.0], [77.3, 717.0], [77.4, 719.0], [77.5, 720.0], [77.6, 720.0], [77.7, 721.0], [77.8, 722.0], [77.9, 722.0], [78.0, 723.0], [78.1, 725.0], [78.2, 726.0], [78.3, 728.0], [78.4, 728.0], [78.5, 730.0], [78.6, 730.0], [78.7, 731.0], [78.8, 733.0], [78.9, 735.0], [79.0, 737.0], [79.1, 739.0], [79.2, 741.0], [79.3, 742.0], [79.4, 743.0], [79.5, 743.0], [79.6, 743.0], [79.7, 744.0], [79.8, 745.0], [79.9, 748.0], [80.0, 749.0], [80.1, 751.0], [80.2, 753.0], [80.3, 753.0], [80.4, 753.0], [80.5, 757.0], [80.6, 758.0], [80.7, 758.0], [80.8, 760.0], [80.9, 760.0], [81.0, 762.0], [81.1, 762.0], [81.2, 764.0], [81.3, 765.0], [81.4, 766.0], [81.5, 767.0], [81.6, 767.0], [81.7, 769.0], [81.8, 770.0], [81.9, 771.0], [82.0, 774.0], [82.1, 776.0], [82.2, 777.0], [82.3, 781.0], [82.4, 782.0], [82.5, 783.0], [82.6, 784.0], [82.7, 784.0], [82.8, 785.0], [82.9, 786.0], [83.0, 787.0], [83.1, 789.0], [83.2, 792.0], [83.3, 794.0], [83.4, 794.0], [83.5, 795.0], [83.6, 797.0], [83.7, 798.0], [83.8, 799.0], [83.9, 801.0], [84.0, 802.0], [84.1, 803.0], [84.2, 804.0], [84.3, 806.0], [84.4, 806.0], [84.5, 807.0], [84.6, 808.0], [84.7, 810.0], [84.8, 811.0], [84.9, 813.0], [85.0, 814.0], [85.1, 817.0], [85.2, 817.0], [85.3, 819.0], [85.4, 819.0], [85.5, 819.0], [85.6, 820.0], [85.7, 821.0], [85.8, 822.0], [85.9, 823.0], [86.0, 824.0], [86.1, 825.0], [86.2, 826.0], [86.3, 827.0], [86.4, 828.0], [86.5, 829.0], [86.6, 832.0], [86.7, 833.0], [86.8, 834.0], [86.9, 835.0], [87.0, 837.0], [87.1, 839.0], [87.2, 842.0], [87.3, 846.0], [87.4, 846.0], [87.5, 846.0], [87.6, 848.0], [87.7, 849.0], [87.8, 850.0], [87.9, 851.0], [88.0, 853.0], [88.1, 854.0], [88.2, 855.0], [88.3, 856.0], [88.4, 858.0], [88.5, 859.0], [88.6, 860.0], [88.7, 861.0], [88.8, 865.0], [88.9, 866.0], [89.0, 867.0], [89.1, 869.0], [89.2, 871.0], [89.3, 873.0], [89.4, 875.0], [89.5, 877.0], [89.6, 879.0], [89.7, 880.0], [89.8, 882.0], [89.9, 884.0], [90.0, 885.0], [90.1, 888.0], [90.2, 891.0], [90.3, 892.0], [90.4, 892.0], [90.5, 894.0], [90.6, 896.0], [90.7, 897.0], [90.8, 899.0], [90.9, 900.0], [91.0, 901.0], [91.1, 902.0], [91.2, 903.0], [91.3, 906.0], [91.4, 907.0], [91.5, 908.0], [91.6, 909.0], [91.7, 909.0], [91.8, 911.0], [91.9, 911.0], [92.0, 914.0], [92.1, 918.0], [92.2, 919.0], [92.3, 922.0], [92.4, 925.0], [92.5, 926.0], [92.6, 928.0], [92.7, 930.0], [92.8, 931.0], [92.9, 933.0], [93.0, 935.0], [93.1, 939.0], [93.2, 940.0], [93.3, 944.0], [93.4, 944.0], [93.5, 945.0], [93.6, 948.0], [93.7, 949.0], [93.8, 956.0], [93.9, 962.0], [94.0, 962.0], [94.1, 966.0], [94.2, 970.0], [94.3, 972.0], [94.4, 974.0], [94.5, 975.0], [94.6, 978.0], [94.7, 980.0], [94.8, 984.0], [94.9, 985.0], [95.0, 990.0], [95.1, 993.0], [95.2, 1004.0], [95.3, 1007.0], [95.4, 1008.0], [95.5, 1013.0], [95.6, 1016.0], [95.7, 1017.0], [95.8, 1019.0], [95.9, 1021.0], [96.0, 1021.0], [96.1, 1027.0], [96.2, 1037.0], [96.3, 1042.0], [96.4, 1045.0], [96.5, 1052.0], [96.6, 1054.0], [96.7, 1057.0], [96.8, 1066.0], [96.9, 1068.0], [97.0, 1076.0], [97.1, 1086.0], [97.2, 1090.0], [97.3, 1095.0], [97.4, 1111.0], [97.5, 1121.0], [97.6, 1130.0], [97.7, 1133.0], [97.8, 1139.0], [97.9, 1151.0], [98.0, 1157.0], [98.1, 1180.0], [98.2, 1193.0], [98.3, 1211.0], [98.4, 1221.0], [98.5, 1242.0], [98.6, 1264.0], [98.7, 1282.0], [98.8, 1315.0], [98.9, 1339.0], [99.0, 1344.0], [99.1, 1391.0], [99.2, 1410.0], [99.3, 1467.0], [99.4, 1475.0], [99.5, 1481.0], [99.6, 1648.0], [99.7, 1682.0], [99.8, 1903.0], [99.9, 2027.0], [100.0, 2162.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 588.0, "series": [{"data": [[2100.0, 2.0], [600.0, 235.0], [700.0, 194.0], [800.0, 168.0], [200.0, 148.0], [900.0, 104.0], [1000.0, 52.0], [1100.0, 22.0], [1200.0, 12.0], [300.0, 588.0], [1300.0, 10.0], [1400.0, 9.0], [1500.0, 1.0], [400.0, 442.0], [1600.0, 4.0], [1800.0, 1.0], [1900.0, 2.0], [500.0, 405.0], [2000.0, 1.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 11.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1204.0, "series": [{"data": [[0.0, 1185.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1204.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 11.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.9036697247706427, "minX": 1.5892092E12, "maxY": 4.0, "series": [{"data": [[1.58920944E12, 3.918478260869566], [1.5892095E12, 2.6379821958456975], [1.58920932E12, 4.0], [1.58920938E12, 4.0], [1.5892092E12, 4.0], [1.58920926E12, 4.0], [1.58920956E12, 1.9036697247706427]], "isOverall": false, "label": "4", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58920956E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 302.76190476190476, "minX": 1.0, "maxY": 601.0374655647377, "series": [{"data": [[4.0, 601.0374655647377], [2.0, 340.53605015673975], [1.0, 302.76190476190476], [3.0, 562.2285714285708]], "isOverall": false, "label": "extract", "isController": false}, {"data": [[3.605833333333331, 559.840833333333]], "isOverall": false, "label": "extract-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 4.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.5892092E12, "maxY": 5994793.75, "series": [{"data": [[1.58920944E12, 2601543.1], [1.5892095E12, 1000598.9333333333], [1.58920932E12, 4321361.366666666], [1.58920938E12, 3226789.25], [1.5892092E12, 3318256.466666667], [1.58920926E12, 5994793.75], [1.58920956E12, 259077.13333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58920944E12, 0.0], [1.5892095E12, 0.0], [1.58920932E12, 0.0], [1.58920938E12, 0.0], [1.5892092E12, 0.0], [1.58920926E12, 0.0], [1.58920956E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58920956E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 346.0091743119264, "minX": 1.5892092E12, "maxY": 666.0194986072424, "series": [{"data": [[1.58920944E12, 641.1467391304348], [1.5892095E12, 477.39169139465866], [1.58920932E12, 567.1725768321517], [1.58920938E12, 666.0194986072424], [1.5892092E12, 631.4107883817427], [1.58920926E12, 529.0308370044054], [1.58920956E12, 346.0091743119264]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58920956E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 340.48623853211, "minX": 1.5892092E12, "maxY": 610.1030640668527, "series": [{"data": [[1.58920944E12, 599.9048913043479], [1.5892095E12, 461.92284866468833], [1.58920932E12, 497.8534278959811], [1.58920938E12, 610.1030640668527], [1.5892092E12, 530.161825726141], [1.58920926E12, 427.93612334801736], [1.58920956E12, 340.48623853211]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58920956E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.5892092E12, "maxY": 4.9E-324, "series": [{"data": [[1.58920944E12, 0.0], [1.5892095E12, 0.0], [1.58920932E12, 0.0], [1.58920938E12, 0.0], [1.5892092E12, 0.0], [1.58920926E12, 0.0], [1.58920956E12, 0.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58920956E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 221.0, "minX": 1.5892092E12, "maxY": 2162.0, "series": [{"data": [[1.58920944E12, 1222.0], [1.5892095E12, 1394.0], [1.58920932E12, 1648.0], [1.58920938E12, 1356.0], [1.5892092E12, 2162.0], [1.58920926E12, 1682.0], [1.58920956E12, 577.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58920944E12, 334.0], [1.5892095E12, 268.0], [1.58920932E12, 305.0], [1.58920938E12, 325.0], [1.5892092E12, 221.0], [1.58920926E12, 225.0], [1.58920956E12, 270.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58920944E12, 891.0], [1.5892095E12, 733.4], [1.58920932E12, 880.0], [1.58920938E12, 938.0], [1.5892092E12, 1138.6], [1.58920926E12, 906.5], [1.58920956E12, 405.29999999999995]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58920944E12, 1140.13], [1.5892095E12, 1007.6000000000001], [1.58920932E12, 1272.3999999999996], [1.58920938E12, 1156.5999999999995], [1.5892092E12, 2085.5799999999986], [1.58920926E12, 1397.4999999999986], [1.58920956E12, 559.3100000000002]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58920944E12, 946.75], [1.5892095E12, 771.3], [1.58920932E12, 1012.7999999999997], [1.58920938E12, 1016.0], [1.5892092E12, 1464.5999999999995], [1.58920926E12, 1045.25], [1.58920956E12, 444.04999999999995]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58920956E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 423.0, "minX": 1.0, "maxY": 866.5, "series": [{"data": [[1.0, 546.0], [2.0, 866.5], [4.0, 617.0], [8.0, 472.5], [9.0, 423.0], [5.0, 580.0], [10.0, 442.5], [6.0, 499.5], [3.0, 489.0], [7.0, 499.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 328.5, "minX": 1.0, "maxY": 736.5, "series": [{"data": [[1.0, 436.0], [2.0, 736.5], [4.0, 589.0], [8.0, 420.0], [9.0, 328.5], [5.0, 537.0], [10.0, 397.0], [6.0, 442.0], [3.0, 451.5], [7.0, 445.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.6, "minX": 1.5892092E12, "maxY": 7.566666666666666, "series": [{"data": [[1.58920944E12, 6.116666666666666], [1.5892095E12, 5.6], [1.58920932E12, 7.05], [1.58920938E12, 5.983333333333333], [1.5892092E12, 4.083333333333333], [1.58920926E12, 7.566666666666666], [1.58920956E12, 3.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58920956E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 3.6333333333333333, "minX": 1.5892092E12, "maxY": 7.566666666666666, "series": [{"data": [[1.58920944E12, 6.133333333333334], [1.5892095E12, 5.616666666666666], [1.58920932E12, 7.05], [1.58920938E12, 5.983333333333333], [1.5892092E12, 4.016666666666667], [1.58920926E12, 7.566666666666666], [1.58920956E12, 3.6333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58920956E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 3.6333333333333333, "minX": 1.5892092E12, "maxY": 7.566666666666666, "series": [{"data": [[1.58920944E12, 6.133333333333334], [1.5892095E12, 5.616666666666666], [1.58920932E12, 7.05], [1.58920938E12, 5.983333333333333], [1.5892092E12, 4.016666666666667], [1.58920926E12, 7.566666666666666], [1.58920956E12, 3.6333333333333333]], "isOverall": false, "label": "extract-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58920956E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 3.6333333333333333, "minX": 1.5892092E12, "maxY": 7.566666666666666, "series": [{"data": [[1.58920944E12, 6.133333333333334], [1.5892095E12, 5.616666666666666], [1.58920932E12, 7.05], [1.58920938E12, 5.983333333333333], [1.5892092E12, 4.016666666666667], [1.58920926E12, 7.566666666666666], [1.58920956E12, 3.6333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58920956E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

