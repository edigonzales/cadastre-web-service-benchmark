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
        data: {"result": {"minY": 101.0, "minX": 0.0, "maxY": 1176.0, "series": [{"data": [[0.0, 101.0], [0.1, 108.0], [0.2, 110.0], [0.3, 114.0], [0.4, 115.0], [0.5, 118.0], [0.6, 119.0], [0.7, 121.0], [0.8, 123.0], [0.9, 124.0], [1.0, 125.0], [1.1, 127.0], [1.2, 129.0], [1.3, 130.0], [1.4, 131.0], [1.5, 133.0], [1.6, 134.0], [1.7, 135.0], [1.8, 137.0], [1.9, 139.0], [2.0, 141.0], [2.1, 143.0], [2.2, 145.0], [2.3, 146.0], [2.4, 150.0], [2.5, 153.0], [2.6, 160.0], [2.7, 166.0], [2.8, 175.0], [2.9, 180.0], [3.0, 202.0], [3.1, 239.0], [3.2, 244.0], [3.3, 246.0], [3.4, 249.0], [3.5, 250.0], [3.6, 251.0], [3.7, 251.0], [3.8, 252.0], [3.9, 253.0], [4.0, 254.0], [4.1, 254.0], [4.2, 255.0], [4.3, 256.0], [4.4, 256.0], [4.5, 257.0], [4.6, 257.0], [4.7, 258.0], [4.8, 258.0], [4.9, 259.0], [5.0, 260.0], [5.1, 260.0], [5.2, 260.0], [5.3, 261.0], [5.4, 261.0], [5.5, 261.0], [5.6, 262.0], [5.7, 262.0], [5.8, 262.0], [5.9, 263.0], [6.0, 263.0], [6.1, 263.0], [6.2, 263.0], [6.3, 264.0], [6.4, 264.0], [6.5, 265.0], [6.6, 265.0], [6.7, 265.0], [6.8, 265.0], [6.9, 266.0], [7.0, 266.0], [7.1, 267.0], [7.2, 267.0], [7.3, 267.0], [7.4, 267.0], [7.5, 268.0], [7.6, 268.0], [7.7, 268.0], [7.8, 269.0], [7.9, 269.0], [8.0, 269.0], [8.1, 270.0], [8.2, 270.0], [8.3, 270.0], [8.4, 270.0], [8.5, 270.0], [8.6, 270.0], [8.7, 271.0], [8.8, 271.0], [8.9, 271.0], [9.0, 271.0], [9.1, 271.0], [9.2, 272.0], [9.3, 272.0], [9.4, 272.0], [9.5, 272.0], [9.6, 272.0], [9.7, 273.0], [9.8, 273.0], [9.9, 273.0], [10.0, 273.0], [10.1, 273.0], [10.2, 274.0], [10.3, 274.0], [10.4, 274.0], [10.5, 274.0], [10.6, 275.0], [10.7, 275.0], [10.8, 275.0], [10.9, 275.0], [11.0, 275.0], [11.1, 276.0], [11.2, 276.0], [11.3, 276.0], [11.4, 276.0], [11.5, 276.0], [11.6, 276.0], [11.7, 277.0], [11.8, 277.0], [11.9, 277.0], [12.0, 277.0], [12.1, 277.0], [12.2, 277.0], [12.3, 278.0], [12.4, 278.0], [12.5, 278.0], [12.6, 278.0], [12.7, 278.0], [12.8, 279.0], [12.9, 279.0], [13.0, 279.0], [13.1, 279.0], [13.2, 279.0], [13.3, 279.0], [13.4, 279.0], [13.5, 279.0], [13.6, 280.0], [13.7, 280.0], [13.8, 280.0], [13.9, 280.0], [14.0, 280.0], [14.1, 280.0], [14.2, 281.0], [14.3, 281.0], [14.4, 281.0], [14.5, 281.0], [14.6, 281.0], [14.7, 282.0], [14.8, 282.0], [14.9, 282.0], [15.0, 282.0], [15.1, 282.0], [15.2, 282.0], [15.3, 282.0], [15.4, 282.0], [15.5, 283.0], [15.6, 283.0], [15.7, 283.0], [15.8, 283.0], [15.9, 283.0], [16.0, 284.0], [16.1, 284.0], [16.2, 284.0], [16.3, 284.0], [16.4, 284.0], [16.5, 284.0], [16.6, 284.0], [16.7, 284.0], [16.8, 284.0], [16.9, 285.0], [17.0, 285.0], [17.1, 285.0], [17.2, 285.0], [17.3, 285.0], [17.4, 285.0], [17.5, 285.0], [17.6, 285.0], [17.7, 286.0], [17.8, 286.0], [17.9, 286.0], [18.0, 286.0], [18.1, 286.0], [18.2, 286.0], [18.3, 286.0], [18.4, 287.0], [18.5, 287.0], [18.6, 287.0], [18.7, 287.0], [18.8, 287.0], [18.9, 287.0], [19.0, 287.0], [19.1, 288.0], [19.2, 288.0], [19.3, 288.0], [19.4, 288.0], [19.5, 288.0], [19.6, 288.0], [19.7, 289.0], [19.8, 289.0], [19.9, 289.0], [20.0, 289.0], [20.1, 289.0], [20.2, 289.0], [20.3, 289.0], [20.4, 289.0], [20.5, 290.0], [20.6, 290.0], [20.7, 290.0], [20.8, 290.0], [20.9, 290.0], [21.0, 290.0], [21.1, 290.0], [21.2, 291.0], [21.3, 291.0], [21.4, 291.0], [21.5, 291.0], [21.6, 291.0], [21.7, 291.0], [21.8, 291.0], [21.9, 291.0], [22.0, 291.0], [22.1, 292.0], [22.2, 292.0], [22.3, 292.0], [22.4, 292.0], [22.5, 292.0], [22.6, 292.0], [22.7, 292.0], [22.8, 292.0], [22.9, 293.0], [23.0, 293.0], [23.1, 293.0], [23.2, 293.0], [23.3, 293.0], [23.4, 293.0], [23.5, 293.0], [23.6, 293.0], [23.7, 293.0], [23.8, 294.0], [23.9, 294.0], [24.0, 294.0], [24.1, 294.0], [24.2, 294.0], [24.3, 294.0], [24.4, 294.0], [24.5, 294.0], [24.6, 294.0], [24.7, 294.0], [24.8, 295.0], [24.9, 295.0], [25.0, 295.0], [25.1, 295.0], [25.2, 295.0], [25.3, 295.0], [25.4, 295.0], [25.5, 296.0], [25.6, 296.0], [25.7, 296.0], [25.8, 296.0], [25.9, 296.0], [26.0, 296.0], [26.1, 296.0], [26.2, 296.0], [26.3, 296.0], [26.4, 297.0], [26.5, 297.0], [26.6, 297.0], [26.7, 297.0], [26.8, 297.0], [26.9, 297.0], [27.0, 298.0], [27.1, 298.0], [27.2, 298.0], [27.3, 298.0], [27.4, 298.0], [27.5, 298.0], [27.6, 298.0], [27.7, 299.0], [27.8, 299.0], [27.9, 299.0], [28.0, 299.0], [28.1, 299.0], [28.2, 299.0], [28.3, 299.0], [28.4, 299.0], [28.5, 299.0], [28.6, 299.0], [28.7, 299.0], [28.8, 300.0], [28.9, 300.0], [29.0, 300.0], [29.1, 300.0], [29.2, 300.0], [29.3, 300.0], [29.4, 300.0], [29.5, 300.0], [29.6, 300.0], [29.7, 301.0], [29.8, 301.0], [29.9, 301.0], [30.0, 301.0], [30.1, 301.0], [30.2, 301.0], [30.3, 301.0], [30.4, 301.0], [30.5, 301.0], [30.6, 302.0], [30.7, 302.0], [30.8, 302.0], [30.9, 302.0], [31.0, 302.0], [31.1, 302.0], [31.2, 302.0], [31.3, 302.0], [31.4, 303.0], [31.5, 303.0], [31.6, 303.0], [31.7, 303.0], [31.8, 303.0], [31.9, 303.0], [32.0, 303.0], [32.1, 304.0], [32.2, 304.0], [32.3, 304.0], [32.4, 304.0], [32.5, 304.0], [32.6, 304.0], [32.7, 304.0], [32.8, 304.0], [32.9, 304.0], [33.0, 305.0], [33.1, 305.0], [33.2, 305.0], [33.3, 305.0], [33.4, 305.0], [33.5, 305.0], [33.6, 305.0], [33.7, 305.0], [33.8, 306.0], [33.9, 306.0], [34.0, 306.0], [34.1, 306.0], [34.2, 306.0], [34.3, 306.0], [34.4, 307.0], [34.5, 307.0], [34.6, 307.0], [34.7, 307.0], [34.8, 307.0], [34.9, 307.0], [35.0, 307.0], [35.1, 307.0], [35.2, 307.0], [35.3, 308.0], [35.4, 308.0], [35.5, 308.0], [35.6, 308.0], [35.7, 308.0], [35.8, 308.0], [35.9, 309.0], [36.0, 309.0], [36.1, 309.0], [36.2, 309.0], [36.3, 309.0], [36.4, 309.0], [36.5, 309.0], [36.6, 309.0], [36.7, 309.0], [36.8, 310.0], [36.9, 310.0], [37.0, 310.0], [37.1, 310.0], [37.2, 310.0], [37.3, 310.0], [37.4, 310.0], [37.5, 311.0], [37.6, 311.0], [37.7, 311.0], [37.8, 311.0], [37.9, 311.0], [38.0, 311.0], [38.1, 312.0], [38.2, 312.0], [38.3, 312.0], [38.4, 312.0], [38.5, 312.0], [38.6, 312.0], [38.7, 312.0], [38.8, 313.0], [38.9, 313.0], [39.0, 313.0], [39.1, 313.0], [39.2, 313.0], [39.3, 313.0], [39.4, 314.0], [39.5, 314.0], [39.6, 314.0], [39.7, 314.0], [39.8, 314.0], [39.9, 314.0], [40.0, 314.0], [40.1, 315.0], [40.2, 315.0], [40.3, 315.0], [40.4, 315.0], [40.5, 315.0], [40.6, 315.0], [40.7, 316.0], [40.8, 316.0], [40.9, 316.0], [41.0, 316.0], [41.1, 316.0], [41.2, 316.0], [41.3, 317.0], [41.4, 317.0], [41.5, 317.0], [41.6, 317.0], [41.7, 317.0], [41.8, 317.0], [41.9, 317.0], [42.0, 317.0], [42.1, 318.0], [42.2, 318.0], [42.3, 318.0], [42.4, 318.0], [42.5, 318.0], [42.6, 318.0], [42.7, 319.0], [42.8, 319.0], [42.9, 319.0], [43.0, 319.0], [43.1, 319.0], [43.2, 320.0], [43.3, 320.0], [43.4, 320.0], [43.5, 321.0], [43.6, 321.0], [43.7, 321.0], [43.8, 321.0], [43.9, 321.0], [44.0, 321.0], [44.1, 321.0], [44.2, 322.0], [44.3, 322.0], [44.4, 322.0], [44.5, 322.0], [44.6, 322.0], [44.7, 323.0], [44.8, 323.0], [44.9, 323.0], [45.0, 323.0], [45.1, 323.0], [45.2, 324.0], [45.3, 324.0], [45.4, 324.0], [45.5, 324.0], [45.6, 324.0], [45.7, 324.0], [45.8, 325.0], [45.9, 325.0], [46.0, 325.0], [46.1, 325.0], [46.2, 325.0], [46.3, 326.0], [46.4, 326.0], [46.5, 326.0], [46.6, 326.0], [46.7, 326.0], [46.8, 327.0], [46.9, 327.0], [47.0, 327.0], [47.1, 327.0], [47.2, 327.0], [47.3, 327.0], [47.4, 327.0], [47.5, 328.0], [47.6, 328.0], [47.7, 328.0], [47.8, 328.0], [47.9, 329.0], [48.0, 329.0], [48.1, 329.0], [48.2, 329.0], [48.3, 329.0], [48.4, 329.0], [48.5, 330.0], [48.6, 330.0], [48.7, 330.0], [48.8, 330.0], [48.9, 331.0], [49.0, 331.0], [49.1, 331.0], [49.2, 331.0], [49.3, 332.0], [49.4, 332.0], [49.5, 332.0], [49.6, 332.0], [49.7, 333.0], [49.8, 333.0], [49.9, 333.0], [50.0, 333.0], [50.1, 334.0], [50.2, 334.0], [50.3, 334.0], [50.4, 334.0], [50.5, 335.0], [50.6, 335.0], [50.7, 335.0], [50.8, 335.0], [50.9, 336.0], [51.0, 336.0], [51.1, 336.0], [51.2, 336.0], [51.3, 337.0], [51.4, 337.0], [51.5, 337.0], [51.6, 337.0], [51.7, 338.0], [51.8, 338.0], [51.9, 338.0], [52.0, 338.0], [52.1, 339.0], [52.2, 339.0], [52.3, 339.0], [52.4, 339.0], [52.5, 339.0], [52.6, 340.0], [52.7, 340.0], [52.8, 340.0], [52.9, 340.0], [53.0, 340.0], [53.1, 341.0], [53.2, 341.0], [53.3, 341.0], [53.4, 342.0], [53.5, 342.0], [53.6, 342.0], [53.7, 342.0], [53.8, 342.0], [53.9, 343.0], [54.0, 343.0], [54.1, 343.0], [54.2, 343.0], [54.3, 344.0], [54.4, 344.0], [54.5, 345.0], [54.6, 345.0], [54.7, 345.0], [54.8, 345.0], [54.9, 346.0], [55.0, 346.0], [55.1, 346.0], [55.2, 346.0], [55.3, 347.0], [55.4, 347.0], [55.5, 348.0], [55.6, 348.0], [55.7, 348.0], [55.8, 348.0], [55.9, 348.0], [56.0, 349.0], [56.1, 349.0], [56.2, 349.0], [56.3, 350.0], [56.4, 350.0], [56.5, 350.0], [56.6, 350.0], [56.7, 351.0], [56.8, 351.0], [56.9, 351.0], [57.0, 351.0], [57.1, 351.0], [57.2, 352.0], [57.3, 352.0], [57.4, 352.0], [57.5, 353.0], [57.6, 353.0], [57.7, 354.0], [57.8, 354.0], [57.9, 354.0], [58.0, 354.0], [58.1, 355.0], [58.2, 355.0], [58.3, 355.0], [58.4, 355.0], [58.5, 356.0], [58.6, 356.0], [58.7, 356.0], [58.8, 357.0], [58.9, 357.0], [59.0, 357.0], [59.1, 357.0], [59.2, 358.0], [59.3, 358.0], [59.4, 358.0], [59.5, 359.0], [59.6, 359.0], [59.7, 359.0], [59.8, 359.0], [59.9, 360.0], [60.0, 360.0], [60.1, 360.0], [60.2, 360.0], [60.3, 361.0], [60.4, 361.0], [60.5, 361.0], [60.6, 361.0], [60.7, 361.0], [60.8, 362.0], [60.9, 362.0], [61.0, 362.0], [61.1, 363.0], [61.2, 363.0], [61.3, 363.0], [61.4, 363.0], [61.5, 364.0], [61.6, 364.0], [61.7, 365.0], [61.8, 365.0], [61.9, 365.0], [62.0, 366.0], [62.1, 366.0], [62.2, 366.0], [62.3, 366.0], [62.4, 367.0], [62.5, 367.0], [62.6, 368.0], [62.7, 368.0], [62.8, 368.0], [62.9, 369.0], [63.0, 369.0], [63.1, 369.0], [63.2, 369.0], [63.3, 369.0], [63.4, 370.0], [63.5, 370.0], [63.6, 370.0], [63.7, 371.0], [63.8, 371.0], [63.9, 371.0], [64.0, 372.0], [64.1, 372.0], [64.2, 372.0], [64.3, 373.0], [64.4, 373.0], [64.5, 373.0], [64.6, 374.0], [64.7, 374.0], [64.8, 374.0], [64.9, 374.0], [65.0, 375.0], [65.1, 375.0], [65.2, 375.0], [65.3, 376.0], [65.4, 376.0], [65.5, 377.0], [65.6, 377.0], [65.7, 377.0], [65.8, 377.0], [65.9, 377.0], [66.0, 378.0], [66.1, 378.0], [66.2, 378.0], [66.3, 379.0], [66.4, 379.0], [66.5, 379.0], [66.6, 379.0], [66.7, 380.0], [66.8, 380.0], [66.9, 380.0], [67.0, 381.0], [67.1, 381.0], [67.2, 381.0], [67.3, 382.0], [67.4, 382.0], [67.5, 382.0], [67.6, 382.0], [67.7, 383.0], [67.8, 383.0], [67.9, 383.0], [68.0, 383.0], [68.1, 384.0], [68.2, 384.0], [68.3, 384.0], [68.4, 385.0], [68.5, 385.0], [68.6, 385.0], [68.7, 385.0], [68.8, 386.0], [68.9, 386.0], [69.0, 387.0], [69.1, 387.0], [69.2, 388.0], [69.3, 388.0], [69.4, 388.0], [69.5, 389.0], [69.6, 389.0], [69.7, 389.0], [69.8, 390.0], [69.9, 390.0], [70.0, 390.0], [70.1, 391.0], [70.2, 391.0], [70.3, 391.0], [70.4, 392.0], [70.5, 392.0], [70.6, 393.0], [70.7, 393.0], [70.8, 393.0], [70.9, 394.0], [71.0, 394.0], [71.1, 394.0], [71.2, 395.0], [71.3, 395.0], [71.4, 395.0], [71.5, 396.0], [71.6, 396.0], [71.7, 396.0], [71.8, 396.0], [71.9, 397.0], [72.0, 397.0], [72.1, 398.0], [72.2, 398.0], [72.3, 399.0], [72.4, 399.0], [72.5, 399.0], [72.6, 400.0], [72.7, 400.0], [72.8, 400.0], [72.9, 401.0], [73.0, 401.0], [73.1, 402.0], [73.2, 402.0], [73.3, 402.0], [73.4, 403.0], [73.5, 403.0], [73.6, 404.0], [73.7, 404.0], [73.8, 405.0], [73.9, 405.0], [74.0, 405.0], [74.1, 405.0], [74.2, 406.0], [74.3, 407.0], [74.4, 407.0], [74.5, 407.0], [74.6, 407.0], [74.7, 408.0], [74.8, 408.0], [74.9, 408.0], [75.0, 409.0], [75.1, 410.0], [75.2, 410.0], [75.3, 410.0], [75.4, 411.0], [75.5, 411.0], [75.6, 411.0], [75.7, 412.0], [75.8, 412.0], [75.9, 412.0], [76.0, 413.0], [76.1, 413.0], [76.2, 414.0], [76.3, 414.0], [76.4, 415.0], [76.5, 415.0], [76.6, 415.0], [76.7, 416.0], [76.8, 417.0], [76.9, 417.0], [77.0, 417.0], [77.1, 418.0], [77.2, 418.0], [77.3, 419.0], [77.4, 419.0], [77.5, 419.0], [77.6, 420.0], [77.7, 420.0], [77.8, 421.0], [77.9, 421.0], [78.0, 422.0], [78.1, 422.0], [78.2, 422.0], [78.3, 422.0], [78.4, 423.0], [78.5, 424.0], [78.6, 424.0], [78.7, 424.0], [78.8, 425.0], [78.9, 426.0], [79.0, 426.0], [79.1, 426.0], [79.2, 427.0], [79.3, 427.0], [79.4, 428.0], [79.5, 429.0], [79.6, 430.0], [79.7, 430.0], [79.8, 431.0], [79.9, 432.0], [80.0, 433.0], [80.1, 433.0], [80.2, 433.0], [80.3, 434.0], [80.4, 435.0], [80.5, 435.0], [80.6, 436.0], [80.7, 436.0], [80.8, 437.0], [80.9, 437.0], [81.0, 438.0], [81.1, 438.0], [81.2, 439.0], [81.3, 439.0], [81.4, 440.0], [81.5, 441.0], [81.6, 441.0], [81.7, 442.0], [81.8, 443.0], [81.9, 443.0], [82.0, 444.0], [82.1, 444.0], [82.2, 444.0], [82.3, 446.0], [82.4, 446.0], [82.5, 447.0], [82.6, 447.0], [82.7, 448.0], [82.8, 448.0], [82.9, 449.0], [83.0, 449.0], [83.1, 449.0], [83.2, 450.0], [83.3, 450.0], [83.4, 451.0], [83.5, 451.0], [83.6, 452.0], [83.7, 452.0], [83.8, 453.0], [83.9, 453.0], [84.0, 454.0], [84.1, 455.0], [84.2, 455.0], [84.3, 456.0], [84.4, 456.0], [84.5, 457.0], [84.6, 457.0], [84.7, 458.0], [84.8, 458.0], [84.9, 459.0], [85.0, 459.0], [85.1, 460.0], [85.2, 460.0], [85.3, 461.0], [85.4, 462.0], [85.5, 463.0], [85.6, 464.0], [85.7, 464.0], [85.8, 464.0], [85.9, 464.0], [86.0, 465.0], [86.1, 466.0], [86.2, 467.0], [86.3, 467.0], [86.4, 468.0], [86.5, 469.0], [86.6, 469.0], [86.7, 470.0], [86.8, 471.0], [86.9, 471.0], [87.0, 472.0], [87.1, 473.0], [87.2, 474.0], [87.3, 474.0], [87.4, 475.0], [87.5, 476.0], [87.6, 476.0], [87.7, 477.0], [87.8, 478.0], [87.9, 478.0], [88.0, 479.0], [88.1, 479.0], [88.2, 479.0], [88.3, 480.0], [88.4, 480.0], [88.5, 481.0], [88.6, 482.0], [88.7, 483.0], [88.8, 484.0], [88.9, 484.0], [89.0, 485.0], [89.1, 486.0], [89.2, 486.0], [89.3, 488.0], [89.4, 488.0], [89.5, 489.0], [89.6, 489.0], [89.7, 490.0], [89.8, 490.0], [89.9, 491.0], [90.0, 491.0], [90.1, 493.0], [90.2, 494.0], [90.3, 495.0], [90.4, 495.0], [90.5, 496.0], [90.6, 497.0], [90.7, 498.0], [90.8, 499.0], [90.9, 500.0], [91.0, 500.0], [91.1, 501.0], [91.2, 502.0], [91.3, 503.0], [91.4, 504.0], [91.5, 505.0], [91.6, 505.0], [91.7, 507.0], [91.8, 509.0], [91.9, 509.0], [92.0, 511.0], [92.1, 512.0], [92.2, 513.0], [92.3, 515.0], [92.4, 516.0], [92.5, 518.0], [92.6, 519.0], [92.7, 520.0], [92.8, 521.0], [92.9, 522.0], [93.0, 524.0], [93.1, 525.0], [93.2, 526.0], [93.3, 527.0], [93.4, 528.0], [93.5, 530.0], [93.6, 531.0], [93.7, 533.0], [93.8, 533.0], [93.9, 535.0], [94.0, 536.0], [94.1, 537.0], [94.2, 540.0], [94.3, 541.0], [94.4, 543.0], [94.5, 545.0], [94.6, 546.0], [94.7, 547.0], [94.8, 548.0], [94.9, 548.0], [95.0, 551.0], [95.1, 554.0], [95.2, 555.0], [95.3, 557.0], [95.4, 559.0], [95.5, 561.0], [95.6, 563.0], [95.7, 564.0], [95.8, 567.0], [95.9, 569.0], [96.0, 571.0], [96.1, 573.0], [96.2, 575.0], [96.3, 577.0], [96.4, 578.0], [96.5, 581.0], [96.6, 583.0], [96.7, 586.0], [96.8, 588.0], [96.9, 589.0], [97.0, 592.0], [97.1, 594.0], [97.2, 597.0], [97.3, 600.0], [97.4, 604.0], [97.5, 607.0], [97.6, 612.0], [97.7, 617.0], [97.8, 622.0], [97.9, 633.0], [98.0, 634.0], [98.1, 638.0], [98.2, 644.0], [98.3, 650.0], [98.4, 657.0], [98.5, 661.0], [98.6, 668.0], [98.7, 672.0], [98.8, 685.0], [98.9, 705.0], [99.0, 718.0], [99.1, 721.0], [99.2, 738.0], [99.3, 753.0], [99.4, 767.0], [99.5, 792.0], [99.6, 850.0], [99.7, 861.0], [99.8, 905.0], [99.9, 985.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 2804.0, "series": [{"data": [[1100.0, 2.0], [600.0, 102.0], [300.0, 2804.0], [700.0, 41.0], [200.0, 1646.0], [400.0, 1171.0], [800.0, 16.0], [100.0, 191.0], [900.0, 11.0], [500.0, 415.0], [1000.0, 1.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 575.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5825.0, "series": [{"data": [[0.0, 5825.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 575.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.5891876E12, "maxY": 4.0, "series": [{"data": [[1.5891876E12, 1.0], [1.58918778E12, 1.0], [1.58918796E12, 1.0], [1.58918766E12, 1.0], [1.58918784E12, 1.0], [1.58918772E12, 1.0], [1.5891879E12, 1.0]], "isOverall": false, "label": "1", "isController": false}, {"data": [[1.58918808E12, 2.0], [1.58918838E12, 2.0], [1.58918796E12, 1.9965034965034965], [1.58918814E12, 2.0], [1.58918832E12, 2.0], [1.58918802E12, 2.0], [1.58918844E12, 1.737654320987655], [1.5891882E12, 2.0], [1.58918826E12, 2.0]], "isOverall": false, "label": "2", "isController": false}, {"data": [[1.58918868E12, 3.273703041144903], [1.5891885E12, 3.98533724340176], [1.58918862E12, 4.0], [1.58918844E12, 1.0], [1.58918874E12, 2.514018691588785], [1.58918856E12, 4.0]], "isOverall": false, "label": "4", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58918874E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 301.70530098831983, "minX": 1.0, "maxY": 416.38882978723325, "series": [{"data": [[1.0, 301.70530098831983], [2.0, 353.24468814256255], [4.0, 416.38882978723325], [3.0, 324.838445807771]], "isOverall": false, "label": "extract", "isController": false}, {"data": [[2.4900000000000033, 360.6598437499995]], "isOverall": false, "label": "extract-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 4.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.5891876E12, "maxY": 847767.6833333333, "series": [{"data": [[1.58918808E12, 350193.6666666667], [1.58918778E12, 207654.91666666666], [1.5891885E12, 847767.6833333333], [1.58918814E12, 362587.7833333333], [1.58918862E12, 718024.7333333333], [1.58918802E12, 358374.86666666664], [1.58918772E12, 238977.16666666666], [1.58918826E12, 407556.4666666667], [1.58918856E12, 689389.95], [1.5891876E12, 16241.166666666666], [1.58918838E12, 445931.95], [1.58918868E12, 794117.55], [1.58918796E12, 341824.11666666664], [1.58918766E12, 228536.41666666666], [1.58918832E12, 428389.26666666666], [1.58918784E12, 232016.66666666666], [1.58918844E12, 391618.48333333334], [1.5891882E12, 393326.0], [1.58918874E12, 147304.65], [1.5891879E12, 229696.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.58918808E12, 0.0], [1.58918778E12, 0.0], [1.5891885E12, 0.0], [1.58918814E12, 0.0], [1.58918862E12, 0.0], [1.58918802E12, 0.0], [1.58918772E12, 0.0], [1.58918826E12, 0.0], [1.58918856E12, 0.0], [1.5891876E12, 0.0], [1.58918838E12, 0.0], [1.58918868E12, 0.0], [1.58918796E12, 0.0], [1.58918766E12, 0.0], [1.58918832E12, 0.0], [1.58918784E12, 0.0], [1.58918844E12, 0.0], [1.5891882E12, 0.0], [1.58918874E12, 0.0], [1.5891879E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58918874E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 290.90776699029124, "minX": 1.5891876E12, "maxY": 466.77087378640766, "series": [{"data": [[1.58918808E12, 400.30100334448156], [1.58918778E12, 334.08938547486014], [1.5891885E12, 348.77272727272765], [1.58918814E12, 378.0567823343847], [1.58918862E12, 446.5634328358204], [1.58918802E12, 392.6143790849672], [1.58918772E12, 290.90776699029124], [1.58918826E12, 323.66486486486474], [1.58918856E12, 466.77087378640766], [1.5891876E12, 296.78571428571433], [1.58918838E12, 322.1209677419355], [1.58918868E12, 352.47763864042923], [1.58918796E12, 402.35616438356175], [1.58918766E12, 303.46700507614213], [1.58918832E12, 325.6070460704605], [1.58918784E12, 300.71499999999975], [1.58918844E12, 299.92615384615385], [1.5891882E12, 337.4117647058823], [1.58918874E12, 328.3364485981308], [1.5891879E12, 302.07070707070704]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58918874E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 285.32524271844676, "minX": 1.5891876E12, "maxY": 460.14368932038815, "series": [{"data": [[1.58918808E12, 394.6989966555185], [1.58918778E12, 328.5418994413408], [1.5891885E12, 342.6612903225805], [1.58918814E12, 372.67823343848556], [1.58918862E12, 439.8638059701491], [1.58918802E12, 386.94444444444434], [1.58918772E12, 285.32524271844676], [1.58918826E12, 318.235135135135], [1.58918856E12, 460.14368932038815], [1.5891876E12, 290.4285714285714], [1.58918838E12, 316.34946236559125], [1.58918868E12, 345.23613595706604], [1.58918796E12, 396.70205479452034], [1.58918766E12, 297.98477157360435], [1.58918832E12, 319.94850948509446], [1.58918784E12, 295.15499999999986], [1.58918844E12, 293.60615384615386], [1.5891882E12, 332.1540616246498], [1.58918874E12, 321.47663551401894], [1.5891879E12, 296.7424242424243]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58918874E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.5891876E12, "maxY": 4.9E-324, "series": [{"data": [[1.58918808E12, 0.0], [1.58918778E12, 0.0], [1.5891885E12, 0.0], [1.58918814E12, 0.0], [1.58918862E12, 0.0], [1.58918802E12, 0.0], [1.58918772E12, 0.0], [1.58918826E12, 0.0], [1.58918856E12, 0.0], [1.5891876E12, 0.0], [1.58918838E12, 0.0], [1.58918868E12, 0.0], [1.58918796E12, 0.0], [1.58918766E12, 0.0], [1.58918832E12, 0.0], [1.58918784E12, 0.0], [1.58918844E12, 0.0], [1.5891882E12, 0.0], [1.58918874E12, 0.0], [1.5891879E12, 0.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58918874E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 101.0, "minX": 1.5891876E12, "maxY": 1176.0, "series": [{"data": [[1.58918808E12, 799.0], [1.58918778E12, 1176.0], [1.5891885E12, 922.0], [1.58918814E12, 917.0], [1.58918862E12, 895.0], [1.58918802E12, 779.0], [1.58918772E12, 525.0], [1.58918826E12, 563.0], [1.58918856E12, 1139.0], [1.5891876E12, 617.0], [1.58918838E12, 933.0], [1.58918868E12, 852.0], [1.58918796E12, 993.0], [1.58918766E12, 605.0], [1.58918832E12, 718.0], [1.58918784E12, 650.0], [1.58918844E12, 718.0], [1.5891882E12, 718.0], [1.58918874E12, 569.0], [1.5891879E12, 767.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.58918808E12, 284.0], [1.58918778E12, 262.0], [1.5891885E12, 101.0], [1.58918814E12, 265.0], [1.58918862E12, 295.0], [1.58918802E12, 280.0], [1.58918772E12, 241.0], [1.58918826E12, 260.0], [1.58918856E12, 279.0], [1.5891876E12, 242.0], [1.58918838E12, 256.0], [1.58918868E12, 244.0], [1.58918796E12, 279.0], [1.58918766E12, 244.0], [1.58918832E12, 261.0], [1.58918784E12, 267.0], [1.58918844E12, 108.0], [1.5891882E12, 256.0], [1.58918874E12, 234.0], [1.5891879E12, 249.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.58918808E12, 569.0], [1.58918778E12, 449.0], [1.5891885E12, 502.0], [1.58918814E12, 515.0], [1.58918862E12, 564.0], [1.58918802E12, 493.90000000000003], [1.58918772E12, 329.0], [1.58918826E12, 378.4000000000002], [1.58918856E12, 554.4000000000001], [1.5891876E12, 503.0], [1.58918838E12, 364.0], [1.58918868E12, 456.0], [1.58918796E12, 573.8999999999999], [1.58918766E12, 375.6], [1.58918832E12, 378.0], [1.58918784E12, 322.9], [1.58918844E12, 339.40000000000003], [1.5891882E12, 454.19999999999993], [1.58918874E12, 404.6], [1.5891879E12, 350.69999999999993]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.58918808E12, 758.0], [1.58918778E12, 829.5999999999951], [1.5891885E12, 850.8499999999998], [1.58918814E12, 840.9199999999993], [1.58918862E12, 750.78], [1.58918802E12, 712.86], [1.58918772E12, 518.0200000000001], [1.58918826E12, 534.9000000000002], [1.58918856E12, 776.6799999999994], [1.5891876E12, 617.0], [1.58918838E12, 546.6199999999999], [1.58918868E12, 648.1999999999998], [1.58918796E12, 985.3499999999999], [1.58918766E12, 579.5200000000002], [1.58918832E12, 557.5], [1.58918784E12, 639.5300000000013], [1.58918844E12, 596.96], [1.5891882E12, 625.460000000001], [1.58918874E12, 568.28], [1.5891879E12, 621.4699999999987]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.58918808E12, 607.0], [1.58918778E12, 505.0], [1.5891885E12, 578.85], [1.58918814E12, 574.4999999999998], [1.58918862E12, 606.0499999999998], [1.58918802E12, 587.9499999999999], [1.58918772E12, 357.89999999999986], [1.58918826E12, 424.74999999999983], [1.58918856E12, 593.0], [1.5891876E12, 617.0], [1.58918838E12, 410.0999999999998], [1.58918868E12, 525.0], [1.58918796E12, 698.9499999999973], [1.58918766E12, 427.19999999999993], [1.58918832E12, 419.0], [1.58918784E12, 361.79999999999995], [1.58918844E12, 436.49999999999994], [1.5891882E12, 500.2999999999999], [1.58918874E12, 501.5999999999997], [1.5891879E12, 461.49999999999983]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58918874E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 196.0, "minX": 1.0, "maxY": 411.0, "series": [{"data": [[2.0, 404.5], [8.0, 411.0], [9.0, 402.0], [10.0, 402.0], [11.0, 374.0], [3.0, 300.0], [12.0, 367.5], [13.0, 196.0], [14.0, 247.0], [15.0, 300.0], [4.0, 285.0], [1.0, 398.0], [16.0, 325.5], [17.0, 320.0], [5.0, 361.0], [6.0, 324.0], [7.0, 310.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 191.0, "minX": 1.0, "maxY": 404.0, "series": [{"data": [[2.0, 399.0], [8.0, 404.0], [9.0, 394.0], [10.0, 395.0], [11.0, 366.0], [3.0, 294.0], [12.0, 361.0], [13.0, 191.0], [14.0, 236.0], [15.0, 293.5], [4.0, 280.0], [1.0, 393.0], [16.0, 318.5], [17.0, 313.5], [5.0, 355.0], [6.0, 318.0], [7.0, 305.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 17.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.25, "minX": 1.5891876E12, "maxY": 11.416666666666666, "series": [{"data": [[1.58918808E12, 4.983333333333333], [1.58918778E12, 2.9833333333333334], [1.5891885E12, 11.416666666666666], [1.58918814E12, 5.283333333333333], [1.58918862E12, 8.933333333333334], [1.58918802E12, 5.1], [1.58918772E12, 3.433333333333333], [1.58918826E12, 6.166666666666667], [1.58918856E12, 8.583333333333334], [1.5891876E12, 0.25], [1.58918838E12, 6.2], [1.58918868E12, 9.3], [1.58918796E12, 4.883333333333334], [1.58918766E12, 3.283333333333333], [1.58918832E12, 6.15], [1.58918784E12, 3.3333333333333335], [1.58918844E12, 5.4], [1.5891882E12, 5.95], [1.58918874E12, 1.7333333333333334], [1.5891879E12, 3.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58918874E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.5891876E12, "maxY": 11.366666666666667, "series": [{"data": [[1.58918808E12, 4.983333333333333], [1.58918778E12, 2.9833333333333334], [1.5891885E12, 11.366666666666667], [1.58918814E12, 5.283333333333333], [1.58918862E12, 8.933333333333334], [1.58918802E12, 5.1], [1.58918772E12, 3.433333333333333], [1.58918826E12, 6.166666666666667], [1.58918856E12, 8.583333333333334], [1.5891876E12, 0.23333333333333334], [1.58918838E12, 6.2], [1.58918868E12, 9.316666666666666], [1.58918796E12, 4.866666666666666], [1.58918766E12, 3.283333333333333], [1.58918832E12, 6.15], [1.58918784E12, 3.3333333333333335], [1.58918844E12, 5.416666666666667], [1.5891882E12, 5.95], [1.58918874E12, 1.7833333333333334], [1.5891879E12, 3.3]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58918874E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.5891876E12, "maxY": 11.366666666666667, "series": [{"data": [[1.58918808E12, 4.983333333333333], [1.58918778E12, 2.9833333333333334], [1.5891885E12, 11.366666666666667], [1.58918814E12, 5.283333333333333], [1.58918862E12, 8.933333333333334], [1.58918802E12, 5.1], [1.58918772E12, 3.433333333333333], [1.58918826E12, 6.166666666666667], [1.58918856E12, 8.583333333333334], [1.5891876E12, 0.23333333333333334], [1.58918838E12, 6.2], [1.58918868E12, 9.316666666666666], [1.58918796E12, 4.866666666666666], [1.58918766E12, 3.283333333333333], [1.58918832E12, 6.15], [1.58918784E12, 3.3333333333333335], [1.58918844E12, 5.416666666666667], [1.5891882E12, 5.95], [1.58918874E12, 1.7833333333333334], [1.5891879E12, 3.3]], "isOverall": false, "label": "extract-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58918874E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.5891876E12, "maxY": 11.366666666666667, "series": [{"data": [[1.58918808E12, 4.983333333333333], [1.58918778E12, 2.9833333333333334], [1.5891885E12, 11.366666666666667], [1.58918814E12, 5.283333333333333], [1.58918862E12, 8.933333333333334], [1.58918802E12, 5.1], [1.58918772E12, 3.433333333333333], [1.58918826E12, 6.166666666666667], [1.58918856E12, 8.583333333333334], [1.5891876E12, 0.23333333333333334], [1.58918838E12, 6.2], [1.58918868E12, 9.316666666666666], [1.58918796E12, 4.866666666666666], [1.58918766E12, 3.283333333333333], [1.58918832E12, 6.15], [1.58918784E12, 3.3333333333333335], [1.58918844E12, 5.416666666666667], [1.5891882E12, 5.95], [1.58918874E12, 1.7833333333333334], [1.5891879E12, 3.3]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58918874E12, "title": "Total Transactions Per Second"}},
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

