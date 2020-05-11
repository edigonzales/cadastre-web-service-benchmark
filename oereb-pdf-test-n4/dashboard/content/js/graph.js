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
        data: {"result": {"minY": 3534.0, "minX": 0.0, "maxY": 12039.0, "series": [{"data": [[0.0, 3534.0], [0.1, 3579.0], [0.2, 3584.0], [0.3, 3735.0], [0.4, 3775.0], [0.5, 3802.0], [0.6, 3816.0], [0.7, 3821.0], [0.8, 3852.0], [0.9, 3877.0], [1.0, 3917.0], [1.1, 3924.0], [1.2, 3927.0], [1.3, 3938.0], [1.4, 3949.0], [1.5, 3970.0], [1.6, 3972.0], [1.7, 3982.0], [1.8, 3989.0], [1.9, 3999.0], [2.0, 4007.0], [2.1, 4019.0], [2.2, 4024.0], [2.3, 4029.0], [2.4, 4034.0], [2.5, 4043.0], [2.6, 4064.0], [2.7, 4068.0], [2.8, 4091.0], [2.9, 4097.0], [3.0, 4109.0], [3.1, 4122.0], [3.2, 4125.0], [3.3, 4160.0], [3.4, 4174.0], [3.5, 4193.0], [3.6, 4194.0], [3.7, 4214.0], [3.8, 4219.0], [3.9, 4226.0], [4.0, 4266.0], [4.1, 4271.0], [4.2, 4276.0], [4.3, 4291.0], [4.4, 4293.0], [4.5, 4301.0], [4.6, 4306.0], [4.7, 4314.0], [4.8, 4320.0], [4.9, 4326.0], [5.0, 4329.0], [5.1, 4347.0], [5.2, 4356.0], [5.3, 4364.0], [5.4, 4380.0], [5.5, 4397.0], [5.6, 4401.0], [5.7, 4403.0], [5.8, 4411.0], [5.9, 4413.0], [6.0, 4416.0], [6.1, 4421.0], [6.2, 4431.0], [6.3, 4458.0], [6.4, 4468.0], [6.5, 4477.0], [6.6, 4493.0], [6.7, 4494.0], [6.8, 4500.0], [6.9, 4502.0], [7.0, 4507.0], [7.1, 4533.0], [7.2, 4542.0], [7.3, 4553.0], [7.4, 4561.0], [7.5, 4579.0], [7.6, 4585.0], [7.7, 4590.0], [7.8, 4596.0], [7.9, 4600.0], [8.0, 4609.0], [8.1, 4622.0], [8.2, 4628.0], [8.3, 4660.0], [8.4, 4679.0], [8.5, 4683.0], [8.6, 4690.0], [8.7, 4696.0], [8.8, 4701.0], [8.9, 4703.0], [9.0, 4705.0], [9.1, 4711.0], [9.2, 4714.0], [9.3, 4719.0], [9.4, 4721.0], [9.5, 4725.0], [9.6, 4744.0], [9.7, 4752.0], [9.8, 4775.0], [9.9, 4787.0], [10.0, 4789.0], [10.1, 4792.0], [10.2, 4793.0], [10.3, 4795.0], [10.4, 4797.0], [10.5, 4802.0], [10.6, 4808.0], [10.7, 4811.0], [10.8, 4815.0], [10.9, 4817.0], [11.0, 4817.0], [11.1, 4822.0], [11.2, 4824.0], [11.3, 4839.0], [11.4, 4842.0], [11.5, 4859.0], [11.6, 4870.0], [11.7, 4885.0], [11.8, 4896.0], [11.9, 4898.0], [12.0, 4901.0], [12.1, 4904.0], [12.2, 4905.0], [12.3, 4908.0], [12.4, 4912.0], [12.5, 4915.0], [12.6, 4918.0], [12.7, 4920.0], [12.8, 4938.0], [12.9, 4940.0], [13.0, 4960.0], [13.1, 4970.0], [13.2, 4976.0], [13.3, 4980.0], [13.4, 4984.0], [13.5, 4987.0], [13.6, 4988.0], [13.7, 4990.0], [13.8, 4997.0], [13.9, 4998.0], [14.0, 5002.0], [14.1, 5003.0], [14.2, 5005.0], [14.3, 5005.0], [14.4, 5006.0], [14.5, 5009.0], [14.6, 5011.0], [14.7, 5012.0], [14.8, 5014.0], [14.9, 5016.0], [15.0, 5019.0], [15.1, 5021.0], [15.2, 5025.0], [15.3, 5031.0], [15.4, 5034.0], [15.5, 5052.0], [15.6, 5063.0], [15.7, 5069.0], [15.8, 5075.0], [15.9, 5079.0], [16.0, 5080.0], [16.1, 5081.0], [16.2, 5083.0], [16.3, 5084.0], [16.4, 5085.0], [16.5, 5090.0], [16.6, 5091.0], [16.7, 5093.0], [16.8, 5097.0], [16.9, 5101.0], [17.0, 5107.0], [17.1, 5108.0], [17.2, 5110.0], [17.3, 5111.0], [17.4, 5113.0], [17.5, 5115.0], [17.6, 5115.0], [17.7, 5119.0], [17.8, 5123.0], [17.9, 5127.0], [18.0, 5131.0], [18.1, 5132.0], [18.2, 5135.0], [18.3, 5143.0], [18.4, 5153.0], [18.5, 5160.0], [18.6, 5166.0], [18.7, 5173.0], [18.8, 5178.0], [18.9, 5183.0], [19.0, 5186.0], [19.1, 5190.0], [19.2, 5190.0], [19.3, 5191.0], [19.4, 5194.0], [19.5, 5195.0], [19.6, 5196.0], [19.7, 5196.0], [19.8, 5198.0], [19.9, 5199.0], [20.0, 5200.0], [20.1, 5203.0], [20.2, 5205.0], [20.3, 5206.0], [20.4, 5207.0], [20.5, 5208.0], [20.6, 5210.0], [20.7, 5212.0], [20.8, 5220.0], [20.9, 5221.0], [21.0, 5222.0], [21.1, 5224.0], [21.2, 5225.0], [21.3, 5226.0], [21.4, 5227.0], [21.5, 5229.0], [21.6, 5231.0], [21.7, 5234.0], [21.8, 5253.0], [21.9, 5259.0], [22.0, 5266.0], [22.1, 5273.0], [22.2, 5279.0], [22.3, 5282.0], [22.4, 5284.0], [22.5, 5287.0], [22.6, 5288.0], [22.7, 5291.0], [22.8, 5294.0], [22.9, 5295.0], [23.0, 5296.0], [23.1, 5297.0], [23.2, 5299.0], [23.3, 5302.0], [23.4, 5304.0], [23.5, 5304.0], [23.6, 5305.0], [23.7, 5307.0], [23.8, 5311.0], [23.9, 5312.0], [24.0, 5315.0], [24.1, 5322.0], [24.2, 5329.0], [24.3, 5340.0], [24.4, 5348.0], [24.5, 5351.0], [24.6, 5364.0], [24.7, 5375.0], [24.8, 5377.0], [24.9, 5378.0], [25.0, 5380.0], [25.1, 5380.0], [25.2, 5381.0], [25.3, 5385.0], [25.4, 5385.0], [25.5, 5388.0], [25.6, 5389.0], [25.7, 5390.0], [25.8, 5392.0], [25.9, 5393.0], [26.0, 5394.0], [26.1, 5395.0], [26.2, 5395.0], [26.3, 5396.0], [26.4, 5397.0], [26.5, 5400.0], [26.6, 5401.0], [26.7, 5402.0], [26.8, 5405.0], [26.9, 5407.0], [27.0, 5407.0], [27.1, 5409.0], [27.2, 5410.0], [27.3, 5411.0], [27.4, 5411.0], [27.5, 5412.0], [27.6, 5415.0], [27.7, 5416.0], [27.8, 5418.0], [27.9, 5418.0], [28.0, 5419.0], [28.1, 5419.0], [28.2, 5420.0], [28.3, 5424.0], [28.4, 5425.0], [28.5, 5429.0], [28.6, 5438.0], [28.7, 5445.0], [28.8, 5450.0], [28.9, 5456.0], [29.0, 5465.0], [29.1, 5466.0], [29.2, 5469.0], [29.3, 5471.0], [29.4, 5473.0], [29.5, 5475.0], [29.6, 5483.0], [29.7, 5484.0], [29.8, 5486.0], [29.9, 5488.0], [30.0, 5489.0], [30.1, 5491.0], [30.2, 5494.0], [30.3, 5497.0], [30.4, 5499.0], [30.5, 5499.0], [30.6, 5500.0], [30.7, 5501.0], [30.8, 5502.0], [30.9, 5502.0], [31.0, 5503.0], [31.1, 5505.0], [31.2, 5506.0], [31.3, 5507.0], [31.4, 5508.0], [31.5, 5512.0], [31.6, 5515.0], [31.7, 5516.0], [31.8, 5517.0], [31.9, 5518.0], [32.0, 5519.0], [32.1, 5522.0], [32.2, 5524.0], [32.3, 5526.0], [32.4, 5530.0], [32.5, 5532.0], [32.6, 5535.0], [32.7, 5539.0], [32.8, 5543.0], [32.9, 5546.0], [33.0, 5548.0], [33.1, 5556.0], [33.2, 5557.0], [33.3, 5567.0], [33.4, 5570.0], [33.5, 5570.0], [33.6, 5576.0], [33.7, 5577.0], [33.8, 5581.0], [33.9, 5581.0], [34.0, 5582.0], [34.1, 5583.0], [34.2, 5584.0], [34.3, 5589.0], [34.4, 5590.0], [34.5, 5593.0], [34.6, 5595.0], [34.7, 5597.0], [34.8, 5599.0], [34.9, 5599.0], [35.0, 5602.0], [35.1, 5603.0], [35.2, 5604.0], [35.3, 5604.0], [35.4, 5605.0], [35.5, 5607.0], [35.6, 5608.0], [35.7, 5608.0], [35.8, 5610.0], [35.9, 5610.0], [36.0, 5612.0], [36.1, 5613.0], [36.2, 5614.0], [36.3, 5617.0], [36.4, 5618.0], [36.5, 5619.0], [36.6, 5622.0], [36.7, 5625.0], [36.8, 5635.0], [36.9, 5639.0], [37.0, 5644.0], [37.1, 5647.0], [37.2, 5650.0], [37.3, 5656.0], [37.4, 5659.0], [37.5, 5661.0], [37.6, 5664.0], [37.7, 5667.0], [37.8, 5671.0], [37.9, 5672.0], [38.0, 5677.0], [38.1, 5678.0], [38.2, 5679.0], [38.3, 5680.0], [38.4, 5682.0], [38.5, 5685.0], [38.6, 5686.0], [38.7, 5688.0], [38.8, 5691.0], [38.9, 5692.0], [39.0, 5694.0], [39.1, 5696.0], [39.2, 5696.0], [39.3, 5698.0], [39.4, 5699.0], [39.5, 5703.0], [39.6, 5706.0], [39.7, 5707.0], [39.8, 5709.0], [39.9, 5710.0], [40.0, 5711.0], [40.1, 5711.0], [40.2, 5714.0], [40.3, 5716.0], [40.4, 5717.0], [40.5, 5718.0], [40.6, 5719.0], [40.7, 5727.0], [40.8, 5733.0], [40.9, 5734.0], [41.0, 5735.0], [41.1, 5736.0], [41.2, 5746.0], [41.3, 5751.0], [41.4, 5756.0], [41.5, 5765.0], [41.6, 5771.0], [41.7, 5771.0], [41.8, 5772.0], [41.9, 5773.0], [42.0, 5778.0], [42.1, 5780.0], [42.2, 5780.0], [42.3, 5782.0], [42.4, 5783.0], [42.5, 5785.0], [42.6, 5787.0], [42.7, 5787.0], [42.8, 5789.0], [42.9, 5791.0], [43.0, 5792.0], [43.1, 5793.0], [43.2, 5794.0], [43.3, 5797.0], [43.4, 5798.0], [43.5, 5800.0], [43.6, 5800.0], [43.7, 5804.0], [43.8, 5807.0], [43.9, 5808.0], [44.0, 5809.0], [44.1, 5810.0], [44.2, 5810.0], [44.3, 5813.0], [44.4, 5815.0], [44.5, 5817.0], [44.6, 5820.0], [44.7, 5820.0], [44.8, 5822.0], [44.9, 5825.0], [45.0, 5827.0], [45.1, 5827.0], [45.2, 5831.0], [45.3, 5833.0], [45.4, 5834.0], [45.5, 5837.0], [45.6, 5841.0], [45.7, 5846.0], [45.8, 5856.0], [45.9, 5858.0], [46.0, 5863.0], [46.1, 5864.0], [46.2, 5868.0], [46.3, 5872.0], [46.4, 5873.0], [46.5, 5876.0], [46.6, 5878.0], [46.7, 5878.0], [46.8, 5880.0], [46.9, 5880.0], [47.0, 5881.0], [47.1, 5881.0], [47.2, 5883.0], [47.3, 5885.0], [47.4, 5887.0], [47.5, 5888.0], [47.6, 5889.0], [47.7, 5889.0], [47.8, 5891.0], [47.9, 5892.0], [48.0, 5894.0], [48.1, 5896.0], [48.2, 5898.0], [48.3, 5900.0], [48.4, 5900.0], [48.5, 5901.0], [48.6, 5902.0], [48.7, 5903.0], [48.8, 5907.0], [48.9, 5907.0], [49.0, 5909.0], [49.1, 5910.0], [49.2, 5911.0], [49.3, 5913.0], [49.4, 5916.0], [49.5, 5917.0], [49.6, 5918.0], [49.7, 5919.0], [49.8, 5923.0], [49.9, 5924.0], [50.0, 5926.0], [50.1, 5927.0], [50.2, 5929.0], [50.3, 5929.0], [50.4, 5936.0], [50.5, 5944.0], [50.6, 5946.0], [50.7, 5946.0], [50.8, 5949.0], [50.9, 5953.0], [51.0, 5956.0], [51.1, 5960.0], [51.2, 5961.0], [51.3, 5966.0], [51.4, 5969.0], [51.5, 5972.0], [51.6, 5973.0], [51.7, 5974.0], [51.8, 5978.0], [51.9, 5980.0], [52.0, 5980.0], [52.1, 5981.0], [52.2, 5983.0], [52.3, 5985.0], [52.4, 5985.0], [52.5, 5987.0], [52.6, 5989.0], [52.7, 5990.0], [52.8, 5991.0], [52.9, 5992.0], [53.0, 5992.0], [53.1, 5993.0], [53.2, 5994.0], [53.3, 5995.0], [53.4, 5995.0], [53.5, 5997.0], [53.6, 5998.0], [53.7, 5998.0], [53.8, 6000.0], [53.9, 6000.0], [54.0, 6002.0], [54.1, 6003.0], [54.2, 6004.0], [54.3, 6005.0], [54.4, 6006.0], [54.5, 6009.0], [54.6, 6013.0], [54.7, 6014.0], [54.8, 6016.0], [54.9, 6017.0], [55.0, 6018.0], [55.1, 6019.0], [55.2, 6022.0], [55.3, 6025.0], [55.4, 6026.0], [55.5, 6028.0], [55.6, 6033.0], [55.7, 6046.0], [55.8, 6057.0], [55.9, 6062.0], [56.0, 6064.0], [56.1, 6069.0], [56.2, 6070.0], [56.3, 6078.0], [56.4, 6079.0], [56.5, 6081.0], [56.6, 6083.0], [56.7, 6085.0], [56.8, 6087.0], [56.9, 6089.0], [57.0, 6090.0], [57.1, 6090.0], [57.2, 6091.0], [57.3, 6092.0], [57.4, 6094.0], [57.5, 6094.0], [57.6, 6095.0], [57.7, 6096.0], [57.8, 6097.0], [57.9, 6097.0], [58.0, 6099.0], [58.1, 6100.0], [58.2, 6101.0], [58.3, 6101.0], [58.4, 6102.0], [58.5, 6103.0], [58.6, 6106.0], [58.7, 6106.0], [58.8, 6107.0], [58.9, 6109.0], [59.0, 6109.0], [59.1, 6110.0], [59.2, 6111.0], [59.3, 6114.0], [59.4, 6114.0], [59.5, 6116.0], [59.6, 6117.0], [59.7, 6118.0], [59.8, 6119.0], [59.9, 6121.0], [60.0, 6124.0], [60.1, 6124.0], [60.2, 6125.0], [60.3, 6130.0], [60.4, 6137.0], [60.5, 6142.0], [60.6, 6146.0], [60.7, 6155.0], [60.8, 6161.0], [60.9, 6164.0], [61.0, 6167.0], [61.1, 6170.0], [61.2, 6173.0], [61.3, 6175.0], [61.4, 6177.0], [61.5, 6180.0], [61.6, 6181.0], [61.7, 6185.0], [61.8, 6187.0], [61.9, 6187.0], [62.0, 6190.0], [62.1, 6191.0], [62.2, 6193.0], [62.3, 6196.0], [62.4, 6196.0], [62.5, 6198.0], [62.6, 6199.0], [62.7, 6200.0], [62.8, 6201.0], [62.9, 6201.0], [63.0, 6202.0], [63.1, 6203.0], [63.2, 6204.0], [63.3, 6205.0], [63.4, 6205.0], [63.5, 6210.0], [63.6, 6211.0], [63.7, 6213.0], [63.8, 6214.0], [63.9, 6215.0], [64.0, 6219.0], [64.1, 6220.0], [64.2, 6224.0], [64.3, 6226.0], [64.4, 6227.0], [64.5, 6231.0], [64.6, 6238.0], [64.7, 6241.0], [64.8, 6243.0], [64.9, 6249.0], [65.0, 6253.0], [65.1, 6257.0], [65.2, 6260.0], [65.3, 6261.0], [65.4, 6261.0], [65.5, 6264.0], [65.6, 6270.0], [65.7, 6272.0], [65.8, 6275.0], [65.9, 6276.0], [66.0, 6277.0], [66.1, 6280.0], [66.2, 6285.0], [66.3, 6287.0], [66.4, 6287.0], [66.5, 6290.0], [66.6, 6292.0], [66.7, 6293.0], [66.8, 6293.0], [66.9, 6294.0], [67.0, 6295.0], [67.1, 6295.0], [67.2, 6296.0], [67.3, 6299.0], [67.4, 6300.0], [67.5, 6300.0], [67.6, 6301.0], [67.7, 6302.0], [67.8, 6303.0], [67.9, 6306.0], [68.0, 6307.0], [68.1, 6309.0], [68.2, 6310.0], [68.3, 6310.0], [68.4, 6311.0], [68.5, 6313.0], [68.6, 6314.0], [68.7, 6316.0], [68.8, 6321.0], [68.9, 6323.0], [69.0, 6323.0], [69.1, 6325.0], [69.2, 6344.0], [69.3, 6354.0], [69.4, 6356.0], [69.5, 6360.0], [69.6, 6362.0], [69.7, 6369.0], [69.8, 6373.0], [69.9, 6373.0], [70.0, 6377.0], [70.1, 6378.0], [70.2, 6387.0], [70.3, 6388.0], [70.4, 6390.0], [70.5, 6393.0], [70.6, 6396.0], [70.7, 6397.0], [70.8, 6398.0], [70.9, 6398.0], [71.0, 6400.0], [71.1, 6401.0], [71.2, 6403.0], [71.3, 6404.0], [71.4, 6405.0], [71.5, 6405.0], [71.6, 6406.0], [71.7, 6406.0], [71.8, 6408.0], [71.9, 6409.0], [72.0, 6410.0], [72.1, 6411.0], [72.2, 6412.0], [72.3, 6422.0], [72.4, 6423.0], [72.5, 6426.0], [72.6, 6435.0], [72.7, 6436.0], [72.8, 6439.0], [72.9, 6444.0], [73.0, 6454.0], [73.1, 6468.0], [73.2, 6471.0], [73.3, 6474.0], [73.4, 6475.0], [73.5, 6479.0], [73.6, 6483.0], [73.7, 6484.0], [73.8, 6484.0], [73.9, 6485.0], [74.0, 6486.0], [74.1, 6486.0], [74.2, 6487.0], [74.3, 6490.0], [74.4, 6491.0], [74.5, 6493.0], [74.6, 6494.0], [74.7, 6496.0], [74.8, 6498.0], [74.9, 6499.0], [75.0, 6500.0], [75.1, 6502.0], [75.2, 6503.0], [75.3, 6505.0], [75.4, 6506.0], [75.5, 6508.0], [75.6, 6509.0], [75.7, 6509.0], [75.8, 6512.0], [75.9, 6513.0], [76.0, 6516.0], [76.1, 6521.0], [76.2, 6524.0], [76.3, 6527.0], [76.4, 6529.0], [76.5, 6533.0], [76.6, 6533.0], [76.7, 6535.0], [76.8, 6550.0], [76.9, 6552.0], [77.0, 6554.0], [77.1, 6561.0], [77.2, 6564.0], [77.3, 6566.0], [77.4, 6570.0], [77.5, 6575.0], [77.6, 6576.0], [77.7, 6578.0], [77.8, 6582.0], [77.9, 6586.0], [78.0, 6587.0], [78.1, 6588.0], [78.2, 6589.0], [78.3, 6591.0], [78.4, 6591.0], [78.5, 6594.0], [78.6, 6595.0], [78.7, 6596.0], [78.8, 6597.0], [78.9, 6598.0], [79.0, 6603.0], [79.1, 6608.0], [79.2, 6610.0], [79.3, 6614.0], [79.4, 6617.0], [79.5, 6625.0], [79.6, 6626.0], [79.7, 6632.0], [79.8, 6645.0], [79.9, 6653.0], [80.0, 6654.0], [80.1, 6658.0], [80.2, 6663.0], [80.3, 6674.0], [80.4, 6675.0], [80.5, 6683.0], [80.6, 6685.0], [80.7, 6691.0], [80.8, 6693.0], [80.9, 6693.0], [81.0, 6695.0], [81.1, 6699.0], [81.2, 6699.0], [81.3, 6704.0], [81.4, 6706.0], [81.5, 6707.0], [81.6, 6709.0], [81.7, 6711.0], [81.8, 6712.0], [81.9, 6714.0], [82.0, 6716.0], [82.1, 6720.0], [82.2, 6722.0], [82.3, 6730.0], [82.4, 6731.0], [82.5, 6733.0], [82.6, 6740.0], [82.7, 6744.0], [82.8, 6757.0], [82.9, 6762.0], [83.0, 6765.0], [83.1, 6770.0], [83.2, 6776.0], [83.3, 6778.0], [83.4, 6781.0], [83.5, 6784.0], [83.6, 6788.0], [83.7, 6790.0], [83.8, 6792.0], [83.9, 6794.0], [84.0, 6795.0], [84.1, 6797.0], [84.2, 6801.0], [84.3, 6807.0], [84.4, 6811.0], [84.5, 6813.0], [84.6, 6820.0], [84.7, 6822.0], [84.8, 6823.0], [84.9, 6825.0], [85.0, 6829.0], [85.1, 6831.0], [85.2, 6835.0], [85.3, 6848.0], [85.4, 6851.0], [85.5, 6861.0], [85.6, 6866.0], [85.7, 6867.0], [85.8, 6878.0], [85.9, 6878.0], [86.0, 6883.0], [86.1, 6886.0], [86.2, 6896.0], [86.3, 6897.0], [86.4, 6898.0], [86.5, 6899.0], [86.6, 6901.0], [86.7, 6906.0], [86.8, 6909.0], [86.9, 6915.0], [87.0, 6918.0], [87.1, 6921.0], [87.2, 6924.0], [87.3, 6926.0], [87.4, 6934.0], [87.5, 6945.0], [87.6, 6956.0], [87.7, 6962.0], [87.8, 6974.0], [87.9, 6976.0], [88.0, 6978.0], [88.1, 6983.0], [88.2, 6983.0], [88.3, 6986.0], [88.4, 6989.0], [88.5, 6992.0], [88.6, 6998.0], [88.7, 7001.0], [88.8, 7008.0], [88.9, 7008.0], [89.0, 7012.0], [89.1, 7023.0], [89.2, 7024.0], [89.3, 7039.0], [89.4, 7049.0], [89.5, 7054.0], [89.6, 7066.0], [89.7, 7067.0], [89.8, 7076.0], [89.9, 7078.0], [90.0, 7081.0], [90.1, 7084.0], [90.2, 7088.0], [90.3, 7090.0], [90.4, 7094.0], [90.5, 7097.0], [90.6, 7101.0], [90.7, 7114.0], [90.8, 7124.0], [90.9, 7133.0], [91.0, 7143.0], [91.1, 7155.0], [91.2, 7160.0], [91.3, 7168.0], [91.4, 7172.0], [91.5, 7180.0], [91.6, 7185.0], [91.7, 7189.0], [91.8, 7192.0], [91.9, 7194.0], [92.0, 7199.0], [92.1, 7206.0], [92.2, 7209.0], [92.3, 7212.0], [92.4, 7215.0], [92.5, 7220.0], [92.6, 7236.0], [92.7, 7240.0], [92.8, 7243.0], [92.9, 7247.0], [93.0, 7264.0], [93.1, 7281.0], [93.2, 7283.0], [93.3, 7290.0], [93.4, 7293.0], [93.5, 7299.0], [93.6, 7305.0], [93.7, 7305.0], [93.8, 7312.0], [93.9, 7322.0], [94.0, 7327.0], [94.1, 7335.0], [94.2, 7342.0], [94.3, 7356.0], [94.4, 7364.0], [94.5, 7386.0], [94.6, 7396.0], [94.7, 7398.0], [94.8, 7404.0], [94.9, 7408.0], [95.0, 7420.0], [95.1, 7440.0], [95.2, 7444.0], [95.3, 7480.0], [95.4, 7495.0], [95.5, 7499.0], [95.6, 7506.0], [95.7, 7507.0], [95.8, 7515.0], [95.9, 7521.0], [96.0, 7550.0], [96.1, 7594.0], [96.2, 7601.0], [96.3, 7629.0], [96.4, 7642.0], [96.5, 7644.0], [96.6, 7656.0], [96.7, 7676.0], [96.8, 7694.0], [96.9, 7698.0], [97.0, 7725.0], [97.1, 7776.0], [97.2, 7790.0], [97.3, 7811.0], [97.4, 7839.0], [97.5, 7855.0], [97.6, 7881.0], [97.7, 7923.0], [97.8, 7947.0], [97.9, 7972.0], [98.0, 8012.0], [98.1, 8076.0], [98.2, 8107.0], [98.3, 8130.0], [98.4, 8146.0], [98.5, 8157.0], [98.6, 8187.0], [98.7, 8204.0], [98.8, 8277.0], [98.9, 8288.0], [99.0, 8319.0], [99.1, 8370.0], [99.2, 8408.0], [99.3, 8484.0], [99.4, 8578.0], [99.5, 8603.0], [99.6, 8890.0], [99.7, 9110.0], [99.8, 10123.0], [99.9, 10319.0], [100.0, 12039.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 3500.0, "maxY": 132.0, "series": [{"data": [[3500.0, 5.0], [3700.0, 6.0], [3600.0, 1.0], [3800.0, 11.0], [3900.0, 23.0], [4000.0, 24.0], [4100.0, 17.0], [4300.0, 25.0], [4200.0, 21.0], [4400.0, 30.0], [4500.0, 26.0], [4600.0, 22.0], [4700.0, 40.0], [4800.0, 36.0], [5000.0, 71.0], [4900.0, 47.0], [5100.0, 74.0], [5300.0, 76.0], [5200.0, 80.0], [5600.0, 108.0], [5500.0, 104.0], [5400.0, 99.0], [5800.0, 116.0], [5700.0, 97.0], [6100.0, 109.0], [6000.0, 103.0], [5900.0, 132.0], [6300.0, 88.0], [6200.0, 113.0], [6400.0, 96.0], [6600.0, 54.0], [6500.0, 95.0], [6700.0, 71.0], [6900.0, 52.0], [6800.0, 56.0], [7100.0, 35.0], [7000.0, 45.0], [7300.0, 29.0], [7400.0, 19.0], [7200.0, 36.0], [7600.0, 19.0], [7500.0, 15.0], [7800.0, 9.0], [7900.0, 8.0], [7700.0, 8.0], [8100.0, 12.0], [8000.0, 5.0], [8300.0, 6.0], [8700.0, 2.0], [8200.0, 6.0], [8500.0, 3.0], [8600.0, 1.0], [8400.0, 4.0], [9100.0, 2.0], [8800.0, 2.0], [9200.0, 1.0], [10100.0, 1.0], [10300.0, 2.0], [11200.0, 1.0], [12000.0, 1.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2400.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2400.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2400.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.5891903E12, "maxY": 4.0, "series": [{"data": [[1.5891936E12, 4.0], [1.58919078E12, 4.0], [1.58919138E12, 4.0], [1.589193E12, 4.0], [1.5891918E12, 4.0], [1.5891924E12, 4.0], [1.58919342E12, 4.0], [1.5891906E12, 4.0], [1.58919282E12, 4.0], [1.58919222E12, 4.0], [1.5891912E12, 4.0], [1.58919384E12, 2.4193548387096775], [1.58919102E12, 4.0], [1.58919162E12, 4.0], [1.58919324E12, 4.0], [1.58919204E12, 4.0], [1.58919264E12, 4.0], [1.58919366E12, 4.0], [1.58919042E12, 4.0], [1.58919084E12, 4.0], [1.58919306E12, 4.0], [1.58919144E12, 4.0], [1.58919246E12, 4.0], [1.58919126E12, 4.0], [1.58919186E12, 4.0], [1.58919348E12, 4.0], [1.58919228E12, 4.0], [1.58919288E12, 4.0], [1.5891939E12, 1.235294117647059], [1.58919066E12, 4.0], [1.58919108E12, 4.0], [1.5891933E12, 4.0], [1.58919168E12, 4.0], [1.5891927E12, 4.0], [1.5891915E12, 4.0], [1.58919048E12, 4.0], [1.5891921E12, 4.0], [1.58919372E12, 4.0], [1.5891903E12, 4.0], [1.58919312E12, 4.0], [1.5891909E12, 4.0], [1.58919252E12, 4.0], [1.58919354E12, 4.0], [1.58919132E12, 4.0], [1.58919192E12, 4.0], [1.58919294E12, 4.0], [1.58919174E12, 4.0], [1.58919072E12, 4.0], [1.58919234E12, 4.0], [1.58919396E12, 1.0], [1.58919054E12, 4.0], [1.58919336E12, 4.0], [1.58919114E12, 4.0], [1.58919276E12, 4.0], [1.58919156E12, 4.0], [1.58919378E12, 4.0], [1.58919216E12, 4.0], [1.58919318E12, 4.0], [1.58919036E12, 4.0], [1.58919258E12, 4.0], [1.58919198E12, 4.0], [1.58919096E12, 4.0]], "isOverall": false, "label": "4", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58919396E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4022.9047619047615, "minX": 1.0, "maxY": 5975.302978723409, "series": [{"data": [[4.0, 5975.302978723409], [2.0, 4280.142857142857], [1.0, 4022.9047619047615], [3.0, 5822.0]], "isOverall": false, "label": "extract", "isController": false}, {"data": [[3.9499999999999997, 5938.378750000004]], "isOverall": false, "label": "extract-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 4.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 0.0, "minX": 1.5891903E12, "maxY": 550874.1, "series": [{"data": [[1.5891936E12, 479031.88333333336], [1.58919078E12, 487947.7], [1.58919138E12, 465658.4166666667], [1.589193E12, 528127.7166666667], [1.5891918E12, 483647.65], [1.5891924E12, 462199.65], [1.58919342E12, 527077.4], [1.5891906E12, 424249.76666666666], [1.58919282E12, 528309.8333333334], [1.58919222E12, 483658.85], [1.5891912E12, 446861.7166666667], [1.58919384E12, 384366.15], [1.58919102E12, 435860.65], [1.58919162E12, 449191.8], [1.58919324E12, 517313.93333333335], [1.58919204E12, 472799.36666666664], [1.58919264E12, 441433.43333333335], [1.58919366E12, 464259.76666666666], [1.58919042E12, 473055.9166666667], [1.58919084E12, 446861.9666666667], [1.58919306E12, 527064.3333333334], [1.58919144E12, 450163.76666666666], [1.58919246E12, 472800.38333333336], [1.58919126E12, 412648.2833333333], [1.58919186E12, 472800.98333333334], [1.58919348E12, 501780.61666666664], [1.58919228E12, 406446.55], [1.58919288E12, 502025.5], [1.5891939E12, 218819.9], [1.58919066E12, 476937.61666666664], [1.58919108E12, 498957.51666666666], [1.5891933E12, 513712.81666666665], [1.58919168E12, 414520.0833333333], [1.5891927E12, 466695.11666666664], [1.5891915E12, 509822.6666666667], [1.58919048E12, 499550.0], [1.5891921E12, 451600.18333333335], [1.58919372E12, 479029.86666666664], [1.5891903E12, 157986.38333333333], [1.58919312E12, 512589.45], [1.5891909E12, 462034.2166666667], [1.58919252E12, 473046.9666666667], [1.58919354E12, 501778.0333333333], [1.58919132E12, 446861.48333333334], [1.58919192E12, 486165.73333333334], [1.58919294E12, 503962.6], [1.58919174E12, 425359.38333333336], [1.58919072E12, 498956.5833333333], [1.58919234E12, 470526.26666666666], [1.58919396E12, 103974.31666666667], [1.58919054E12, 498957.86666666664], [1.58919336E12, 514775.18333333335], [1.58919114E12, 465656.45], [1.58919276E12, 492201.38333333336], [1.58919156E12, 467701.76666666666], [1.58919378E12, 550874.1], [1.58919216E12, 496766.9166666667], [1.58919318E12, 526708.3666666667], [1.58919036E12, 450433.0333333333], [1.58919258E12, 462200.55], [1.58919198E12, 494492.2833333333], [1.58919096E12, 469152.0833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5891936E12, 0.0], [1.58919078E12, 0.0], [1.58919138E12, 0.0], [1.589193E12, 0.0], [1.5891918E12, 0.0], [1.5891924E12, 0.0], [1.58919342E12, 0.0], [1.5891906E12, 0.0], [1.58919282E12, 0.0], [1.58919222E12, 0.0], [1.5891912E12, 0.0], [1.58919384E12, 0.0], [1.58919102E12, 0.0], [1.58919162E12, 0.0], [1.58919324E12, 0.0], [1.58919204E12, 0.0], [1.58919264E12, 0.0], [1.58919366E12, 0.0], [1.58919042E12, 0.0], [1.58919084E12, 0.0], [1.58919306E12, 0.0], [1.58919144E12, 0.0], [1.58919246E12, 0.0], [1.58919126E12, 0.0], [1.58919186E12, 0.0], [1.58919348E12, 0.0], [1.58919228E12, 0.0], [1.58919288E12, 0.0], [1.5891939E12, 0.0], [1.58919066E12, 0.0], [1.58919108E12, 0.0], [1.5891933E12, 0.0], [1.58919168E12, 0.0], [1.5891927E12, 0.0], [1.5891915E12, 0.0], [1.58919048E12, 0.0], [1.5891921E12, 0.0], [1.58919372E12, 0.0], [1.5891903E12, 0.0], [1.58919312E12, 0.0], [1.5891909E12, 0.0], [1.58919252E12, 0.0], [1.58919354E12, 0.0], [1.58919132E12, 0.0], [1.58919192E12, 0.0], [1.58919294E12, 0.0], [1.58919174E12, 0.0], [1.58919072E12, 0.0], [1.58919234E12, 0.0], [1.58919396E12, 0.0], [1.58919054E12, 0.0], [1.58919336E12, 0.0], [1.58919114E12, 0.0], [1.58919276E12, 0.0], [1.58919156E12, 0.0], [1.58919378E12, 0.0], [1.58919216E12, 0.0], [1.58919318E12, 0.0], [1.58919036E12, 0.0], [1.58919258E12, 0.0], [1.58919198E12, 0.0], [1.58919096E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58919396E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3989.0588235294113, "minX": 1.5891903E12, "maxY": 7126.2941176470595, "series": [{"data": [[1.5891936E12, 6198.846153846152], [1.58919078E12, 5948.65], [1.58919138E12, 6650.210526315789], [1.589193E12, 5593.930232558139], [1.5891918E12, 5654.000000000002], [1.5891924E12, 5725.000000000001], [1.58919342E12, 5614.906976744188], [1.5891906E12, 6263.571428571429], [1.58919282E12, 5625.744186046513], [1.58919222E12, 5724.697674418606], [1.5891912E12, 6284.864864864866], [1.58919384E12, 4649.67741935484], [1.58919102E12, 6672.305555555555], [1.58919162E12, 6138.333333333333], [1.58919324E12, 5643.02380952381], [1.58919204E12, 5746.666666666668], [1.58919264E12, 6226.07894736842], [1.58919366E12, 6222.131578947367], [1.58919042E12, 5994.205128205128], [1.58919084E12, 6456.486486486485], [1.58919306E12, 5622.604651162792], [1.58919144E12, 6114.10810810811], [1.58919246E12, 5802.380952380954], [1.58919126E12, 7126.2941176470595], [1.58919186E12, 5686.833333333334], [1.58919348E12, 5962.682926829268], [1.58919228E12, 6308.555555555557], [1.58919288E12, 5807.951219512195], [1.5891939E12, 3989.0588235294113], [1.58919066E12, 6626.615384615385], [1.58919108E12, 5869.29268292683], [1.5891933E12, 5722.428571428572], [1.58919168E12, 6321.891891891892], [1.5891927E12, 6265.461538461537], [1.5891915E12, 6029.428571428572], [1.58919048E12, 5884.58536585366], [1.5891921E12, 5645.074999999999], [1.58919372E12, 5998.333333333332], [1.5891903E12, 6715.538461538461], [1.58919312E12, 5650.380952380954], [1.5891909E12, 6338.421052631579], [1.58919252E12, 5779.785714285715], [1.58919354E12, 5857.073170731706], [1.58919132E12, 6254.7027027027025], [1.58919192E12, 5574.441860465116], [1.58919294E12, 5819.780487804877], [1.58919174E12, 6430.210526315789], [1.58919072E12, 5983.853658536585], [1.58919234E12, 6060.119047619048], [1.58919396E12, 4065.6249999999995], [1.58919054E12, 5875.707317073172], [1.58919336E12, 5670.976190476191], [1.58919114E12, 6397.342105263158], [1.58919276E12, 5844.425], [1.58919156E12, 5891.449999999998], [1.58919378E12, 5535.177777777778], [1.58919216E12, 5509.113636363636], [1.58919318E12, 5711.279069767442], [1.58919036E12, 6503.027027027027], [1.58919258E12, 5811.463414634144], [1.58919198E12, 5629.81818181818], [1.58919096E12, 6149.6410256410245]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58919396E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3924.4117647058824, "minX": 1.5891903E12, "maxY": 7051.20588235294, "series": [{"data": [[1.5891936E12, 6135.256410256411], [1.58919078E12, 5886.499999999999], [1.58919138E12, 6585.815789473683], [1.589193E12, 5524.418604651161], [1.5891918E12, 5597.4186046511595], [1.5891924E12, 5666.536585365853], [1.58919342E12, 5551.790697674418], [1.5891906E12, 6198.657142857142], [1.58919282E12, 5561.906976744184], [1.58919222E12, 5664.325581395348], [1.5891912E12, 6222.783783783784], [1.58919384E12, 4587.193548387097], [1.58919102E12, 6601.444444444444], [1.58919162E12, 6078.179487179487], [1.58919324E12, 5574.92857142857], [1.58919204E12, 5684.690476190477], [1.58919264E12, 6166.078947368421], [1.58919366E12, 6156.000000000001], [1.58919042E12, 5927.897435897435], [1.58919084E12, 6383.0], [1.58919306E12, 5558.8372093023245], [1.58919144E12, 6049.621621621622], [1.58919246E12, 5742.619047619048], [1.58919126E12, 7051.20588235294], [1.58919186E12, 5627.857142857143], [1.58919348E12, 5900.243902439026], [1.58919228E12, 6248.361111111111], [1.58919288E12, 5743.5609756097565], [1.5891939E12, 3924.4117647058824], [1.58919066E12, 6559.923076923076], [1.58919108E12, 5807.292682926828], [1.5891933E12, 5660.238095238093], [1.58919168E12, 6261.405405405404], [1.5891927E12, 6202.307692307692], [1.5891915E12, 5967.4047619047615], [1.58919048E12, 5821.87804878049], [1.5891921E12, 5588.225000000001], [1.58919372E12, 5934.102564102564], [1.5891903E12, 6654.461538461537], [1.58919312E12, 5585.738095238094], [1.5891909E12, 6274.184210526316], [1.58919252E12, 5722.833333333334], [1.58919354E12, 5791.4390243902435], [1.58919132E12, 6193.675675675677], [1.58919192E12, 5508.767441860465], [1.58919294E12, 5751.804878048781], [1.58919174E12, 6370.026315789473], [1.58919072E12, 5920.78048780488], [1.58919234E12, 5998.714285714285], [1.58919396E12, 4000.0], [1.58919054E12, 5812.707317073172], [1.58919336E12, 5608.857142857144], [1.58919114E12, 6335.421052631581], [1.58919276E12, 5778.2], [1.58919156E12, 5826.324999999999], [1.58919378E12, 5472.0], [1.58919216E12, 5452.045454545454], [1.58919318E12, 5648.604651162793], [1.58919036E12, 6435.945945945947], [1.58919258E12, 5754.512195121951], [1.58919198E12, 5572.522727272727], [1.58919096E12, 6085.256410256408]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58919396E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.5891903E12, "maxY": 4.9E-324, "series": [{"data": [[1.5891936E12, 0.0], [1.58919078E12, 0.0], [1.58919138E12, 0.0], [1.589193E12, 0.0], [1.5891918E12, 0.0], [1.5891924E12, 0.0], [1.58919342E12, 0.0], [1.5891906E12, 0.0], [1.58919282E12, 0.0], [1.58919222E12, 0.0], [1.5891912E12, 0.0], [1.58919384E12, 0.0], [1.58919102E12, 0.0], [1.58919162E12, 0.0], [1.58919324E12, 0.0], [1.58919204E12, 0.0], [1.58919264E12, 0.0], [1.58919366E12, 0.0], [1.58919042E12, 0.0], [1.58919084E12, 0.0], [1.58919306E12, 0.0], [1.58919144E12, 0.0], [1.58919246E12, 0.0], [1.58919126E12, 0.0], [1.58919186E12, 0.0], [1.58919348E12, 0.0], [1.58919228E12, 0.0], [1.58919288E12, 0.0], [1.5891939E12, 0.0], [1.58919066E12, 0.0], [1.58919108E12, 0.0], [1.5891933E12, 0.0], [1.58919168E12, 0.0], [1.5891927E12, 0.0], [1.5891915E12, 0.0], [1.58919048E12, 0.0], [1.5891921E12, 0.0], [1.58919372E12, 0.0], [1.5891903E12, 0.0], [1.58919312E12, 0.0], [1.5891909E12, 0.0], [1.58919252E12, 0.0], [1.58919354E12, 0.0], [1.58919132E12, 0.0], [1.58919192E12, 0.0], [1.58919294E12, 0.0], [1.58919174E12, 0.0], [1.58919072E12, 0.0], [1.58919234E12, 0.0], [1.58919396E12, 0.0], [1.58919054E12, 0.0], [1.58919336E12, 0.0], [1.58919114E12, 0.0], [1.58919276E12, 0.0], [1.58919156E12, 0.0], [1.58919378E12, 0.0], [1.58919216E12, 0.0], [1.58919318E12, 0.0], [1.58919036E12, 0.0], [1.58919258E12, 0.0], [1.58919198E12, 0.0], [1.58919096E12, 0.0]], "isOverall": false, "label": "extract", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58919396E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3534.0, "minX": 1.5891903E12, "maxY": 12039.0, "series": [{"data": [[1.5891936E12, 7247.0], [1.58919078E12, 8603.0], [1.58919138E12, 8484.0], [1.589193E12, 6658.0], [1.5891918E12, 7496.0], [1.5891924E12, 7126.0], [1.58919342E12, 6498.0], [1.5891906E12, 8700.0], [1.58919282E12, 6765.0], [1.58919222E12, 7155.0], [1.5891912E12, 7752.0], [1.58919384E12, 6575.0], [1.58919102E12, 8377.0], [1.58919162E12, 8076.0], [1.58919324E12, 6285.0], [1.58919204E12, 6844.0], [1.58919264E12, 8288.0], [1.58919366E12, 7737.0], [1.58919042E12, 7165.0], [1.58919084E12, 9166.0], [1.58919306E12, 6692.0], [1.58919144E12, 8512.0], [1.58919246E12, 8430.0], [1.58919126E12, 11268.0], [1.58919186E12, 7141.0], [1.58919348E12, 7604.0], [1.58919228E12, 8284.0], [1.58919288E12, 7934.0], [1.5891939E12, 4347.0], [1.58919066E12, 12039.0], [1.58919108E12, 7166.0], [1.5891933E12, 7185.0], [1.58919168E12, 7881.0], [1.5891927E12, 7405.0], [1.5891915E12, 7588.0], [1.58919048E12, 6907.0], [1.5891921E12, 7189.0], [1.58919372E12, 7972.0], [1.5891903E12, 8324.0], [1.58919312E12, 6576.0], [1.5891909E12, 8890.0], [1.58919252E12, 8408.0], [1.58919354E12, 7235.0], [1.58919132E12, 7477.0], [1.58919192E12, 6654.0], [1.58919294E12, 6674.0], [1.58919174E12, 9211.0], [1.58919072E12, 7239.0], [1.58919234E12, 7676.0], [1.58919396E12, 4306.0], [1.58919054E12, 7024.0], [1.58919336E12, 6921.0], [1.58919114E12, 8192.0], [1.58919276E12, 7293.0], [1.58919156E12, 7695.0], [1.58919378E12, 6485.0], [1.58919216E12, 6589.0], [1.58919318E12, 6561.0], [1.58919036E12, 8352.0], [1.58919258E12, 7318.0], [1.58919198E12, 6585.0], [1.58919096E12, 10319.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5891936E12, 3818.0], [1.58919078E12, 4540.0], [1.58919138E12, 4291.0], [1.589193E12, 4746.0], [1.5891918E12, 3852.0], [1.5891924E12, 4408.0], [1.58919342E12, 4329.0], [1.5891906E12, 4065.0], [1.58919282E12, 4609.0], [1.58919222E12, 4386.0], [1.5891912E12, 4377.0], [1.58919384E12, 3876.0], [1.58919102E12, 3584.0], [1.58919162E12, 3816.0], [1.58919324E12, 4719.0], [1.58919204E12, 3989.0], [1.58919264E12, 4269.0], [1.58919366E12, 3765.0], [1.58919042E12, 4416.0], [1.58919084E12, 4271.0], [1.58919306E12, 4319.0], [1.58919144E12, 4174.0], [1.58919246E12, 3984.0], [1.58919126E12, 3877.0], [1.58919186E12, 3972.0], [1.58919348E12, 3802.0], [1.58919228E12, 4097.0], [1.58919288E12, 4193.0], [1.5891939E12, 3659.0], [1.58919066E12, 4845.0], [1.58919108E12, 4000.0], [1.5891933E12, 4599.0], [1.58919168E12, 3839.0], [1.5891927E12, 3938.0], [1.5891915E12, 3534.0], [1.58919048E12, 4533.0], [1.5891921E12, 4193.0], [1.58919372E12, 4044.0], [1.5891903E12, 4411.0], [1.58919312E12, 4133.0], [1.5891909E12, 4940.0], [1.58919252E12, 4302.0], [1.58919354E12, 4276.0], [1.58919132E12, 3579.0], [1.58919192E12, 4024.0], [1.58919294E12, 4703.0], [1.58919174E12, 3571.0], [1.58919072E12, 4915.0], [1.58919234E12, 4020.0], [1.58919396E12, 3735.0], [1.58919054E12, 4693.0], [1.58919336E12, 4326.0], [1.58919114E12, 4007.0], [1.58919276E12, 4401.0], [1.58919156E12, 4132.0], [1.58919378E12, 4335.0], [1.58919216E12, 4771.0], [1.58919318E12, 4226.0], [1.58919036E12, 3584.0], [1.58919258E12, 4507.0], [1.58919198E12, 4399.0], [1.58919096E12, 3775.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5891936E12, 6774.0], [1.58919078E12, 6569.8], [1.58919138E12, 7949.2], [1.589193E12, 6196.0], [1.5891918E12, 6741.0], [1.5891924E12, 6396.8], [1.58919342E12, 6336.8], [1.5891906E12, 7499.6], [1.58919282E12, 6214.8], [1.58919222E12, 6539.2], [1.5891912E12, 7324.0], [1.58919384E12, 5795.2], [1.58919102E12, 7803.1], [1.58919162E12, 7124.0], [1.58919324E12, 6064.900000000001], [1.58919204E12, 6458.900000000001], [1.58919264E12, 7511.0], [1.58919366E12, 7035.5], [1.58919042E12, 6794.0], [1.58919084E12, 8161.200000000001], [1.58919306E12, 6209.6], [1.58919144E12, 7783.200000000001], [1.58919246E12, 6906.200000000001], [1.58919126E12, 8427.5], [1.58919186E12, 6574.2], [1.58919348E12, 7000.200000000001], [1.58919228E12, 8157.0], [1.58919288E12, 6694.200000000001], [1.5891939E12, 4310.2], [1.58919066E12, 9110.0], [1.58919108E12, 6787.2], [1.5891933E12, 6574.500000000001], [1.58919168E12, 7410.200000000001], [1.5891927E12, 7282.0], [1.5891915E12, 7110.8], [1.58919048E12, 6553.8], [1.5891921E12, 6686.299999999999], [1.58919372E12, 7404.0], [1.5891903E12, 8188.8], [1.58919312E12, 6517.7], [1.5891909E12, 7953.900000000001], [1.58919252E12, 6865.0], [1.58919354E12, 6939.6], [1.58919132E12, 7310.2], [1.58919192E12, 6078.400000000001], [1.58919294E12, 6478.2], [1.58919174E12, 8168.9], [1.58919072E12, 6828.0], [1.58919234E12, 7320.8], [1.58919396E12, 4306.0], [1.58919054E12, 6575.2], [1.58919336E12, 6343.7], [1.58919114E12, 7194.3], [1.58919276E12, 6486.9], [1.58919156E12, 7484.7], [1.58919378E12, 6032.2], [1.58919216E12, 6068.0], [1.58919318E12, 6443.2], [1.58919036E12, 7604.8], [1.58919258E12, 6675.000000000001], [1.58919198E12, 6290.5], [1.58919096E12, 7640.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5891936E12, 7247.0], [1.58919078E12, 8603.0], [1.58919138E12, 8484.0], [1.589193E12, 6658.0], [1.5891918E12, 7496.0], [1.5891924E12, 7126.0], [1.58919342E12, 6498.0], [1.5891906E12, 8700.0], [1.58919282E12, 6765.0], [1.58919222E12, 7155.0], [1.5891912E12, 7752.0], [1.58919384E12, 6575.0], [1.58919102E12, 8377.0], [1.58919162E12, 8076.0], [1.58919324E12, 6285.0], [1.58919204E12, 6844.0], [1.58919264E12, 8288.0], [1.58919366E12, 7737.0], [1.58919042E12, 7165.0], [1.58919084E12, 9166.0], [1.58919306E12, 6692.0], [1.58919144E12, 8512.0], [1.58919246E12, 8430.0], [1.58919126E12, 11268.0], [1.58919186E12, 7141.0], [1.58919348E12, 7604.0], [1.58919228E12, 8284.0], [1.58919288E12, 7934.0], [1.5891939E12, 4347.0], [1.58919066E12, 12039.0], [1.58919108E12, 7166.0], [1.5891933E12, 7185.0], [1.58919168E12, 7881.0], [1.5891927E12, 7405.0], [1.5891915E12, 7588.0], [1.58919048E12, 6907.0], [1.5891921E12, 7189.0], [1.58919372E12, 7972.0], [1.5891903E12, 8324.0], [1.58919312E12, 6576.0], [1.5891909E12, 8890.0], [1.58919252E12, 8408.0], [1.58919354E12, 7235.0], [1.58919132E12, 7477.0], [1.58919192E12, 6654.0], [1.58919294E12, 6674.0], [1.58919174E12, 9211.0], [1.58919072E12, 7239.0], [1.58919234E12, 7676.0], [1.58919396E12, 4306.0], [1.58919054E12, 7024.0], [1.58919336E12, 6921.0], [1.58919114E12, 8192.0], [1.58919276E12, 7293.0], [1.58919156E12, 7695.0], [1.58919378E12, 6485.0], [1.58919216E12, 6589.0], [1.58919318E12, 6561.0], [1.58919036E12, 8352.0], [1.58919258E12, 7318.0], [1.58919198E12, 6585.0], [1.58919096E12, 10319.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5891936E12, 6899.0], [1.58919078E12, 8551.199999999997], [1.58919138E12, 8325.35], [1.589193E12, 6270.599999999999], [1.5891918E12, 7077.599999999999], [1.5891924E12, 6755.9], [1.58919342E12, 6464.6], [1.5891906E12, 8289.599999999999], [1.58919282E12, 6363.8], [1.58919222E12, 6675.8], [1.5891912E12, 7641.3], [1.58919384E12, 6301.4], [1.58919102E12, 7933.299999999999], [1.58919162E12, 7440.0], [1.58919324E12, 6209.0], [1.58919204E12, 6734.85], [1.58919264E12, 8105.599999999999], [1.58919366E12, 7414.949999999999], [1.58919042E12, 7039.0], [1.58919084E12, 8528.800000000001], [1.58919306E12, 6587.999999999999], [1.58919144E12, 8114.200000000001], [1.58919246E12, 7406.95], [1.58919126E12, 9362.25], [1.58919186E12, 6828.3], [1.58919348E12, 7284.799999999999], [1.58919228E12, 8222.8], [1.58919288E12, 7888.4], [1.5891939E12, 4347.0], [1.58919066E12, 10311.0], [1.58919108E12, 6965.9], [1.5891933E12, 6932.6], [1.58919168E12, 7806.3], [1.5891927E12, 7392.0], [1.5891915E12, 7402.55], [1.58919048E12, 6886.0], [1.5891921E12, 7082.75], [1.58919372E12, 7790.0], [1.5891903E12, 8324.0], [1.58919312E12, 6551.15], [1.5891909E12, 8347.55], [1.58919252E12, 7484.95], [1.58919354E12, 7061.1], [1.58919132E12, 7404.1], [1.58919192E12, 6290.2], [1.58919294E12, 6520.0], [1.58919174E12, 8912.699999999999], [1.58919072E12, 7069.799999999999], [1.58919234E12, 7605.9], [1.58919396E12, 4306.0], [1.58919054E12, 6787.099999999999], [1.58919336E12, 6727.0], [1.58919114E12, 7338.899999999998], [1.58919276E12, 6593.049999999999], [1.58919156E12, 7668.45], [1.58919378E12, 6099.5], [1.58919216E12, 6335.5], [1.58919318E12, 6495.2], [1.58919036E12, 8170.200000000001], [1.58919258E12, 7060.3], [1.58919198E12, 6440.5], [1.58919096E12, 7839.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58919396E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 5671.5, "minX": 1.0, "maxY": 7833.0, "series": [{"data": [[1.0, 5671.5], [2.0, 6234.5], [4.0, 7833.0], [3.0, 7177.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 5613.5, "minX": 1.0, "maxY": 7723.5, "series": [{"data": [[1.0, 5613.5], [2.0, 6155.5], [4.0, 7723.5], [3.0, 7122.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.5891903E12, "maxY": 0.75, "series": [{"data": [[1.5891936E12, 0.65], [1.58919078E12, 0.6666666666666666], [1.58919138E12, 0.6333333333333333], [1.589193E12, 0.7166666666666667], [1.5891918E12, 0.7166666666666667], [1.5891924E12, 0.6833333333333333], [1.58919342E12, 0.7166666666666667], [1.5891906E12, 0.5833333333333334], [1.58919282E12, 0.7166666666666667], [1.58919222E12, 0.7166666666666667], [1.5891912E12, 0.6166666666666667], [1.58919384E12, 0.48333333333333334], [1.58919102E12, 0.6], [1.58919162E12, 0.65], [1.58919324E12, 0.7], [1.58919204E12, 0.7], [1.58919264E12, 0.6333333333333333], [1.58919366E12, 0.6333333333333333], [1.58919042E12, 0.65], [1.58919084E12, 0.6166666666666667], [1.58919306E12, 0.7166666666666667], [1.58919144E12, 0.6166666666666667], [1.58919246E12, 0.7], [1.58919126E12, 0.5666666666666667], [1.58919186E12, 0.7], [1.58919348E12, 0.6833333333333333], [1.58919228E12, 0.6], [1.58919288E12, 0.6833333333333333], [1.5891939E12, 0.26666666666666666], [1.58919066E12, 0.65], [1.58919108E12, 0.6833333333333333], [1.5891933E12, 0.7], [1.58919168E12, 0.6166666666666667], [1.5891927E12, 0.65], [1.5891915E12, 0.7], [1.58919048E12, 0.6833333333333333], [1.5891921E12, 0.6666666666666666], [1.58919372E12, 0.65], [1.5891903E12, 0.2833333333333333], [1.58919312E12, 0.7], [1.5891909E12, 0.6333333333333333], [1.58919252E12, 0.7], [1.58919354E12, 0.6833333333333333], [1.58919132E12, 0.6166666666666667], [1.58919192E12, 0.7166666666666667], [1.58919294E12, 0.6833333333333333], [1.58919174E12, 0.6333333333333333], [1.58919072E12, 0.6833333333333333], [1.58919234E12, 0.7], [1.58919396E12, 0.11666666666666667], [1.58919054E12, 0.6833333333333333], [1.58919336E12, 0.7], [1.58919114E12, 0.6333333333333333], [1.58919276E12, 0.6666666666666666], [1.58919156E12, 0.6666666666666666], [1.58919378E12, 0.75], [1.58919216E12, 0.7333333333333333], [1.58919318E12, 0.7166666666666667], [1.58919036E12, 0.6166666666666667], [1.58919258E12, 0.6833333333333333], [1.58919198E12, 0.7333333333333333], [1.58919096E12, 0.65]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58919396E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.5891903E12, "maxY": 0.75, "series": [{"data": [[1.5891936E12, 0.65], [1.58919078E12, 0.6666666666666666], [1.58919138E12, 0.6333333333333333], [1.589193E12, 0.7166666666666667], [1.5891918E12, 0.7166666666666667], [1.5891924E12, 0.6833333333333333], [1.58919342E12, 0.7166666666666667], [1.5891906E12, 0.5833333333333334], [1.58919282E12, 0.7166666666666667], [1.58919222E12, 0.7166666666666667], [1.5891912E12, 0.6166666666666667], [1.58919384E12, 0.5166666666666667], [1.58919102E12, 0.6], [1.58919162E12, 0.65], [1.58919324E12, 0.7], [1.58919204E12, 0.7], [1.58919264E12, 0.6333333333333333], [1.58919366E12, 0.6333333333333333], [1.58919042E12, 0.65], [1.58919084E12, 0.6166666666666667], [1.58919306E12, 0.7166666666666667], [1.58919144E12, 0.6166666666666667], [1.58919246E12, 0.7], [1.58919126E12, 0.5666666666666667], [1.58919186E12, 0.7], [1.58919348E12, 0.6833333333333333], [1.58919228E12, 0.6], [1.58919288E12, 0.6833333333333333], [1.5891939E12, 0.2833333333333333], [1.58919066E12, 0.65], [1.58919108E12, 0.6833333333333333], [1.5891933E12, 0.7], [1.58919168E12, 0.6166666666666667], [1.5891927E12, 0.65], [1.5891915E12, 0.7], [1.58919048E12, 0.6833333333333333], [1.5891921E12, 0.6666666666666666], [1.58919372E12, 0.65], [1.5891903E12, 0.21666666666666667], [1.58919312E12, 0.7], [1.5891909E12, 0.6333333333333333], [1.58919252E12, 0.7], [1.58919354E12, 0.6833333333333333], [1.58919132E12, 0.6166666666666667], [1.58919192E12, 0.7166666666666667], [1.58919294E12, 0.6833333333333333], [1.58919174E12, 0.6333333333333333], [1.58919072E12, 0.6833333333333333], [1.58919234E12, 0.7], [1.58919396E12, 0.13333333333333333], [1.58919054E12, 0.6833333333333333], [1.58919336E12, 0.7], [1.58919114E12, 0.6333333333333333], [1.58919276E12, 0.6666666666666666], [1.58919156E12, 0.6666666666666666], [1.58919378E12, 0.75], [1.58919216E12, 0.7333333333333333], [1.58919318E12, 0.7166666666666667], [1.58919036E12, 0.6166666666666667], [1.58919258E12, 0.6833333333333333], [1.58919198E12, 0.7333333333333333], [1.58919096E12, 0.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.58919396E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.5891903E12, "maxY": 0.75, "series": [{"data": [[1.5891936E12, 0.65], [1.58919078E12, 0.6666666666666666], [1.58919138E12, 0.6333333333333333], [1.589193E12, 0.7166666666666667], [1.5891918E12, 0.7166666666666667], [1.5891924E12, 0.6833333333333333], [1.58919342E12, 0.7166666666666667], [1.5891906E12, 0.5833333333333334], [1.58919282E12, 0.7166666666666667], [1.58919222E12, 0.7166666666666667], [1.5891912E12, 0.6166666666666667], [1.58919384E12, 0.5166666666666667], [1.58919102E12, 0.6], [1.58919162E12, 0.65], [1.58919324E12, 0.7], [1.58919204E12, 0.7], [1.58919264E12, 0.6333333333333333], [1.58919366E12, 0.6333333333333333], [1.58919042E12, 0.65], [1.58919084E12, 0.6166666666666667], [1.58919306E12, 0.7166666666666667], [1.58919144E12, 0.6166666666666667], [1.58919246E12, 0.7], [1.58919126E12, 0.5666666666666667], [1.58919186E12, 0.7], [1.58919348E12, 0.6833333333333333], [1.58919228E12, 0.6], [1.58919288E12, 0.6833333333333333], [1.5891939E12, 0.2833333333333333], [1.58919066E12, 0.65], [1.58919108E12, 0.6833333333333333], [1.5891933E12, 0.7], [1.58919168E12, 0.6166666666666667], [1.5891927E12, 0.65], [1.5891915E12, 0.7], [1.58919048E12, 0.6833333333333333], [1.5891921E12, 0.6666666666666666], [1.58919372E12, 0.65], [1.5891903E12, 0.21666666666666667], [1.58919312E12, 0.7], [1.5891909E12, 0.6333333333333333], [1.58919252E12, 0.7], [1.58919354E12, 0.6833333333333333], [1.58919132E12, 0.6166666666666667], [1.58919192E12, 0.7166666666666667], [1.58919294E12, 0.6833333333333333], [1.58919174E12, 0.6333333333333333], [1.58919072E12, 0.6833333333333333], [1.58919234E12, 0.7], [1.58919396E12, 0.13333333333333333], [1.58919054E12, 0.6833333333333333], [1.58919336E12, 0.7], [1.58919114E12, 0.6333333333333333], [1.58919276E12, 0.6666666666666666], [1.58919156E12, 0.6666666666666666], [1.58919378E12, 0.75], [1.58919216E12, 0.7333333333333333], [1.58919318E12, 0.7166666666666667], [1.58919036E12, 0.6166666666666667], [1.58919258E12, 0.6833333333333333], [1.58919198E12, 0.7333333333333333], [1.58919096E12, 0.65]], "isOverall": false, "label": "extract-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58919396E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.5891903E12, "maxY": 0.75, "series": [{"data": [[1.5891936E12, 0.65], [1.58919078E12, 0.6666666666666666], [1.58919138E12, 0.6333333333333333], [1.589193E12, 0.7166666666666667], [1.5891918E12, 0.7166666666666667], [1.5891924E12, 0.6833333333333333], [1.58919342E12, 0.7166666666666667], [1.5891906E12, 0.5833333333333334], [1.58919282E12, 0.7166666666666667], [1.58919222E12, 0.7166666666666667], [1.5891912E12, 0.6166666666666667], [1.58919384E12, 0.5166666666666667], [1.58919102E12, 0.6], [1.58919162E12, 0.65], [1.58919324E12, 0.7], [1.58919204E12, 0.7], [1.58919264E12, 0.6333333333333333], [1.58919366E12, 0.6333333333333333], [1.58919042E12, 0.65], [1.58919084E12, 0.6166666666666667], [1.58919306E12, 0.7166666666666667], [1.58919144E12, 0.6166666666666667], [1.58919246E12, 0.7], [1.58919126E12, 0.5666666666666667], [1.58919186E12, 0.7], [1.58919348E12, 0.6833333333333333], [1.58919228E12, 0.6], [1.58919288E12, 0.6833333333333333], [1.5891939E12, 0.2833333333333333], [1.58919066E12, 0.65], [1.58919108E12, 0.6833333333333333], [1.5891933E12, 0.7], [1.58919168E12, 0.6166666666666667], [1.5891927E12, 0.65], [1.5891915E12, 0.7], [1.58919048E12, 0.6833333333333333], [1.5891921E12, 0.6666666666666666], [1.58919372E12, 0.65], [1.5891903E12, 0.21666666666666667], [1.58919312E12, 0.7], [1.5891909E12, 0.6333333333333333], [1.58919252E12, 0.7], [1.58919354E12, 0.6833333333333333], [1.58919132E12, 0.6166666666666667], [1.58919192E12, 0.7166666666666667], [1.58919294E12, 0.6833333333333333], [1.58919174E12, 0.6333333333333333], [1.58919072E12, 0.6833333333333333], [1.58919234E12, 0.7], [1.58919396E12, 0.13333333333333333], [1.58919054E12, 0.6833333333333333], [1.58919336E12, 0.7], [1.58919114E12, 0.6333333333333333], [1.58919276E12, 0.6666666666666666], [1.58919156E12, 0.6666666666666666], [1.58919378E12, 0.75], [1.58919216E12, 0.7333333333333333], [1.58919318E12, 0.7166666666666667], [1.58919036E12, 0.6166666666666667], [1.58919258E12, 0.6833333333333333], [1.58919198E12, 0.7333333333333333], [1.58919096E12, 0.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.58919396E12, "title": "Total Transactions Per Second"}},
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
