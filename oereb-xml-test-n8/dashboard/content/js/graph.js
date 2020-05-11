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
        data: {"result": {"minY": 263.0, "minX": 0.0, "maxY": 3046.0, "series": [{"data": [[0.0, 263.0], [0.1, 301.0], [0.2, 311.0], [0.3, 320.0], [0.4, 327.0], [0.5, 331.0], [0.6, 332.0], [0.7, 334.0], [0.8, 336.0], [0.9, 338.0], [1.0, 340.0], [1.1, 341.0], [1.2, 342.0], [1.3, 344.0], [1.4, 345.0], [1.5, 347.0], [1.6, 348.0], [1.7, 350.0], [1.8, 352.0], [1.9, 353.0], [2.0, 354.0], [2.1, 354.0], [2.2, 355.0], [2.3, 357.0], [2.4, 359.0], [2.5, 360.0], [2.6, 362.0], [2.7, 362.0], [2.8, 365.0], [2.9, 367.0], [3.0, 369.0], [3.1, 370.0], [3.2, 372.0], [3.3, 373.0], [3.4, 374.0], [3.5, 376.0], [3.6, 377.0], [3.7, 378.0], [3.8, 380.0], [3.9, 381.0], [4.0, 383.0], [4.1, 384.0], [4.2, 384.0], [4.3, 385.0], [4.4, 386.0], [4.5, 387.0], [4.6, 389.0], [4.7, 389.0], [4.8, 391.0], [4.9, 391.0], [5.0, 392.0], [5.1, 392.0], [5.2, 393.0], [5.3, 394.0], [5.4, 395.0], [5.5, 395.0], [5.6, 396.0], [5.7, 397.0], [5.8, 397.0], [5.9, 398.0], [6.0, 399.0], [6.1, 400.0], [6.2, 402.0], [6.3, 403.0], [6.4, 404.0], [6.5, 405.0], [6.6, 406.0], [6.7, 408.0], [6.8, 408.0], [6.9, 409.0], [7.0, 409.0], [7.1, 410.0], [7.2, 410.0], [7.3, 411.0], [7.4, 413.0], [7.5, 414.0], [7.6, 415.0], [7.7, 416.0], [7.8, 417.0], [7.9, 417.0], [8.0, 418.0], [8.1, 419.0], [8.2, 421.0], [8.3, 422.0], [8.4, 423.0], [8.5, 424.0], [8.6, 425.0], [8.7, 426.0], [8.8, 427.0], [8.9, 428.0], [9.0, 430.0], [9.1, 430.0], [9.2, 430.0], [9.3, 432.0], [9.4, 432.0], [9.5, 432.0], [9.6, 433.0], [9.7, 435.0], [9.8, 435.0], [9.9, 436.0], [10.0, 437.0], [10.1, 437.0], [10.2, 438.0], [10.3, 440.0], [10.4, 441.0], [10.5, 441.0], [10.6, 442.0], [10.7, 442.0], [10.8, 443.0], [10.9, 443.0], [11.0, 444.0], [11.1, 444.0], [11.2, 445.0], [11.3, 446.0], [11.4, 447.0], [11.5, 448.0], [11.6, 448.0], [11.7, 449.0], [11.8, 451.0], [11.9, 451.0], [12.0, 452.0], [12.1, 452.0], [12.2, 453.0], [12.3, 454.0], [12.4, 455.0], [12.5, 456.0], [12.6, 456.0], [12.7, 457.0], [12.8, 458.0], [12.9, 459.0], [13.0, 460.0], [13.1, 461.0], [13.2, 462.0], [13.3, 462.0], [13.4, 464.0], [13.5, 465.0], [13.6, 465.0], [13.7, 466.0], [13.8, 468.0], [13.9, 469.0], [14.0, 470.0], [14.1, 471.0], [14.2, 472.0], [14.3, 473.0], [14.4, 474.0], [14.5, 474.0], [14.6, 475.0], [14.7, 476.0], [14.8, 476.0], [14.9, 477.0], [15.0, 478.0], [15.1, 479.0], [15.2, 479.0], [15.3, 481.0], [15.4, 482.0], [15.5, 482.0], [15.6, 483.0], [15.7, 484.0], [15.8, 485.0], [15.9, 485.0], [16.0, 486.0], [16.1, 486.0], [16.2, 487.0], [16.3, 488.0], [16.4, 488.0], [16.5, 489.0], [16.6, 490.0], [16.7, 491.0], [16.8, 492.0], [16.9, 492.0], [17.0, 493.0], [17.1, 494.0], [17.2, 495.0], [17.3, 495.0], [17.4, 496.0], [17.5, 497.0], [17.6, 498.0], [17.7, 499.0], [17.8, 500.0], [17.9, 500.0], [18.0, 502.0], [18.1, 502.0], [18.2, 504.0], [18.3, 506.0], [18.4, 507.0], [18.5, 508.0], [18.6, 508.0], [18.7, 509.0], [18.8, 510.0], [18.9, 510.0], [19.0, 511.0], [19.1, 512.0], [19.2, 513.0], [19.3, 514.0], [19.4, 515.0], [19.5, 516.0], [19.6, 517.0], [19.7, 518.0], [19.8, 519.0], [19.9, 520.0], [20.0, 522.0], [20.1, 523.0], [20.2, 524.0], [20.3, 526.0], [20.4, 527.0], [20.5, 527.0], [20.6, 528.0], [20.7, 528.0], [20.8, 530.0], [20.9, 532.0], [21.0, 532.0], [21.1, 532.0], [21.2, 533.0], [21.3, 534.0], [21.4, 535.0], [21.5, 536.0], [21.6, 538.0], [21.7, 540.0], [21.8, 540.0], [21.9, 541.0], [22.0, 542.0], [22.1, 543.0], [22.2, 544.0], [22.3, 544.0], [22.4, 545.0], [22.5, 546.0], [22.6, 547.0], [22.7, 548.0], [22.8, 549.0], [22.9, 549.0], [23.0, 550.0], [23.1, 550.0], [23.2, 552.0], [23.3, 553.0], [23.4, 554.0], [23.5, 555.0], [23.6, 556.0], [23.7, 557.0], [23.8, 558.0], [23.9, 559.0], [24.0, 560.0], [24.1, 560.0], [24.2, 561.0], [24.3, 562.0], [24.4, 565.0], [24.5, 566.0], [24.6, 567.0], [24.7, 568.0], [24.8, 569.0], [24.9, 570.0], [25.0, 571.0], [25.1, 571.0], [25.2, 572.0], [25.3, 573.0], [25.4, 573.0], [25.5, 574.0], [25.6, 575.0], [25.7, 576.0], [25.8, 576.0], [25.9, 577.0], [26.0, 577.0], [26.1, 578.0], [26.2, 579.0], [26.3, 580.0], [26.4, 580.0], [26.5, 581.0], [26.6, 581.0], [26.7, 582.0], [26.8, 584.0], [26.9, 585.0], [27.0, 585.0], [27.1, 586.0], [27.2, 586.0], [27.3, 587.0], [27.4, 588.0], [27.5, 589.0], [27.6, 590.0], [27.7, 590.0], [27.8, 591.0], [27.9, 591.0], [28.0, 592.0], [28.1, 593.0], [28.2, 594.0], [28.3, 595.0], [28.4, 595.0], [28.5, 596.0], [28.6, 597.0], [28.7, 597.0], [28.8, 598.0], [28.9, 599.0], [29.0, 599.0], [29.1, 599.0], [29.2, 600.0], [29.3, 600.0], [29.4, 601.0], [29.5, 602.0], [29.6, 603.0], [29.7, 603.0], [29.8, 604.0], [29.9, 605.0], [30.0, 605.0], [30.1, 606.0], [30.2, 606.0], [30.3, 607.0], [30.4, 608.0], [30.5, 608.0], [30.6, 610.0], [30.7, 610.0], [30.8, 611.0], [30.9, 612.0], [31.0, 613.0], [31.1, 613.0], [31.2, 614.0], [31.3, 615.0], [31.4, 615.0], [31.5, 616.0], [31.6, 617.0], [31.7, 618.0], [31.8, 619.0], [31.9, 620.0], [32.0, 621.0], [32.1, 621.0], [32.2, 622.0], [32.3, 623.0], [32.4, 625.0], [32.5, 626.0], [32.6, 626.0], [32.7, 628.0], [32.8, 629.0], [32.9, 630.0], [33.0, 631.0], [33.1, 632.0], [33.2, 633.0], [33.3, 634.0], [33.4, 635.0], [33.5, 636.0], [33.6, 637.0], [33.7, 639.0], [33.8, 640.0], [33.9, 640.0], [34.0, 642.0], [34.1, 642.0], [34.2, 643.0], [34.3, 645.0], [34.4, 647.0], [34.5, 648.0], [34.6, 649.0], [34.7, 650.0], [34.8, 651.0], [34.9, 652.0], [35.0, 653.0], [35.1, 654.0], [35.2, 655.0], [35.3, 656.0], [35.4, 657.0], [35.5, 659.0], [35.6, 662.0], [35.7, 663.0], [35.8, 664.0], [35.9, 664.0], [36.0, 666.0], [36.1, 667.0], [36.2, 668.0], [36.3, 670.0], [36.4, 671.0], [36.5, 672.0], [36.6, 673.0], [36.7, 674.0], [36.8, 676.0], [36.9, 676.0], [37.0, 677.0], [37.1, 677.0], [37.2, 678.0], [37.3, 679.0], [37.4, 681.0], [37.5, 682.0], [37.6, 683.0], [37.7, 684.0], [37.8, 685.0], [37.9, 686.0], [38.0, 686.0], [38.1, 688.0], [38.2, 689.0], [38.3, 689.0], [38.4, 690.0], [38.5, 691.0], [38.6, 691.0], [38.7, 692.0], [38.8, 693.0], [38.9, 694.0], [39.0, 694.0], [39.1, 696.0], [39.2, 697.0], [39.3, 697.0], [39.4, 698.0], [39.5, 699.0], [39.6, 700.0], [39.7, 701.0], [39.8, 702.0], [39.9, 702.0], [40.0, 703.0], [40.1, 703.0], [40.2, 703.0], [40.3, 704.0], [40.4, 705.0], [40.5, 706.0], [40.6, 706.0], [40.7, 708.0], [40.8, 708.0], [40.9, 709.0], [41.0, 710.0], [41.1, 711.0], [41.2, 713.0], [41.3, 713.0], [41.4, 714.0], [41.5, 715.0], [41.6, 716.0], [41.7, 717.0], [41.8, 719.0], [41.9, 720.0], [42.0, 721.0], [42.1, 722.0], [42.2, 723.0], [42.3, 725.0], [42.4, 726.0], [42.5, 727.0], [42.6, 728.0], [42.7, 729.0], [42.8, 730.0], [42.9, 732.0], [43.0, 733.0], [43.1, 733.0], [43.2, 735.0], [43.3, 738.0], [43.4, 740.0], [43.5, 741.0], [43.6, 743.0], [43.7, 744.0], [43.8, 745.0], [43.9, 747.0], [44.0, 747.0], [44.1, 748.0], [44.2, 749.0], [44.3, 751.0], [44.4, 752.0], [44.5, 755.0], [44.6, 756.0], [44.7, 758.0], [44.8, 760.0], [44.9, 761.0], [45.0, 762.0], [45.1, 763.0], [45.2, 764.0], [45.3, 765.0], [45.4, 766.0], [45.5, 768.0], [45.6, 769.0], [45.7, 772.0], [45.8, 773.0], [45.9, 774.0], [46.0, 775.0], [46.1, 776.0], [46.2, 778.0], [46.3, 778.0], [46.4, 780.0], [46.5, 781.0], [46.6, 781.0], [46.7, 783.0], [46.8, 783.0], [46.9, 784.0], [47.0, 785.0], [47.1, 786.0], [47.2, 787.0], [47.3, 788.0], [47.4, 789.0], [47.5, 790.0], [47.6, 791.0], [47.7, 791.0], [47.8, 792.0], [47.9, 792.0], [48.0, 794.0], [48.1, 795.0], [48.2, 795.0], [48.3, 797.0], [48.4, 797.0], [48.5, 799.0], [48.6, 799.0], [48.7, 800.0], [48.8, 801.0], [48.9, 802.0], [49.0, 803.0], [49.1, 803.0], [49.2, 804.0], [49.3, 805.0], [49.4, 806.0], [49.5, 807.0], [49.6, 808.0], [49.7, 809.0], [49.8, 811.0], [49.9, 811.0], [50.0, 813.0], [50.1, 814.0], [50.2, 815.0], [50.3, 815.0], [50.4, 817.0], [50.5, 818.0], [50.6, 818.0], [50.7, 819.0], [50.8, 820.0], [50.9, 820.0], [51.0, 821.0], [51.1, 822.0], [51.2, 823.0], [51.3, 824.0], [51.4, 825.0], [51.5, 826.0], [51.6, 828.0], [51.7, 829.0], [51.8, 831.0], [51.9, 832.0], [52.0, 833.0], [52.1, 835.0], [52.2, 835.0], [52.3, 837.0], [52.4, 837.0], [52.5, 839.0], [52.6, 842.0], [52.7, 843.0], [52.8, 844.0], [52.9, 846.0], [53.0, 848.0], [53.1, 849.0], [53.2, 851.0], [53.3, 853.0], [53.4, 855.0], [53.5, 856.0], [53.6, 857.0], [53.7, 858.0], [53.8, 861.0], [53.9, 862.0], [54.0, 863.0], [54.1, 864.0], [54.2, 867.0], [54.3, 868.0], [54.4, 869.0], [54.5, 871.0], [54.6, 873.0], [54.7, 874.0], [54.8, 875.0], [54.9, 876.0], [55.0, 876.0], [55.1, 877.0], [55.2, 879.0], [55.3, 880.0], [55.4, 881.0], [55.5, 882.0], [55.6, 882.0], [55.7, 883.0], [55.8, 884.0], [55.9, 885.0], [56.0, 885.0], [56.1, 886.0], [56.2, 886.0], [56.3, 887.0], [56.4, 888.0], [56.5, 889.0], [56.6, 889.0], [56.7, 890.0], [56.8, 892.0], [56.9, 892.0], [57.0, 893.0], [57.1, 893.0], [57.2, 894.0], [57.3, 895.0], [57.4, 895.0], [57.5, 896.0], [57.6, 896.0], [57.7, 897.0], [57.8, 897.0], [57.9, 898.0], [58.0, 899.0], [58.1, 899.0], [58.2, 899.0], [58.3, 900.0], [58.4, 902.0], [58.5, 903.0], [58.6, 904.0], [58.7, 905.0], [58.8, 906.0], [58.9, 907.0], [59.0, 907.0], [59.1, 908.0], [59.2, 909.0], [59.3, 911.0], [59.4, 911.0], [59.5, 913.0], [59.6, 914.0], [59.7, 915.0], [59.8, 915.0], [59.9, 917.0], [60.0, 918.0], [60.1, 918.0], [60.2, 920.0], [60.3, 921.0], [60.4, 922.0], [60.5, 924.0], [60.6, 925.0], [60.7, 926.0], [60.8, 927.0], [60.9, 928.0], [61.0, 929.0], [61.1, 929.0], [61.2, 931.0], [61.3, 933.0], [61.4, 934.0], [61.5, 934.0], [61.6, 935.0], [61.7, 938.0], [61.8, 939.0], [61.9, 940.0], [62.0, 943.0], [62.1, 943.0], [62.2, 946.0], [62.3, 948.0], [62.4, 949.0], [62.5, 951.0], [62.6, 952.0], [62.7, 953.0], [62.8, 954.0], [62.9, 956.0], [63.0, 958.0], [63.1, 958.0], [63.2, 959.0], [63.3, 961.0], [63.4, 962.0], [63.5, 962.0], [63.6, 963.0], [63.7, 965.0], [63.8, 965.0], [63.9, 967.0], [64.0, 968.0], [64.1, 970.0], [64.2, 971.0], [64.3, 972.0], [64.4, 974.0], [64.5, 975.0], [64.6, 976.0], [64.7, 976.0], [64.8, 977.0], [64.9, 978.0], [65.0, 980.0], [65.1, 981.0], [65.2, 982.0], [65.3, 982.0], [65.4, 983.0], [65.5, 985.0], [65.6, 985.0], [65.7, 986.0], [65.8, 987.0], [65.9, 988.0], [66.0, 990.0], [66.1, 990.0], [66.2, 992.0], [66.3, 993.0], [66.4, 993.0], [66.5, 995.0], [66.6, 995.0], [66.7, 996.0], [66.8, 997.0], [66.9, 998.0], [67.0, 998.0], [67.1, 999.0], [67.2, 1000.0], [67.3, 1000.0], [67.4, 1001.0], [67.5, 1001.0], [67.6, 1002.0], [67.7, 1003.0], [67.8, 1004.0], [67.9, 1005.0], [68.0, 1005.0], [68.1, 1006.0], [68.2, 1007.0], [68.3, 1009.0], [68.4, 1010.0], [68.5, 1011.0], [68.6, 1012.0], [68.7, 1014.0], [68.8, 1014.0], [68.9, 1015.0], [69.0, 1015.0], [69.1, 1016.0], [69.2, 1017.0], [69.3, 1017.0], [69.4, 1019.0], [69.5, 1019.0], [69.6, 1021.0], [69.7, 1021.0], [69.8, 1022.0], [69.9, 1023.0], [70.0, 1026.0], [70.1, 1028.0], [70.2, 1030.0], [70.3, 1032.0], [70.4, 1033.0], [70.5, 1034.0], [70.6, 1036.0], [70.7, 1037.0], [70.8, 1038.0], [70.9, 1038.0], [71.0, 1040.0], [71.1, 1042.0], [71.2, 1044.0], [71.3, 1045.0], [71.4, 1046.0], [71.5, 1047.0], [71.6, 1050.0], [71.7, 1051.0], [71.8, 1051.0], [71.9, 1053.0], [72.0, 1055.0], [72.1, 1056.0], [72.2, 1057.0], [72.3, 1059.0], [72.4, 1061.0], [72.5, 1063.0], [72.6, 1063.0], [72.7, 1065.0], [72.8, 1066.0], [72.9, 1068.0], [73.0, 1069.0], [73.1, 1070.0], [73.2, 1072.0], [73.3, 1073.0], [73.4, 1074.0], [73.5, 1075.0], [73.6, 1076.0], [73.7, 1077.0], [73.8, 1079.0], [73.9, 1080.0], [74.0, 1082.0], [74.1, 1084.0], [74.2, 1085.0], [74.3, 1086.0], [74.4, 1087.0], [74.5, 1088.0], [74.6, 1088.0], [74.7, 1090.0], [74.8, 1092.0], [74.9, 1094.0], [75.0, 1095.0], [75.1, 1096.0], [75.2, 1098.0], [75.3, 1099.0], [75.4, 1101.0], [75.5, 1102.0], [75.6, 1103.0], [75.7, 1105.0], [75.8, 1109.0], [75.9, 1110.0], [76.0, 1111.0], [76.1, 1112.0], [76.2, 1113.0], [76.3, 1116.0], [76.4, 1118.0], [76.5, 1119.0], [76.6, 1119.0], [76.7, 1122.0], [76.8, 1125.0], [76.9, 1127.0], [77.0, 1128.0], [77.1, 1129.0], [77.2, 1130.0], [77.3, 1132.0], [77.4, 1134.0], [77.5, 1138.0], [77.6, 1139.0], [77.7, 1141.0], [77.8, 1143.0], [77.9, 1145.0], [78.0, 1148.0], [78.1, 1149.0], [78.2, 1149.0], [78.3, 1152.0], [78.4, 1154.0], [78.5, 1155.0], [78.6, 1157.0], [78.7, 1159.0], [78.8, 1161.0], [78.9, 1165.0], [79.0, 1167.0], [79.1, 1169.0], [79.2, 1171.0], [79.3, 1174.0], [79.4, 1175.0], [79.5, 1181.0], [79.6, 1182.0], [79.7, 1183.0], [79.8, 1186.0], [79.9, 1188.0], [80.0, 1191.0], [80.1, 1193.0], [80.2, 1193.0], [80.3, 1194.0], [80.4, 1197.0], [80.5, 1198.0], [80.6, 1199.0], [80.7, 1202.0], [80.8, 1203.0], [80.9, 1204.0], [81.0, 1207.0], [81.1, 1207.0], [81.2, 1208.0], [81.3, 1209.0], [81.4, 1213.0], [81.5, 1214.0], [81.6, 1216.0], [81.7, 1218.0], [81.8, 1219.0], [81.9, 1220.0], [82.0, 1221.0], [82.1, 1224.0], [82.2, 1226.0], [82.3, 1227.0], [82.4, 1230.0], [82.5, 1231.0], [82.6, 1232.0], [82.7, 1237.0], [82.8, 1239.0], [82.9, 1242.0], [83.0, 1248.0], [83.1, 1250.0], [83.2, 1252.0], [83.3, 1255.0], [83.4, 1257.0], [83.5, 1259.0], [83.6, 1263.0], [83.7, 1268.0], [83.8, 1270.0], [83.9, 1272.0], [84.0, 1274.0], [84.1, 1280.0], [84.2, 1283.0], [84.3, 1287.0], [84.4, 1289.0], [84.5, 1294.0], [84.6, 1295.0], [84.7, 1296.0], [84.8, 1297.0], [84.9, 1300.0], [85.0, 1303.0], [85.1, 1305.0], [85.2, 1305.0], [85.3, 1308.0], [85.4, 1313.0], [85.5, 1315.0], [85.6, 1318.0], [85.7, 1321.0], [85.8, 1324.0], [85.9, 1326.0], [86.0, 1330.0], [86.1, 1333.0], [86.2, 1336.0], [86.3, 1339.0], [86.4, 1342.0], [86.5, 1348.0], [86.6, 1351.0], [86.7, 1361.0], [86.8, 1368.0], [86.9, 1377.0], [87.0, 1381.0], [87.1, 1383.0], [87.2, 1386.0], [87.3, 1389.0], [87.4, 1391.0], [87.5, 1393.0], [87.6, 1394.0], [87.7, 1398.0], [87.8, 1400.0], [87.9, 1404.0], [88.0, 1409.0], [88.1, 1413.0], [88.2, 1415.0], [88.3, 1416.0], [88.4, 1426.0], [88.5, 1433.0], [88.6, 1438.0], [88.7, 1440.0], [88.8, 1445.0], [88.9, 1450.0], [89.0, 1456.0], [89.1, 1457.0], [89.2, 1461.0], [89.3, 1466.0], [89.4, 1472.0], [89.5, 1478.0], [89.6, 1482.0], [89.7, 1487.0], [89.8, 1492.0], [89.9, 1496.0], [90.0, 1499.0], [90.1, 1501.0], [90.2, 1506.0], [90.3, 1509.0], [90.4, 1510.0], [90.5, 1514.0], [90.6, 1518.0], [90.7, 1523.0], [90.8, 1528.0], [90.9, 1532.0], [91.0, 1536.0], [91.1, 1540.0], [91.2, 1545.0], [91.3, 1549.0], [91.4, 1551.0], [91.5, 1554.0], [91.6, 1555.0], [91.7, 1562.0], [91.8, 1566.0], [91.9, 1569.0], [92.0, 1575.0], [92.1, 1580.0], [92.2, 1589.0], [92.3, 1593.0], [92.4, 1595.0], [92.5, 1597.0], [92.6, 1599.0], [92.7, 1603.0], [92.8, 1609.0], [92.9, 1610.0], [93.0, 1612.0], [93.1, 1619.0], [93.2, 1625.0], [93.3, 1631.0], [93.4, 1635.0], [93.5, 1641.0], [93.6, 1644.0], [93.7, 1647.0], [93.8, 1650.0], [93.9, 1652.0], [94.0, 1657.0], [94.1, 1661.0], [94.2, 1670.0], [94.3, 1676.0], [94.4, 1682.0], [94.5, 1685.0], [94.6, 1690.0], [94.7, 1693.0], [94.8, 1696.0], [94.9, 1702.0], [95.0, 1707.0], [95.1, 1711.0], [95.2, 1717.0], [95.3, 1722.0], [95.4, 1731.0], [95.5, 1734.0], [95.6, 1738.0], [95.7, 1744.0], [95.8, 1749.0], [95.9, 1753.0], [96.0, 1761.0], [96.1, 1764.0], [96.2, 1771.0], [96.3, 1780.0], [96.4, 1786.0], [96.5, 1796.0], [96.6, 1800.0], [96.7, 1807.0], [96.8, 1818.0], [96.9, 1829.0], [97.0, 1837.0], [97.1, 1842.0], [97.2, 1850.0], [97.3, 1856.0], [97.4, 1877.0], [97.5, 1891.0], [97.6, 1896.0], [97.7, 1899.0], [97.8, 1904.0], [97.9, 1913.0], [98.0, 1923.0], [98.1, 1934.0], [98.2, 1941.0], [98.3, 1957.0], [98.4, 1977.0], [98.5, 1997.0], [98.6, 2020.0], [98.7, 2043.0], [98.8, 2075.0], [98.9, 2096.0], [99.0, 2112.0], [99.1, 2132.0], [99.2, 2205.0], [99.3, 2256.0], [99.4, 2408.0], [99.5, 2465.0], [99.6, 2496.0], [99.7, 2609.0], [99.8, 2727.0], [99.9, 2968.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 200.0, "maxY": 564.0, "series": [{"data": [[600.0, 501.0], [700.0, 435.0], [800.0, 462.0], [900.0, 428.0], [1000.0, 393.0], [1100.0, 252.0], [1200.0, 206.0], [1300.0, 138.0], [1400.0, 108.0], [1500.0, 124.0], [1600.0, 108.0], [1700.0, 83.0], [1800.0, 55.0], [1900.0, 38.0], [2000.0, 19.0], [2100.0, 13.0], [2200.0, 7.0], [2300.0, 3.0], [2400.0, 10.0], [2500.0, 4.0], [2600.0, 3.0], [2800.0, 2.0], [2700.0, 4.0], [2900.0, 4.0], [3000.0, 2.0], [200.0, 3.0], [300.0, 287.0], [400.0, 564.0], [500.0, 544.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 477.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3462.0, "series": [{"data": [[0.0, 861.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3462.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 477.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.8595041322314054, "minX": 1.58920236E12, "maxY": 8.0, "series": [{"data": [[1.58920266E12, 8.0], [1.58920296E12, 1.8595041322314054], [1.58920248E12, 8.0], [1.58920254E12, 8.0], [1.58920236E12, 7.981595092024539], [1.58920284E12, 7.178470254957508], [1.58920242E12, 8.0], [1.5892029E12, 4.144654088050315], [1.58920272E12, 8.0], [1.58920278E12, 8.0], [1.5892026E12, 8.0]], "isOverall": false, "label": "8", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58920296E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 361.88524590163934, "minX": 1.0, "maxY": 1008.3617785142214, "series": [{"data": [[8.0, 1008.3617785142214], [4.0, 469.45833333333326], [2.0, 431.62499999999994], [1.0, 361.88524590163934], [5.0, 497.0555555555556], [6.0, 581.5555555555553], [3.0, 441.25559105431313], [7.0, 581.2385466034755]], "isOverall": false, "label": "extract", "isController": false}, {"data": [[7.340625000000013, 889.2908333333346]], "isOverall": false, "label": "extract-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 8.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.58920236E12, "maxY": 5950261.616666666, "series": [{"data": [[1.58920266E12, 2108596.4], [1.58920296E12, 150625.76666666666], [1.58920248E12, 5539763.65], [1.58920254E12, 3204407.6333333333], [1.58920236E12, 2024472.95], [1.58920284E12, 1439560.75], [1.58920242E12, 5950261.616666666], [1.5892029E12, 545291.5666666667], [1.58920272E12, 1984744.7333333334], [1.58920278E12, 3350977.9166666665], [1.5892026E12, 2257790.35]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58920266E12, 0.0], [1.58920296E12, 0.0], [1.58920248E12, 0.0], [1.58920254E12, 0.0], [1.58920236E12, 0.0], [1.58920284E12, 0.0], [1.58920242E12, 0.0], [1.5892029E12, 0.0], [1.58920272E12, 0.0], [1.58920278E12, 0.0], [1.5892026E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58920296E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 396.314049586777, "minX": 1.58920236E12, "maxY": 1179.2576687116566, "series": [{"data": [[1.58920266E12, 1144.9380952380964], [1.58920296E12, 396.314049586777], [1.58920248E12, 981.3081632653066], [1.58920254E12, 1151.0480769230753], [1.58920236E12, 1179.2576687116566], [1.58920284E12, 613.2804532577898], [1.58920242E12, 995.9378881987582], [1.5892029E12, 489.06918238993717], [1.58920272E12, 1066.8558758314862], [1.58920278E12, 723.5972850678742], [1.5892026E12, 1169.9390243902435]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58920296E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 390.61983471074376, "minX": 1.58920236E12, "maxY": 1130.5902439024396, "series": [{"data": [[1.58920266E12, 1109.1285714285705], [1.58920296E12, 390.61983471074376], [1.58920248E12, 886.1877551020406], [1.58920254E12, 1090.9254807692307], [1.58920236E12, 1055.6073619631898], [1.58920284E12, 600.6388101983006], [1.58920242E12, 880.5486542443064], [1.5892029E12, 483.1593291404615], [1.58920272E12, 1036.035476718404], [1.58920278E12, 689.5294117647064], [1.5892026E12, 1130.5902439024396]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58920296E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.58920236E12, "maxY": 4.9E-324, "series": [{"data": [[1.58920266E12, 0.0], [1.58920296E12, 0.0], [1.58920248E12, 0.0], [1.58920254E12, 0.0], [1.58920236E12, 0.0], [1.58920284E12, 0.0], [1.58920242E12, 0.0], [1.5892029E12, 0.0], [1.58920272E12, 0.0], [1.58920278E12, 0.0], [1.5892026E12, 0.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58920296E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 263.0, "minX": 1.58920236E12, "maxY": 3046.0, "series": [{"data": [[1.58920266E12, 2120.0], [1.58920296E12, 638.0], [1.58920248E12, 2491.0], [1.58920254E12, 2408.0], [1.58920236E12, 3046.0], [1.58920284E12, 1596.0], [1.58920242E12, 2976.0], [1.5892029E12, 763.0], [1.58920272E12, 2700.0], [1.58920278E12, 1567.0], [1.5892026E12, 2371.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58920266E12, 615.0], [1.58920296E12, 326.0], [1.58920248E12, 278.0], [1.58920254E12, 455.0], [1.58920236E12, 420.0], [1.58920284E12, 310.0], [1.58920242E12, 287.0], [1.5892029E12, 330.0], [1.58920272E12, 329.0], [1.58920278E12, 263.0], [1.5892026E12, 605.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58920266E12, 1647.0], [1.58920296E12, 477.2], [1.58920248E12, 1660.6000000000001], [1.58920254E12, 1641.5000000000002], [1.58920236E12, 2003.9999999999998], [1.58920284E12, 785.6000000000001], [1.58920242E12, 1764.4], [1.5892029E12, 624.8], [1.58920272E12, 1595.8], [1.58920278E12, 1009.8000000000001], [1.5892026E12, 1643.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58920266E12, 2054.5900000000006], [1.58920296E12, 623.0400000000001], [1.58920248E12, 2135.1599999999994], [1.58920254E12, 1988.9199999999996], [1.58920236E12, 3031.2799999999997], [1.58920284E12, 1294.8199999999963], [1.58920242E12, 2734.8399999999983], [1.5892029E12, 723.3199999999998], [1.58920272E12, 2191.000000000001], [1.58920278E12, 1319.6800000000003], [1.5892026E12, 2087.4899999999993]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58920266E12, 1738.0], [1.58920296E12, 496.59999999999997], [1.58920248E12, 1844.1999999999998], [1.58920254E12, 1761.4499999999998], [1.58920236E12, 2538.5999999999995], [1.58920284E12, 915.3], [1.58920242E12, 1994.9999999999998], [1.5892029E12, 681.0999999999999], [1.58920272E12, 1729.1999999999998], [1.58920278E12, 1096.0], [1.5892026E12, 1811.9499999999998]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58920296E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 364.5, "minX": 2.0, "maxY": 1126.5, "series": [{"data": [[8.0, 958.0], [2.0, 364.5], [9.0, 898.0], [10.0, 769.0], [11.0, 673.0], [3.0, 369.0], [12.0, 605.5], [13.0, 591.0], [14.0, 603.5], [15.0, 604.5], [4.0, 1126.5], [5.0, 1070.0], [6.0, 985.0], [7.0, 986.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 358.0, "minX": 2.0, "maxY": 1120.5, "series": [{"data": [[8.0, 915.0], [2.0, 358.5], [9.0, 864.0], [10.0, 716.0], [11.0, 655.0], [3.0, 358.0], [12.0, 597.0], [13.0, 584.0], [14.0, 598.0], [15.0, 598.0], [4.0, 1120.5], [5.0, 1004.0], [6.0, 942.5], [7.0, 949.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.9666666666666666, "minX": 1.58920236E12, "maxY": 11.75, "series": [{"data": [[1.58920266E12, 7.0], [1.58920296E12, 1.9666666666666666], [1.58920248E12, 8.166666666666666], [1.58920254E12, 6.933333333333334], [1.58920236E12, 2.85], [1.58920284E12, 11.75], [1.58920242E12, 8.05], [1.5892029E12, 7.883333333333334], [1.58920272E12, 7.516666666666667], [1.58920278E12, 11.05], [1.5892026E12, 6.833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58920296E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.0166666666666666, "minX": 1.58920236E12, "maxY": 11.766666666666667, "series": [{"data": [[1.58920266E12, 7.0], [1.58920296E12, 2.0166666666666666], [1.58920248E12, 8.166666666666666], [1.58920254E12, 6.933333333333334], [1.58920236E12, 2.716666666666667], [1.58920284E12, 11.766666666666667], [1.58920242E12, 8.05], [1.5892029E12, 7.95], [1.58920272E12, 7.516666666666667], [1.58920278E12, 11.05], [1.5892026E12, 6.833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58920296E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.0166666666666666, "minX": 1.58920236E12, "maxY": 11.766666666666667, "series": [{"data": [[1.58920266E12, 7.0], [1.58920296E12, 2.0166666666666666], [1.58920248E12, 8.166666666666666], [1.58920254E12, 6.933333333333334], [1.58920236E12, 2.716666666666667], [1.58920284E12, 11.766666666666667], [1.58920242E12, 8.05], [1.5892029E12, 7.95], [1.58920272E12, 7.516666666666667], [1.58920278E12, 11.05], [1.5892026E12, 6.833333333333333]], "isOverall": false, "label": "extract-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58920296E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.0166666666666666, "minX": 1.58920236E12, "maxY": 11.766666666666667, "series": [{"data": [[1.58920266E12, 7.0], [1.58920296E12, 2.0166666666666666], [1.58920248E12, 8.166666666666666], [1.58920254E12, 6.933333333333334], [1.58920236E12, 2.716666666666667], [1.58920284E12, 11.766666666666667], [1.58920242E12, 8.05], [1.5892029E12, 7.95], [1.58920272E12, 7.516666666666667], [1.58920278E12, 11.05], [1.5892026E12, 6.833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58920296E12, "title": "Total Transactions Per Second"}},
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

