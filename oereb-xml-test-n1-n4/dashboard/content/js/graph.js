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
        data: {"result": {"minY": 205.0, "minX": 0.0, "maxY": 1515.0, "series": [{"data": [[0.0, 205.0], [0.1, 209.0], [0.2, 212.0], [0.3, 213.0], [0.4, 214.0], [0.5, 215.0], [0.6, 215.0], [0.7, 216.0], [0.8, 216.0], [0.9, 216.0], [1.0, 217.0], [1.1, 217.0], [1.2, 218.0], [1.3, 218.0], [1.4, 218.0], [1.5, 218.0], [1.6, 219.0], [1.7, 219.0], [1.8, 220.0], [1.9, 220.0], [2.0, 221.0], [2.1, 221.0], [2.2, 221.0], [2.3, 222.0], [2.4, 222.0], [2.5, 222.0], [2.6, 222.0], [2.7, 223.0], [2.8, 223.0], [2.9, 224.0], [3.0, 224.0], [3.1, 224.0], [3.2, 224.0], [3.3, 225.0], [3.4, 225.0], [3.5, 226.0], [3.6, 226.0], [3.7, 226.0], [3.8, 227.0], [3.9, 227.0], [4.0, 227.0], [4.1, 228.0], [4.2, 228.0], [4.3, 228.0], [4.4, 229.0], [4.5, 229.0], [4.6, 230.0], [4.7, 230.0], [4.8, 230.0], [4.9, 231.0], [5.0, 231.0], [5.1, 231.0], [5.2, 232.0], [5.3, 232.0], [5.4, 233.0], [5.5, 233.0], [5.6, 233.0], [5.7, 234.0], [5.8, 234.0], [5.9, 235.0], [6.0, 235.0], [6.1, 235.0], [6.2, 236.0], [6.3, 236.0], [6.4, 236.0], [6.5, 237.0], [6.6, 237.0], [6.7, 237.0], [6.8, 238.0], [6.9, 238.0], [7.0, 238.0], [7.1, 239.0], [7.2, 239.0], [7.3, 240.0], [7.4, 240.0], [7.5, 240.0], [7.6, 241.0], [7.7, 241.0], [7.8, 242.0], [7.9, 242.0], [8.0, 243.0], [8.1, 243.0], [8.2, 243.0], [8.3, 243.0], [8.4, 244.0], [8.5, 244.0], [8.6, 244.0], [8.7, 245.0], [8.8, 245.0], [8.9, 245.0], [9.0, 246.0], [9.1, 246.0], [9.2, 246.0], [9.3, 246.0], [9.4, 247.0], [9.5, 247.0], [9.6, 247.0], [9.7, 248.0], [9.8, 248.0], [9.9, 248.0], [10.0, 249.0], [10.1, 249.0], [10.2, 249.0], [10.3, 250.0], [10.4, 250.0], [10.5, 250.0], [10.6, 251.0], [10.7, 251.0], [10.8, 251.0], [10.9, 252.0], [11.0, 252.0], [11.1, 253.0], [11.2, 253.0], [11.3, 253.0], [11.4, 253.0], [11.5, 254.0], [11.6, 254.0], [11.7, 255.0], [11.8, 255.0], [11.9, 255.0], [12.0, 256.0], [12.1, 256.0], [12.2, 256.0], [12.3, 257.0], [12.4, 257.0], [12.5, 258.0], [12.6, 258.0], [12.7, 258.0], [12.8, 259.0], [12.9, 259.0], [13.0, 260.0], [13.1, 260.0], [13.2, 260.0], [13.3, 261.0], [13.4, 261.0], [13.5, 261.0], [13.6, 262.0], [13.7, 262.0], [13.8, 263.0], [13.9, 263.0], [14.0, 263.0], [14.1, 264.0], [14.2, 264.0], [14.3, 265.0], [14.4, 265.0], [14.5, 266.0], [14.6, 267.0], [14.7, 267.0], [14.8, 267.0], [14.9, 268.0], [15.0, 268.0], [15.1, 268.0], [15.2, 269.0], [15.3, 269.0], [15.4, 269.0], [15.5, 270.0], [15.6, 270.0], [15.7, 271.0], [15.8, 271.0], [15.9, 272.0], [16.0, 272.0], [16.1, 272.0], [16.2, 273.0], [16.3, 274.0], [16.4, 274.0], [16.5, 275.0], [16.6, 275.0], [16.7, 276.0], [16.8, 276.0], [16.9, 277.0], [17.0, 277.0], [17.1, 278.0], [17.2, 278.0], [17.3, 279.0], [17.4, 279.0], [17.5, 279.0], [17.6, 280.0], [17.7, 280.0], [17.8, 281.0], [17.9, 281.0], [18.0, 281.0], [18.1, 282.0], [18.2, 282.0], [18.3, 283.0], [18.4, 283.0], [18.5, 283.0], [18.6, 284.0], [18.7, 284.0], [18.8, 285.0], [18.9, 285.0], [19.0, 285.0], [19.1, 285.0], [19.2, 286.0], [19.3, 286.0], [19.4, 286.0], [19.5, 287.0], [19.6, 287.0], [19.7, 287.0], [19.8, 287.0], [19.9, 287.0], [20.0, 288.0], [20.1, 288.0], [20.2, 288.0], [20.3, 288.0], [20.4, 289.0], [20.5, 289.0], [20.6, 290.0], [20.7, 290.0], [20.8, 290.0], [20.9, 290.0], [21.0, 291.0], [21.1, 291.0], [21.2, 291.0], [21.3, 291.0], [21.4, 292.0], [21.5, 292.0], [21.6, 292.0], [21.7, 292.0], [21.8, 293.0], [21.9, 293.0], [22.0, 293.0], [22.1, 293.0], [22.2, 293.0], [22.3, 294.0], [22.4, 294.0], [22.5, 294.0], [22.6, 294.0], [22.7, 294.0], [22.8, 295.0], [22.9, 295.0], [23.0, 295.0], [23.1, 295.0], [23.2, 295.0], [23.3, 295.0], [23.4, 296.0], [23.5, 296.0], [23.6, 296.0], [23.7, 296.0], [23.8, 296.0], [23.9, 296.0], [24.0, 297.0], [24.1, 297.0], [24.2, 297.0], [24.3, 297.0], [24.4, 297.0], [24.5, 298.0], [24.6, 298.0], [24.7, 298.0], [24.8, 298.0], [24.9, 298.0], [25.0, 299.0], [25.1, 299.0], [25.2, 299.0], [25.3, 299.0], [25.4, 299.0], [25.5, 300.0], [25.6, 300.0], [25.7, 300.0], [25.8, 300.0], [25.9, 300.0], [26.0, 301.0], [26.1, 301.0], [26.2, 301.0], [26.3, 301.0], [26.4, 301.0], [26.5, 302.0], [26.6, 302.0], [26.7, 302.0], [26.8, 302.0], [26.9, 302.0], [27.0, 303.0], [27.1, 303.0], [27.2, 303.0], [27.3, 303.0], [27.4, 303.0], [27.5, 304.0], [27.6, 304.0], [27.7, 304.0], [27.8, 305.0], [27.9, 305.0], [28.0, 305.0], [28.1, 305.0], [28.2, 305.0], [28.3, 306.0], [28.4, 306.0], [28.5, 306.0], [28.6, 306.0], [28.7, 306.0], [28.8, 307.0], [28.9, 307.0], [29.0, 307.0], [29.1, 307.0], [29.2, 307.0], [29.3, 307.0], [29.4, 308.0], [29.5, 308.0], [29.6, 308.0], [29.7, 308.0], [29.8, 309.0], [29.9, 309.0], [30.0, 309.0], [30.1, 309.0], [30.2, 310.0], [30.3, 310.0], [30.4, 310.0], [30.5, 310.0], [30.6, 310.0], [30.7, 310.0], [30.8, 311.0], [30.9, 311.0], [31.0, 311.0], [31.1, 311.0], [31.2, 312.0], [31.3, 312.0], [31.4, 312.0], [31.5, 312.0], [31.6, 313.0], [31.7, 313.0], [31.8, 313.0], [31.9, 314.0], [32.0, 314.0], [32.1, 314.0], [32.2, 314.0], [32.3, 314.0], [32.4, 314.0], [32.5, 315.0], [32.6, 315.0], [32.7, 315.0], [32.8, 316.0], [32.9, 316.0], [33.0, 316.0], [33.1, 317.0], [33.2, 317.0], [33.3, 318.0], [33.4, 318.0], [33.5, 318.0], [33.6, 318.0], [33.7, 319.0], [33.8, 319.0], [33.9, 319.0], [34.0, 319.0], [34.1, 320.0], [34.2, 321.0], [34.3, 321.0], [34.4, 322.0], [34.5, 322.0], [34.6, 322.0], [34.7, 323.0], [34.8, 323.0], [34.9, 324.0], [35.0, 325.0], [35.1, 325.0], [35.2, 325.0], [35.3, 326.0], [35.4, 326.0], [35.5, 327.0], [35.6, 328.0], [35.7, 328.0], [35.8, 329.0], [35.9, 329.0], [36.0, 330.0], [36.1, 330.0], [36.2, 331.0], [36.3, 331.0], [36.4, 333.0], [36.5, 334.0], [36.6, 334.0], [36.7, 335.0], [36.8, 335.0], [36.9, 336.0], [37.0, 337.0], [37.1, 337.0], [37.2, 338.0], [37.3, 339.0], [37.4, 340.0], [37.5, 341.0], [37.6, 342.0], [37.7, 343.0], [37.8, 344.0], [37.9, 345.0], [38.0, 346.0], [38.1, 347.0], [38.2, 347.0], [38.3, 349.0], [38.4, 350.0], [38.5, 350.0], [38.6, 351.0], [38.7, 352.0], [38.8, 354.0], [38.9, 355.0], [39.0, 356.0], [39.1, 357.0], [39.2, 358.0], [39.3, 359.0], [39.4, 360.0], [39.5, 361.0], [39.6, 362.0], [39.7, 363.0], [39.8, 364.0], [39.9, 365.0], [40.0, 367.0], [40.1, 367.0], [40.2, 368.0], [40.3, 369.0], [40.4, 371.0], [40.5, 372.0], [40.6, 373.0], [40.7, 374.0], [40.8, 376.0], [40.9, 377.0], [41.0, 378.0], [41.1, 379.0], [41.2, 380.0], [41.3, 380.0], [41.4, 380.0], [41.5, 381.0], [41.6, 382.0], [41.7, 383.0], [41.8, 383.0], [41.9, 384.0], [42.0, 385.0], [42.1, 385.0], [42.2, 385.0], [42.3, 386.0], [42.4, 386.0], [42.5, 387.0], [42.6, 388.0], [42.7, 388.0], [42.8, 389.0], [42.9, 389.0], [43.0, 389.0], [43.1, 390.0], [43.2, 390.0], [43.3, 391.0], [43.4, 391.0], [43.5, 392.0], [43.6, 393.0], [43.7, 393.0], [43.8, 394.0], [43.9, 394.0], [44.0, 395.0], [44.1, 396.0], [44.2, 396.0], [44.3, 397.0], [44.4, 398.0], [44.5, 398.0], [44.6, 399.0], [44.7, 399.0], [44.8, 400.0], [44.9, 401.0], [45.0, 401.0], [45.1, 402.0], [45.2, 402.0], [45.3, 402.0], [45.4, 403.0], [45.5, 403.0], [45.6, 404.0], [45.7, 404.0], [45.8, 405.0], [45.9, 405.0], [46.0, 406.0], [46.1, 406.0], [46.2, 406.0], [46.3, 407.0], [46.4, 407.0], [46.5, 407.0], [46.6, 408.0], [46.7, 408.0], [46.8, 408.0], [46.9, 409.0], [47.0, 410.0], [47.1, 410.0], [47.2, 410.0], [47.3, 411.0], [47.4, 412.0], [47.5, 412.0], [47.6, 412.0], [47.7, 413.0], [47.8, 413.0], [47.9, 414.0], [48.0, 414.0], [48.1, 414.0], [48.2, 415.0], [48.3, 415.0], [48.4, 416.0], [48.5, 416.0], [48.6, 417.0], [48.7, 417.0], [48.8, 418.0], [48.9, 418.0], [49.0, 419.0], [49.1, 420.0], [49.2, 420.0], [49.3, 421.0], [49.4, 421.0], [49.5, 422.0], [49.6, 422.0], [49.7, 423.0], [49.8, 423.0], [49.9, 423.0], [50.0, 424.0], [50.1, 424.0], [50.2, 425.0], [50.3, 425.0], [50.4, 426.0], [50.5, 426.0], [50.6, 427.0], [50.7, 427.0], [50.8, 428.0], [50.9, 429.0], [51.0, 429.0], [51.1, 430.0], [51.2, 431.0], [51.3, 431.0], [51.4, 431.0], [51.5, 432.0], [51.6, 433.0], [51.7, 433.0], [51.8, 434.0], [51.9, 434.0], [52.0, 435.0], [52.1, 435.0], [52.2, 435.0], [52.3, 436.0], [52.4, 436.0], [52.5, 437.0], [52.6, 437.0], [52.7, 437.0], [52.8, 438.0], [52.9, 439.0], [53.0, 439.0], [53.1, 440.0], [53.2, 441.0], [53.3, 441.0], [53.4, 442.0], [53.5, 442.0], [53.6, 443.0], [53.7, 443.0], [53.8, 444.0], [53.9, 444.0], [54.0, 445.0], [54.1, 446.0], [54.2, 446.0], [54.3, 447.0], [54.4, 448.0], [54.5, 448.0], [54.6, 448.0], [54.7, 448.0], [54.8, 449.0], [54.9, 450.0], [55.0, 450.0], [55.1, 451.0], [55.2, 451.0], [55.3, 452.0], [55.4, 452.0], [55.5, 452.0], [55.6, 454.0], [55.7, 454.0], [55.8, 455.0], [55.9, 455.0], [56.0, 456.0], [56.1, 456.0], [56.2, 457.0], [56.3, 458.0], [56.4, 458.0], [56.5, 459.0], [56.6, 459.0], [56.7, 460.0], [56.8, 460.0], [56.9, 461.0], [57.0, 462.0], [57.1, 462.0], [57.2, 463.0], [57.3, 463.0], [57.4, 464.0], [57.5, 464.0], [57.6, 465.0], [57.7, 465.0], [57.8, 466.0], [57.9, 467.0], [58.0, 467.0], [58.1, 468.0], [58.2, 468.0], [58.3, 469.0], [58.4, 470.0], [58.5, 471.0], [58.6, 471.0], [58.7, 472.0], [58.8, 472.0], [58.9, 473.0], [59.0, 474.0], [59.1, 474.0], [59.2, 474.0], [59.3, 475.0], [59.4, 476.0], [59.5, 477.0], [59.6, 477.0], [59.7, 478.0], [59.8, 479.0], [59.9, 480.0], [60.0, 480.0], [60.1, 481.0], [60.2, 482.0], [60.3, 482.0], [60.4, 483.0], [60.5, 484.0], [60.6, 485.0], [60.7, 485.0], [60.8, 486.0], [60.9, 487.0], [61.0, 487.0], [61.1, 488.0], [61.2, 489.0], [61.3, 489.0], [61.4, 490.0], [61.5, 491.0], [61.6, 492.0], [61.7, 492.0], [61.8, 493.0], [61.9, 493.0], [62.0, 494.0], [62.1, 494.0], [62.2, 495.0], [62.3, 496.0], [62.4, 496.0], [62.5, 497.0], [62.6, 498.0], [62.7, 498.0], [62.8, 499.0], [62.9, 500.0], [63.0, 501.0], [63.1, 501.0], [63.2, 502.0], [63.3, 503.0], [63.4, 504.0], [63.5, 505.0], [63.6, 505.0], [63.7, 506.0], [63.8, 507.0], [63.9, 508.0], [64.0, 508.0], [64.1, 509.0], [64.2, 510.0], [64.3, 511.0], [64.4, 512.0], [64.5, 513.0], [64.6, 513.0], [64.7, 514.0], [64.8, 515.0], [64.9, 516.0], [65.0, 516.0], [65.1, 517.0], [65.2, 518.0], [65.3, 519.0], [65.4, 519.0], [65.5, 521.0], [65.6, 521.0], [65.7, 522.0], [65.8, 523.0], [65.9, 523.0], [66.0, 524.0], [66.1, 525.0], [66.2, 525.0], [66.3, 527.0], [66.4, 527.0], [66.5, 528.0], [66.6, 528.0], [66.7, 529.0], [66.8, 530.0], [66.9, 530.0], [67.0, 531.0], [67.1, 532.0], [67.2, 532.0], [67.3, 533.0], [67.4, 534.0], [67.5, 535.0], [67.6, 535.0], [67.7, 536.0], [67.8, 537.0], [67.9, 537.0], [68.0, 538.0], [68.1, 539.0], [68.2, 539.0], [68.3, 540.0], [68.4, 540.0], [68.5, 541.0], [68.6, 542.0], [68.7, 542.0], [68.8, 543.0], [68.9, 544.0], [69.0, 544.0], [69.1, 545.0], [69.2, 545.0], [69.3, 545.0], [69.4, 546.0], [69.5, 546.0], [69.6, 547.0], [69.7, 547.0], [69.8, 548.0], [69.9, 548.0], [70.0, 549.0], [70.1, 549.0], [70.2, 550.0], [70.3, 551.0], [70.4, 551.0], [70.5, 552.0], [70.6, 552.0], [70.7, 553.0], [70.8, 553.0], [70.9, 553.0], [71.0, 554.0], [71.1, 554.0], [71.2, 554.0], [71.3, 554.0], [71.4, 555.0], [71.5, 555.0], [71.6, 556.0], [71.7, 556.0], [71.8, 557.0], [71.9, 557.0], [72.0, 557.0], [72.1, 557.0], [72.2, 558.0], [72.3, 558.0], [72.4, 558.0], [72.5, 559.0], [72.6, 559.0], [72.7, 559.0], [72.8, 559.0], [72.9, 560.0], [73.0, 560.0], [73.1, 561.0], [73.2, 561.0], [73.3, 561.0], [73.4, 562.0], [73.5, 562.0], [73.6, 562.0], [73.7, 563.0], [73.8, 563.0], [73.9, 563.0], [74.0, 564.0], [74.1, 564.0], [74.2, 564.0], [74.3, 564.0], [74.4, 565.0], [74.5, 565.0], [74.6, 565.0], [74.7, 565.0], [74.8, 566.0], [74.9, 566.0], [75.0, 566.0], [75.1, 566.0], [75.2, 567.0], [75.3, 567.0], [75.4, 567.0], [75.5, 567.0], [75.6, 568.0], [75.7, 568.0], [75.8, 568.0], [75.9, 568.0], [76.0, 569.0], [76.1, 569.0], [76.2, 569.0], [76.3, 570.0], [76.4, 570.0], [76.5, 570.0], [76.6, 571.0], [76.7, 571.0], [76.8, 571.0], [76.9, 571.0], [77.0, 571.0], [77.1, 572.0], [77.2, 572.0], [77.3, 573.0], [77.4, 573.0], [77.5, 573.0], [77.6, 574.0], [77.7, 574.0], [77.8, 574.0], [77.9, 575.0], [78.0, 575.0], [78.1, 575.0], [78.2, 576.0], [78.3, 576.0], [78.4, 577.0], [78.5, 577.0], [78.6, 577.0], [78.7, 578.0], [78.8, 578.0], [78.9, 578.0], [79.0, 578.0], [79.1, 579.0], [79.2, 579.0], [79.3, 580.0], [79.4, 580.0], [79.5, 580.0], [79.6, 580.0], [79.7, 581.0], [79.8, 581.0], [79.9, 581.0], [80.0, 581.0], [80.1, 582.0], [80.2, 582.0], [80.3, 582.0], [80.4, 583.0], [80.5, 583.0], [80.6, 583.0], [80.7, 584.0], [80.8, 584.0], [80.9, 585.0], [81.0, 585.0], [81.1, 586.0], [81.2, 586.0], [81.3, 586.0], [81.4, 587.0], [81.5, 587.0], [81.6, 587.0], [81.7, 588.0], [81.8, 588.0], [81.9, 588.0], [82.0, 589.0], [82.1, 589.0], [82.2, 589.0], [82.3, 590.0], [82.4, 590.0], [82.5, 591.0], [82.6, 591.0], [82.7, 591.0], [82.8, 592.0], [82.9, 592.0], [83.0, 592.0], [83.1, 593.0], [83.2, 593.0], [83.3, 594.0], [83.4, 594.0], [83.5, 594.0], [83.6, 595.0], [83.7, 595.0], [83.8, 595.0], [83.9, 596.0], [84.0, 596.0], [84.1, 597.0], [84.2, 597.0], [84.3, 598.0], [84.4, 598.0], [84.5, 599.0], [84.6, 599.0], [84.7, 600.0], [84.8, 600.0], [84.9, 601.0], [85.0, 601.0], [85.1, 602.0], [85.2, 602.0], [85.3, 603.0], [85.4, 603.0], [85.5, 603.0], [85.6, 603.0], [85.7, 604.0], [85.8, 604.0], [85.9, 604.0], [86.0, 605.0], [86.1, 605.0], [86.2, 605.0], [86.3, 605.0], [86.4, 606.0], [86.5, 606.0], [86.6, 607.0], [86.7, 607.0], [86.8, 607.0], [86.9, 608.0], [87.0, 608.0], [87.1, 609.0], [87.2, 609.0], [87.3, 610.0], [87.4, 610.0], [87.5, 610.0], [87.6, 611.0], [87.7, 612.0], [87.8, 612.0], [87.9, 612.0], [88.0, 613.0], [88.1, 614.0], [88.2, 614.0], [88.3, 614.0], [88.4, 615.0], [88.5, 615.0], [88.6, 616.0], [88.7, 616.0], [88.8, 616.0], [88.9, 617.0], [89.0, 618.0], [89.1, 619.0], [89.2, 619.0], [89.3, 620.0], [89.4, 620.0], [89.5, 621.0], [89.6, 622.0], [89.7, 622.0], [89.8, 623.0], [89.9, 623.0], [90.0, 624.0], [90.1, 625.0], [90.2, 625.0], [90.3, 625.0], [90.4, 626.0], [90.5, 627.0], [90.6, 627.0], [90.7, 628.0], [90.8, 628.0], [90.9, 629.0], [91.0, 630.0], [91.1, 630.0], [91.2, 631.0], [91.3, 631.0], [91.4, 632.0], [91.5, 632.0], [91.6, 633.0], [91.7, 634.0], [91.8, 634.0], [91.9, 635.0], [92.0, 636.0], [92.1, 637.0], [92.2, 637.0], [92.3, 638.0], [92.4, 639.0], [92.5, 640.0], [92.6, 641.0], [92.7, 643.0], [92.8, 644.0], [92.9, 644.0], [93.0, 645.0], [93.1, 646.0], [93.2, 647.0], [93.3, 648.0], [93.4, 649.0], [93.5, 650.0], [93.6, 651.0], [93.7, 653.0], [93.8, 654.0], [93.9, 654.0], [94.0, 656.0], [94.1, 657.0], [94.2, 658.0], [94.3, 659.0], [94.4, 660.0], [94.5, 661.0], [94.6, 661.0], [94.7, 664.0], [94.8, 666.0], [94.9, 668.0], [95.0, 670.0], [95.1, 672.0], [95.2, 674.0], [95.3, 676.0], [95.4, 678.0], [95.5, 679.0], [95.6, 681.0], [95.7, 682.0], [95.8, 685.0], [95.9, 688.0], [96.0, 691.0], [96.1, 693.0], [96.2, 695.0], [96.3, 699.0], [96.4, 702.0], [96.5, 705.0], [96.6, 708.0], [96.7, 710.0], [96.8, 712.0], [96.9, 716.0], [97.0, 719.0], [97.1, 723.0], [97.2, 728.0], [97.3, 733.0], [97.4, 739.0], [97.5, 744.0], [97.6, 749.0], [97.7, 754.0], [97.8, 758.0], [97.9, 763.0], [98.0, 770.0], [98.1, 775.0], [98.2, 778.0], [98.3, 782.0], [98.4, 785.0], [98.5, 795.0], [98.6, 807.0], [98.7, 814.0], [98.8, 832.0], [98.9, 838.0], [99.0, 865.0], [99.1, 869.0], [99.2, 880.0], [99.3, 903.0], [99.4, 932.0], [99.5, 973.0], [99.6, 1008.0], [99.7, 1043.0], [99.8, 1110.0], [99.9, 1237.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 1627.0, "series": [{"data": [[600.0, 747.0], [700.0, 142.0], [800.0, 49.0], [200.0, 1627.0], [900.0, 16.0], [1000.0, 15.0], [1100.0, 7.0], [1200.0, 3.0], [300.0, 1238.0], [1300.0, 1.0], [1400.0, 2.0], [1500.0, 1.0], [400.0, 1155.0], [500.0, 1397.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4032.0, "series": [{"data": [[0.0, 4032.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2367.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.58919738E12, "maxY": 4.0, "series": [{"data": [[1.58919774E12, 1.0], [1.58919756E12, 1.0], [1.58919786E12, 1.0], [1.58919738E12, 1.0], [1.58919768E12, 1.0], [1.5891975E12, 1.0], [1.5891978E12, 1.0], [1.58919762E12, 1.0], [1.58919792E12, 1.0], [1.58919744E12, 1.0]], "isOverall": false, "label": "1", "isController": false}, {"data": [[1.58919822E12, 2.0], [1.58919852E12, 1.0], [1.58919816E12, 2.0], [1.58919846E12, 1.0], [1.5891981E12, 2.0], [1.5891984E12, 1.0], [1.58919804E12, 2.0], [1.58919834E12, 1.8949416342412453], [1.58919864E12, 1.0], [1.58919798E12, 2.0], [1.58919828E12, 2.0], [1.58919858E12, 1.0], [1.58919792E12, 1.983050847457627]], "isOverall": false, "label": "2", "isController": false}, {"data": [[1.5891987E12, 4.0], [1.58919864E12, 3.98984771573604], [1.58919882E12, 4.0], [1.58919876E12, 4.0], [1.58919894E12, 1.2999999999999998], [1.58919888E12, 3.7476038338658153]], "isOverall": false, "label": "4", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58919894E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 319.76562499999994, "minX": 1.0, "maxY": 587.5987096774193, "series": [{"data": [[1.0, 587.5987096774193], [2.0, 322.5653669724773], [4.0, 476.9534662867997], [3.0, 319.76562499999994]], "isOverall": false, "label": "extract", "isController": false}, {"data": [[2.4359374999999996, 437.50046875000095]], "isOverall": false, "label": "extract-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 4.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.58919738E12, "maxY": 5353585.533333333, "series": [{"data": [[1.58919756E12, 1470364.0], [1.58919786E12, 1484779.3333333333], [1.58919816E12, 5178192.366666666], [1.58919846E12, 1197743.5], [1.58919876E12, 1761761.15], [1.58919744E12, 1398287.3333333333], [1.5891987E12, 2077091.6166666667], [1.58919738E12, 1427118.0], [1.58919768E12, 1513610.0], [1.58919798E12, 5353585.533333333], [1.58919828E12, 2914936.716666667], [1.58919858E12, 1335415.1666666667], [1.58919888E12, 3273095.1666666665], [1.58919822E12, 3225777.466666667], [1.58919852E12, 1183976.3333333333], [1.58919882E12, 2004063.4666666666], [1.5891975E12, 1427118.0], [1.5891978E12, 1499194.6666666667], [1.5891981E12, 4923027.566666666], [1.5891984E12, 1294113.6666666667], [1.58919774E12, 1470364.0], [1.58919804E12, 5287848.883333334], [1.58919834E12, 1675964.05], [1.58919864E12, 1628218.0], [1.58919894E12, 473220.43333333335], [1.58919762E12, 1484779.3333333333], [1.58919792E12, 2054060.9166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58919756E12, 0.0], [1.58919786E12, 0.0], [1.58919816E12, 0.0], [1.58919846E12, 0.0], [1.58919876E12, 0.0], [1.58919744E12, 0.0], [1.5891987E12, 0.0], [1.58919738E12, 0.0], [1.58919768E12, 0.0], [1.58919798E12, 0.0], [1.58919828E12, 0.0], [1.58919858E12, 0.0], [1.58919888E12, 0.0], [1.58919822E12, 0.0], [1.58919852E12, 0.0], [1.58919882E12, 0.0], [1.5891975E12, 0.0], [1.5891978E12, 0.0], [1.5891981E12, 0.0], [1.5891984E12, 0.0], [1.58919774E12, 0.0], [1.58919804E12, 0.0], [1.58919834E12, 0.0], [1.58919864E12, 0.0], [1.58919894E12, 0.0], [1.58919762E12, 0.0], [1.58919792E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58919894E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 299.2266666666666, "minX": 1.58919738E12, "maxY": 701.5348837209302, "series": [{"data": [[1.58919756E12, 585.4313725490193], [1.58919786E12, 583.9029126213587], [1.58919816E12, 318.6203208556148], [1.58919846E12, 686.5057471264369], [1.58919876E12, 544.1334841628966], [1.58919744E12, 618.237113402062], [1.5891987E12, 526.6483516483527], [1.58919738E12, 603.0808080808079], [1.58919768E12, 573.2000000000002], [1.58919798E12, 308.60309278350513], [1.58919828E12, 311.16363636363633], [1.58919858E12, 614.2783505154637], [1.58919888E12, 355.8258785942492], [1.58919822E12, 316.5144356955384], [1.58919852E12, 701.5348837209302], [1.58919882E12, 453.32075471698084], [1.5891975E12, 603.4040404040402], [1.5891978E12, 579.1826923076922], [1.5891981E12, 338.22752808988764], [1.5891984E12, 641.4361702127657], [1.58919774E12, 584.7941176470586], [1.58919804E12, 312.21409921671005], [1.58919834E12, 406.9766536964981], [1.58919864E12, 558.864], [1.58919894E12, 299.2266666666666], [1.58919762E12, 583.6213592233009], [1.58919792E12, 475.8896551724137]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58919894E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 226.4536082474226, "minX": 1.58919738E12, "maxY": 629.0348837209301, "series": [{"data": [[1.58919756E12, 512.0294117647061], [1.58919786E12, 510.5728155339809], [1.58919816E12, 234.00000000000006], [1.58919846E12, 613.896551724138], [1.58919876E12, 521.7533936651578], [1.58919744E12, 544.1237113402059], [1.5891987E12, 500.8901098901098], [1.58919738E12, 525.8585858585858], [1.58919768E12, 498.3523809523809], [1.58919798E12, 226.4536082474226], [1.58919828E12, 270.3454545454545], [1.58919858E12, 542.5773195876293], [1.58919888E12, 326.0015974440893], [1.58919822E12, 268.15223097112886], [1.58919852E12, 629.0348837209301], [1.58919882E12, 432.2622641509435], [1.5891975E12, 529.7676767676769], [1.5891978E12, 505.97115384615375], [1.5891981E12, 256.483146067416], [1.5891984E12, 571.5106382978722], [1.58919774E12, 511.4803921568624], [1.58919804E12, 229.23237597911228], [1.58919834E12, 372.5330739299611], [1.58919864E12, 522.4319999999999], [1.58919894E12, 281.5266666666668], [1.58919762E12, 509.7572815533982], [1.58919792E12, 398.71724137931056]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58919894E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.58919738E12, "maxY": 4.9E-324, "series": [{"data": [[1.58919756E12, 0.0], [1.58919786E12, 0.0], [1.58919816E12, 0.0], [1.58919846E12, 0.0], [1.58919876E12, 0.0], [1.58919744E12, 0.0], [1.5891987E12, 0.0], [1.58919738E12, 0.0], [1.58919768E12, 0.0], [1.58919798E12, 0.0], [1.58919828E12, 0.0], [1.58919858E12, 0.0], [1.58919888E12, 0.0], [1.58919822E12, 0.0], [1.58919852E12, 0.0], [1.58919882E12, 0.0], [1.5891975E12, 0.0], [1.5891978E12, 0.0], [1.5891981E12, 0.0], [1.5891984E12, 0.0], [1.58919774E12, 0.0], [1.58919804E12, 0.0], [1.58919834E12, 0.0], [1.58919864E12, 0.0], [1.58919894E12, 0.0], [1.58919762E12, 0.0], [1.58919792E12, 0.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58919894E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 205.0, "minX": 1.58919738E12, "maxY": 1515.0, "series": [{"data": [[1.58919756E12, 802.0], [1.58919786E12, 932.0], [1.58919816E12, 573.0], [1.58919846E12, 1515.0], [1.58919876E12, 1237.0], [1.58919744E12, 1257.0], [1.5891987E12, 1089.0], [1.58919738E12, 801.0], [1.58919768E12, 868.0], [1.58919798E12, 811.0], [1.58919828E12, 549.0], [1.58919858E12, 776.0], [1.58919888E12, 1002.0], [1.58919822E12, 575.0], [1.58919852E12, 1487.0], [1.58919882E12, 731.0], [1.5891975E12, 884.0], [1.5891978E12, 943.0], [1.5891981E12, 1381.0], [1.5891984E12, 1249.0], [1.58919774E12, 814.0], [1.58919804E12, 622.0], [1.58919834E12, 834.0], [1.58919864E12, 883.0], [1.58919894E12, 550.0], [1.58919762E12, 785.0], [1.58919792E12, 814.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58919756E12, 532.0], [1.58919786E12, 510.0], [1.58919816E12, 231.0], [1.58919846E12, 587.0], [1.58919876E12, 287.0], [1.58919744E12, 533.0], [1.5891987E12, 359.0], [1.58919738E12, 544.0], [1.58919768E12, 524.0], [1.58919798E12, 205.0], [1.58919828E12, 260.0], [1.58919858E12, 568.0], [1.58919888E12, 216.0], [1.58919822E12, 243.0], [1.58919852E12, 574.0], [1.58919882E12, 241.0], [1.5891975E12, 534.0], [1.5891978E12, 520.0], [1.5891981E12, 230.0], [1.5891984E12, 558.0], [1.58919774E12, 516.0], [1.58919804E12, 209.0], [1.58919834E12, 253.0], [1.58919864E12, 378.0], [1.58919894E12, 216.0], [1.58919762E12, 533.0], [1.58919792E12, 208.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58919756E12, 619.7], [1.58919786E12, 615.8000000000001], [1.58919816E12, 428.5], [1.58919846E12, 862.6], [1.58919876E12, 716.7], [1.58919744E12, 694.4], [1.5891987E12, 668.0], [1.58919738E12, 642.0], [1.58919768E12, 609.4], [1.58919798E12, 450.1], [1.58919828E12, 326.0], [1.58919858E12, 644.0], [1.58919888E12, 513.3000000000001], [1.58919822E12, 348.0], [1.58919852E12, 887.8], [1.58919882E12, 570.9000000000001], [1.5891975E12, 693.0], [1.5891978E12, 607.0], [1.5891981E12, 449.6], [1.5891984E12, 686.0], [1.58919774E12, 659.1], [1.58919804E12, 448.6], [1.58919834E12, 627.0], [1.58919864E12, 668.6], [1.58919894E12, 340.9], [1.58919762E12, 624.8000000000001], [1.58919792E12, 598.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58919756E12, 801.43], [1.58919786E12, 929.4799999999996], [1.58919816E12, 543.25], [1.58919846E12, 1515.0], [1.58919876E12, 1123.84], [1.58919744E12, 1257.0], [1.5891987E12, 850.6399999999999], [1.58919738E12, 801.0], [1.58919768E12, 862.8399999999998], [1.58919798E12, 606.0900000000003], [1.58919828E12, 514.9799999999999], [1.58919858E12, 776.0], [1.58919888E12, 692.0300000000002], [1.58919822E12, 516.8000000000001], [1.58919852E12, 1487.0], [1.58919882E12, 674.1399999999996], [1.5891975E12, 884.0], [1.5891978E12, 939.8500000000001], [1.5891981E12, 815.9100000000003], [1.5891984E12, 1249.0], [1.58919774E12, 813.3399999999999], [1.58919804E12, 542.119999999999], [1.58919834E12, 713.68], [1.58919864E12, 822.3500000000001], [1.58919894E12, 538.2700000000002], [1.58919762E12, 784.4799999999999], [1.58919792E12, 800.1999999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58919756E12, 675.3999999999999], [1.58919786E12, 714.1999999999998], [1.58919816E12, 471.0], [1.58919846E12, 894.9999999999999], [1.58919876E12, 870.9499999999998], [1.58919744E12, 843.2999999999998], [1.5891987E12, 717.0], [1.58919738E12, 771.0], [1.58919768E12, 709.4], [1.58919798E12, 468.54999999999995], [1.58919828E12, 364.5999999999999], [1.58919858E12, 658.3], [1.58919888E12, 571.65], [1.58919822E12, 395.5999999999997], [1.58919852E12, 1094.5999999999997], [1.58919882E12, 613.5999999999999], [1.5891975E12, 743.0], [1.5891978E12, 714.75], [1.5891981E12, 481.89999999999986], [1.5891984E12, 781.25], [1.58919774E12, 749.05], [1.58919804E12, 473.7999999999997], [1.58919834E12, 663.3], [1.58919864E12, 712.6999999999999], [1.58919894E12, 419.1499999999999], [1.58919762E12, 739.9999999999998], [1.58919792E12, 638.9999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58919894E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 266.0, "minX": 1.0, "maxY": 605.0, "series": [{"data": [[2.0, 583.0], [8.0, 442.5], [9.0, 460.5], [10.0, 422.0], [11.0, 304.0], [3.0, 296.0], [12.0, 326.5], [13.0, 299.5], [14.0, 305.0], [15.0, 266.0], [1.0, 605.0], [4.0, 310.0], [5.0, 328.0], [6.0, 305.0], [7.0, 322.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 243.0, "minX": 1.0, "maxY": 532.5, "series": [{"data": [[2.0, 510.0], [8.0, 419.0], [9.0, 436.5], [10.0, 413.0], [11.0, 299.5], [3.0, 289.5], [12.0, 317.5], [13.0, 288.0], [14.0, 298.5], [15.0, 262.0], [1.0, 532.5], [4.0, 299.0], [5.0, 306.0], [6.0, 243.0], [7.0, 296.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.4333333333333333, "minX": 1.58919738E12, "maxY": 10.4, "series": [{"data": [[1.58919756E12, 1.7], [1.58919786E12, 1.7166666666666666], [1.58919816E12, 6.233333333333333], [1.58919846E12, 1.45], [1.58919876E12, 7.366666666666666], [1.58919744E12, 1.6166666666666667], [1.5891987E12, 7.583333333333333], [1.58919738E12, 1.6666666666666667], [1.58919768E12, 1.75], [1.58919798E12, 6.466666666666667], [1.58919828E12, 6.416666666666667], [1.58919858E12, 1.6166666666666667], [1.58919888E12, 10.4], [1.58919822E12, 6.35], [1.58919852E12, 1.4333333333333333], [1.58919882E12, 8.833333333333334], [1.5891975E12, 1.65], [1.5891978E12, 1.7333333333333334], [1.5891981E12, 5.933333333333334], [1.5891984E12, 1.5666666666666667], [1.58919774E12, 1.7], [1.58919804E12, 6.383333333333334], [1.58919834E12, 4.266666666666667], [1.58919864E12, 4.216666666666667], [1.58919894E12, 2.466666666666667], [1.58919762E12, 1.7166666666666666], [1.58919792E12, 2.433333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58919894E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.4333333333333333, "minX": 1.58919738E12, "maxY": 10.433333333333334, "series": [{"data": [[1.58919756E12, 1.7], [1.58919786E12, 1.7166666666666666], [1.58919816E12, 6.233333333333333], [1.58919846E12, 1.45], [1.58919876E12, 7.366666666666666], [1.58919744E12, 1.6166666666666667], [1.5891987E12, 7.583333333333333], [1.58919738E12, 1.65], [1.58919768E12, 1.75], [1.58919798E12, 6.466666666666667], [1.58919828E12, 6.416666666666667], [1.58919858E12, 1.6166666666666667], [1.58919888E12, 10.433333333333334], [1.58919822E12, 6.35], [1.58919852E12, 1.4333333333333333], [1.58919882E12, 8.833333333333334], [1.5891975E12, 1.65], [1.5891978E12, 1.7333333333333334], [1.5891981E12, 5.933333333333334], [1.5891984E12, 1.5666666666666667], [1.58919774E12, 1.7], [1.58919804E12, 6.383333333333334], [1.58919834E12, 4.283333333333333], [1.58919864E12, 4.166666666666667], [1.58919894E12, 2.5], [1.58919762E12, 1.7166666666666666], [1.58919792E12, 2.4166666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58919894E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.4333333333333333, "minX": 1.58919738E12, "maxY": 10.433333333333334, "series": [{"data": [[1.58919756E12, 1.7], [1.58919786E12, 1.7166666666666666], [1.58919816E12, 6.233333333333333], [1.58919846E12, 1.45], [1.58919876E12, 7.366666666666666], [1.58919744E12, 1.6166666666666667], [1.5891987E12, 7.583333333333333], [1.58919738E12, 1.65], [1.58919768E12, 1.75], [1.58919798E12, 6.466666666666667], [1.58919828E12, 6.416666666666667], [1.58919858E12, 1.6166666666666667], [1.58919888E12, 10.433333333333334], [1.58919822E12, 6.35], [1.58919852E12, 1.4333333333333333], [1.58919882E12, 8.833333333333334], [1.5891975E12, 1.65], [1.5891978E12, 1.7333333333333334], [1.5891981E12, 5.933333333333334], [1.5891984E12, 1.5666666666666667], [1.58919774E12, 1.7], [1.58919804E12, 6.383333333333334], [1.58919834E12, 4.283333333333333], [1.58919864E12, 4.166666666666667], [1.58919894E12, 2.5], [1.58919762E12, 1.7166666666666666], [1.58919792E12, 2.4166666666666665]], "isOverall": false, "label": "extract-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58919894E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.4333333333333333, "minX": 1.58919738E12, "maxY": 10.433333333333334, "series": [{"data": [[1.58919756E12, 1.7], [1.58919786E12, 1.7166666666666666], [1.58919816E12, 6.233333333333333], [1.58919846E12, 1.45], [1.58919876E12, 7.366666666666666], [1.58919744E12, 1.6166666666666667], [1.5891987E12, 7.583333333333333], [1.58919738E12, 1.65], [1.58919768E12, 1.75], [1.58919798E12, 6.466666666666667], [1.58919828E12, 6.416666666666667], [1.58919858E12, 1.6166666666666667], [1.58919888E12, 10.433333333333334], [1.58919822E12, 6.35], [1.58919852E12, 1.4333333333333333], [1.58919882E12, 8.833333333333334], [1.5891975E12, 1.65], [1.5891978E12, 1.7333333333333334], [1.5891981E12, 5.933333333333334], [1.5891984E12, 1.5666666666666667], [1.58919774E12, 1.7], [1.58919804E12, 6.383333333333334], [1.58919834E12, 4.283333333333333], [1.58919864E12, 4.166666666666667], [1.58919894E12, 2.5], [1.58919762E12, 1.7166666666666666], [1.58919792E12, 2.4166666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58919894E12, "title": "Total Transactions Per Second"}},
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

