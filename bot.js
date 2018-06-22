const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "AR15";



 console.log('Bot started.');
  client.on('ready', msg => {
  console.log('Bot operational.');
  client.user.setGame('炸彈人');
});

     
            
client.on('message', msg => {
  if (msg.content === prefix +' help') {
    msg.reply('你好 我是最可靠的AR15 只要AR15 人型/裝備時間 的話你就可以查到你想要的東西喔!');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 說話') {
    msg.reply('我該要說什麼啦...(歪頭)');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + ' 你在嗎') {
    msg.reply('什麼事啊');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + console.err) {
      msg.reply('走開!');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + ' 你很可愛') {
    msg.reply('走開!');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + ' YUMO是誰') {
    msg.reply('還用說的,當然是JK');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + ' (摸頭') {
    msg.reply('你想怎樣啦(陰笑');
  }
});



client.on('message', msg => {
  if (msg.content === prefix +' 800'){
    msg.reply('\n 姓名:**KSG**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_g: \n 繪師:**neco** \n\n **生存本能**: 提升自身護甲:30%（60%）和迴避:30%（60%）,持續4秒（6秒）。開場CD10秒，技能間隔CD20秒（16秒）\n https://media.discordapp.net/attachments/120561100264570881/388985357791657986/420px-KSG.png');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' KSG'){
    msg.reply('\n 姓名:**KSG**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_g: \n 繪師:**neco** \n\n **生存本能**: 提升自身護甲:30%（60%）和迴避:30%（60%）,持續4秒（6秒）。開場CD10秒，技能間隔CD20秒（16秒）\n https://media.discordapp.net/attachments/120561100264570881/388985357791657986/420px-KSG.png');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 805') {
    msg.reply('\n 姓名:**Saiga 12**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_g: \n 繪師:**防彈乳牛** \n\n **巨羚號角**: 進行三次傷害逐漸提升的攻擊，對每個目標造成0.8（1.5）/1.2（2.5）/1.6（3.5）倍的傷害。開場CD8秒，技能間隔CD20秒（16秒）\n https://static.mengniang.org/common/c/cd/Saiga12.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 810') {
    msg.reply('\n 姓名:**S.A.T.8**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_g: \n 繪師:**NIN** \n\n **堅壁理論**: 給戰鬥中位於第一排的我方人形 增加能吸收12點（35點）傷害的護盾,持續3秒（5秒） 開場CD2秒，技能間隔CD12秒（8秒）\n 	https://img.moegirl.org/common/8/87/Pic_SAT8.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 755') {
    msg.reply('\n 姓名:**USAS-12**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_g: \n 繪師:**麻將** \n\n **狂熱突襲**: 6秒(8秒)內提升攻速32%(60%),並裝彈量增加1發(4發) 但該輪射擊後第一次換彈時間延長1秒 開場CD1秒，技能間隔CD20秒（16秒）\n	 https://static.mengniang.org/common/b/bb/Pic_USAS12.png ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 750') {
    msg.reply('\n 姓名:**Super-Shorty**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_g: \n 繪師:**廢人** \n\n **生存本能**: 提升自身護甲:25%（50%）和迴避:28%（55%）, 持續4秒（6秒）。 開場CD10秒，技能間隔CD20秒（16秒) \n https://static.mengniang.org/common/e/e3/SuperShorty.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 740') {
    msg.reply('\n 姓名:**SPAS-12**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_g:\n 繪師:**洲川Terras** \n\n **火力專注SG**: 提升自身火力30%（120%）,且攻擊目標數暫時増至5,持續8秒（不與獨頭彈效果疊加）。開場CD8秒，技能間隔CD20秒（16秒）\n https://img.moegirl.org/common/6/60/SPAS12.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 745') {
    msg.reply('\n 姓名:**M37**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_g:\n 繪師:**Rain Lan** \n\n **震盪打擊**: 進行一次額外的攻擊,攻擊造成1倍（2倍）傷害,  並造成2碼（3碼）的擊退效果。 開場CD8秒，技能間隔CD20秒（16秒）\n https://img.moegirl.org/common/9/92/%E5%B0%91%E5%A5%B3%E5%89%8D%E7%BA%BF-M37.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 740') {
    msg.reply('\n 姓名:**M590**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_g:\n 繪師:**防彈乳牛** \n\n **防護專注**: 提升自身護甲40%（70%），持續4秒（6秒）。開場CD10秒，技能間隔CD20秒（16秒）\n	 https://static.mengniang.org/common/6/65/%E5%B0%91%E5%A5%B3%E5%89%8D%E7%BA%BF-M590.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 715') {
    msg.reply('\n 姓名:**NS2000**\n 等級::star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_g:\n 繪師:**HIKARI** \n\n **震盪打擊**: 進行一次額外的攻擊,攻擊造成1倍（2倍）傷害, 並造成2碼（3碼）的擊退效果。 開場CD8秒，技能間隔CD20秒（16秒) \n	 https://static.mengniang.org/common/4/4c/Pic_NS2000.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 730') {
    msg.reply('\n 姓名:**M1897**\n 等級::star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_g:\n  繪師:**小迪** \n\n **震盪打擊**: 進行一次額外的攻擊,攻擊造成1倍（2倍）傷害, 並造成2碼（3碼）的擊退效果。 開場CD8秒，技能間隔CD20秒（16秒）\n https://static.mengniang.org/common/1/16/M1897.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 720') {
    msg.reply('\n 姓名:**M500**\n 等級::star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_g:\n 繪師:**Ki桑** \n\n **防護專注** :提升自身護甲30%（60%）,持續4秒（6秒）。 開場CD10秒，技能間隔CD20秒（16秒) \n https://static.mengniang.org/common/0/0f/%E5%B0%91%E5%A5%B3%E5%89%8D%E7%BA%BF-M500.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +'725') {
    msg.reply('\n 姓名:**KS-23**\n 等級::star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_g:\n 繪師:**Sky** \n\n **火力專注SG** :提升自身火力30%（120%），且攻擊目標數暫時增至5，持續8秒。開場CD8秒，技能間隔CD20秒（16秒) \n https://static.mengniang.org/common/7/7f/%E5%B0%91%E5%A5%B3%E5%89%8D%E7%BA%BF-KS-23.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 730') {
    msg.reply('\n 姓名:**RMB-93**\n 等級::star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_g:\n 繪師:**Bison倉鼠** \n\n **震盪打擊** :進行一次額外的攻擊,攻擊造成1倍（2倍）傷害, 並造成2碼（3碼）的擊退效果。 開場CD8秒，技能間隔CD20秒（16秒）\n https://static.mengniang.org/common/5/57/%E5%B0%91%E5%A5%B3%E5%89%8D%E7%BA%BF-RMB-93.png ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 650') {
    msg.reply('\n 姓名:**PKP**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/3/39/PKP.png/420px-PKP.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 645') {
    msg.reply('\n 姓名:**MG5**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/6/6c/MG5.png/420px-MG5.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 640') {
    msg.reply('\n 姓名:**MG4**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/2/24/MG4.png/420px-MG4.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 635') {
    msg.reply('\n 姓名:**Negev**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/3/3c/Negev.png/420px-Negev.png   ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 635') {
    msg.reply('\n 姓名:**Negev**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/3/3c/Negev.png/420px-Negev.png   ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 615') {
    msg.reply('\n 姓名:**80式**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_m: :regional_indicator_g:\n https://img.moegirl.org/common/6/65/Pic_80type.png   ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 625') {
    msg.reply('\n 姓名:**阿梅利**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_m: :regional_indicator_g:\n 槍種:**MG**\n http://en.gfwiki.com/images/thumb/b/b3/Ameli.png/420px-Ameli.png   ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 620') {
    msg.reply('\n 姓名:**MK48**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/6/6a/Mk48.png/420px-Mk48.png   ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 620') {
    msg.reply('\n 姓名:**AEK999**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/8/8b/AEK-999.png/420px-AEK-999.png   ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 610') {
    msg.reply('\n 姓名:**M60**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/2/2a/M60.png/420px-M60.png   ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 625') {
    msg.reply('\n 姓名:**M1918**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/f/f4/M1918.png/420px-M1918.png   ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 630') {
    msg.reply('\n 姓名:**PK**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/3/32/PK.png/420px-PK.png   ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 630') {
    msg.reply('\n 姓名:**MG3**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/a/a0/MG3.png/420px-MG3.png   ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 610') {
    msg.reply('\n 姓名:**M2HB**\n 等級::star: :star: :star: \n 槍種::regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/8/89/M2HB.png/420px-M2HB.png   ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 550') {
    msg.reply('\n 姓名:**MG42**\n 等級::star: :star: :star: \n 槍種::regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/7/75/MG42.png/420px-MG42.png   ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 540') {
    msg.reply('\n 姓名:**M1919A4**\n 等級::star: :star: :star: \n 槍種::regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/6/60/M1919A4.png/420px-M1919A4.png   ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 520') {
    msg.reply('\n 姓名:**布倫**\n 等級::star: :star: :star: \n 槍種::regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/a/a4/Bren.png/420px-Bren.png   ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 500') {
    msg.reply('\n 姓名:**DP28**\n 等級::star: :star: \n 槍種::regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/c/cf/DP28.png/420px-DP28.png   ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 510') {
    msg.reply('\n 姓名:**LWMMG**\n 等級::star: :star: \n 槍種::regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/f/f9/LWMMG.png/420px-LWMMG.png   ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 500') {
    msg.reply('\n 姓名:**MG34**\n 等級::star: :star: \n 槍種::regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/0/0d/MG34.png/420px-MG34.png   ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 450') {
    msg.reply('\n 姓名:**FG42**\n 等級::star: :star: \n 槍種::regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/e/e3/FG42.png/420px-FG42.png   ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 450') {
    msg.reply('\n 姓名:**AAT-52**\n 等級::star: :star: \n 槍種::regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/0/02/AAT-52.png/420px-AAT-52.png   ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 405') {
    msg.reply('\n 姓名:**Zas M21**\n 等級::star: :star: :star: :star: :star:\n 槍種::regional_indicator_a: :regional_indicator_r:\n https://media.discordapp.net/attachments/120561100264570881/392277511293370398/250px-Zas_M21_1.png   ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 352') {
    msg.reply('\n 姓名:**K2**\n 等級::star: :star: :star: :star: :star:\n 槍種::regional_indicator_a: :regional_indicator_r:\n  https://media.discordapp.net/attachments/120561100264570881/392278008116805637/800px-Pic_K2.png?width=500&height=500  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 348') {
    msg.reply('\n 姓名:**T91**\n 等級::star: :star: :star: :star: :star:\n 槍種::regional_indicator_a: :regional_indicator_r:\n  http://en.gfwiki.com/images/thumb/1/1f/T91.png/420px-T91.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 358') {
    msg.reply('\n 姓名:**RFB**\n 等級::star: :star: :star: :star: :star:\n 槍種::regional_indicator_a: :regional_indicator_r:\n  http://en.gfwiki.com/images/thumb/7/77/RFB.png/420px-RFB.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 350') {
    msg.reply('\n 姓名:**97式**\n 等級::star: :star: :star: :star: :star:\n 槍種::regional_indicator_a: :regional_indicator_r:\n  http://en.gfwiki.com/images/thumb/6/6b/Type_97.png/420px-Type_97.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 350') {
    msg.reply('\n 姓名:**95式**\n 等級::star: :star: :star: :star: :star:\n 槍種::regional_indicator_a: :regional_indicator_r:\n  http://en.gfwiki.com/images/thumb/e/ee/Type_95.png/420px-Type_95.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 404') {
    msg.reply('\n 姓名:**G11**\n 等級::star: :star: :star: :star: :star:\n 槍種::regional_indicator_a: :regional_indicator_r:\n  http://en.gfwiki.com/images/thumb/f/f2/G11.png/420px-G11.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 405') {
    msg.reply('\n 姓名:**G41**\n 等級::star: :star: :star: :star: :star:\n 槍種::regional_indicator_a: :regional_indicator_r:\n  http://en.gfwiki.com/images/thumb/7/71/G41.png/420px-G41.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 345') {
    msg.reply('\n 姓名:**FAL**\n 等級::star: :star: :star: :star: :star:\n 槍種::regional_indicator_a: :regional_indicator_r:\n  http://en.gfwiki.com/images/thumb/e/e9/FAL.png/420px-FAL.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 355') {
    msg.reply('\n 姓名:**HK416**\n 等級::star: :star: :star: :star: :star:\n 槍種::regional_indicator_a: :regional_indicator_r:\n http://en.gfwiki.com/images/thumb/9/9a/HK416.png/420px-HK416.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 340') {
    msg.reply('\n 姓名:**利貝羅勒**\n 等級::star: :star: :star: :star:\n 槍種::regional_indicator_a: :regional_indicator_r:\n http://en.gfwiki.com/images/thumb/1/18/Ribeyrolles.png/420px-Ribeyrolles.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 335') {
    msg.reply('\n 姓名:**9A91**\n等級::star: :star: :star: :star:\n 槍種::regional_indicator_a: :regional_indicator_r:\n http://en.gfwiki.com/images/thumb/a/a4/9A-91.png/420px-9A-91.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 340') {
    msg.reply('\n 姓名:**G36**\n 等級::star: :star: :star: :star:\n 槍種::regional_indicator_a: :regional_indicator_r:\n http://en.gfwiki.com/images/thumb/5/51/G36.png/420px-G36.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 330') {
    msg.reply('\n 姓名:**TAR-21**\n 等級::star: :star: :star: :star:\n 槍種::regional_indicator_a: :regional_indicator_r:\n  http://en.gfwiki.com/images/thumb/8/8c/TAR-21.png/420px-TAR-21.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 330') {
    msg.reply('\n 姓名:**FAMUS**\n 等級::star: :star: :star: :star:\n 槍種::regional_indicator_a: :regional_indicator_r:\n http://en.gfwiki.com/images/thumb/2/21/FAMAS.png/420px-FAMAS.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 325') {
    msg.reply('\n 姓名:**56-1式**\n 等級::star: :star: :star: :star:\n 槍種::regional_indicator_a: :regional_indicator_r:\n http://en.gfwiki.com/images/thumb/6/65/Type_56-1.png/420px-Type_56-1.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 330') {
    msg.reply('\n 姓名:**AS VAL**\n 等級::star: :star: :star: :star:\n 槍種::regional_indicator_a: :regional_indicator_r:\n http://en.gfwiki.com/images/thumb/e/ec/AS_Val.png/420px-AS_Val.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 315') {
    msg.reply('\n 姓名:**ARX 160**\n 等級::star: :star: :star: \n 槍種::regional_indicator_a: :regional_indicator_r:\n  http://en.gfwiki.com/images/thumb/1/1f/ARX-160.png/420px-ARX-160.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 310') {
    msg.reply('\n 姓名:**Ots-12**\n 等級::star: :star: :star: \n 槍種::regional_indicator_a: :regional_indicator_r:\n  http://en.gfwiki.com/images/thumb/7/71/OTs-12.png/420px-OTs-12.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 300') {
    msg.reply('\n 姓名:**Stg-44**\n 等級::star: :star: :star: \n 槍種::regional_indicator_a: :regional_indicator_r:\n http://en.gfwiki.com/images/thumb/a/a0/StG44.png/420px-StG44.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 320') {
    msg.reply('\n 姓名:**FNC**\n 等級::star: :star: :star: \n 槍種::regional_indicator_a: :regional_indicator_r:\n  http://en.gfwiki.com/images/thumb/e/ec/FNC.png/420px-FNC.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 320') {
    msg.reply('\n 姓名:**AK-47**\n 等級::star: :star: :star: \n 槍種::regional_indicator_a: :regional_indicator_r:\n http://en.gfwiki.com/images/thumb/f/f8/AK-47.png/420px-AK-47.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 245') {
    msg.reply('\n 姓名:**63式**\n 等級::star: :star: :star: \n 槍種::regional_indicator_a: :regional_indicator_r:\n http://en.gfwiki.com/images/thumb/d/d3/Type_63.png/420px-Type_63.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 245') {
    msg.reply('\n 姓名:**F2000**\n 等級::star: :star: \n 槍種::regional_indicator_a: :regional_indicator_r:\n  http://en.gfwiki.com/images/thumb/2/29/F2000.png/420px-F2000.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 240') {
    msg.reply('\n 姓名:**SIG 510**\n 等級::star: :star: \n 槍種::regional_indicator_a: :regional_indicator_r:\n http://en.gfwiki.com/images/thumb/1/16/SIG-510.png/420px-SIG-510.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 240') {
    msg.reply('\n 姓名:**加利爾**\n 等級::star: :star: \n 槍種::regional_indicator_a: :regional_indicator_r:\n http://en.gfwiki.com/images/thumb/d/d6/Galil.png/420px-Galil.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 250') {
    msg.reply('\n 姓名:**G3**\n 等級::star: :star: \n 槍種::regional_indicator_a: :regional_indicator_r:\n http://en.gfwiki.com/images/thumb/4/45/G3.png/420px-G3.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 250') {
    msg.reply('\n 姓名:**L85A1**\n 等級::star: :star: \n 槍種::regional_indicator_a: :regional_indicator_r:\n http://en.gfwiki.com/images/thumb/7/77/L85A1.png/420px-L85A1.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 442') {
    msg.reply('\n 姓名:**卡爾卡諾M91/38**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_r: :regional_indicator_f:\n https://media.discordapp.net/attachments/120561100264570881/392308850579079179/250px-E58DA1E5B094E58DA1E8AFBAM9138_1.png?width=241&height=300  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 438') {
    msg.reply('\n 姓名:**卡爾卡諾M1891**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_r: :regional_indicator_f:\n https://media.discordapp.net/attachments/120561100264570881/392309453397164032/250px-E58DA1E5B094E58DA1E8AFBAM1891_1.png?width=241&height=300  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 455') {
    msg.reply('\n 姓名:**M99**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_r: :regional_indicator_f:\n http://en.gfwiki.com/images/thumb/1/13/M99.png/420px-M99.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 452') {
    msg.reply('\n 姓名:**IWS2000**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_r: :regional_indicator_f:\n .http://en.gfwiki.com/images/thumb/6/63/IWS_2000.png/420px-IWS_2000.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 440') {
    msg.reply('\n 姓名:**Kar98k**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_r: :regional_indicator_f:\n http://en.gfwiki.com/images/thumb/6/65/Kar98k.png/420px-Kar98k.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 450') {
    msg.reply('\n 姓名:**WA2000**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_r: :regional_indicator_f:\n http://en.gfwiki.com/images/thumb/9/9c/WA2000.png/420px-WA2000.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 500') {
    msg.reply('\n 姓名:**李-恩菲爾德**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_r: :regional_indicator_f:\n http://en.gfwiki.com/images/thumb/4/4d/Lee-Enfield.png/420px-Lee-Enfield.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 445') {
    msg.reply('\n 姓名:**NTW-20**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_r: :regional_indicator_f:\n http://en.gfwiki.com/images/thumb/3/35/NTW-20.png/420px-NTW-20.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 410') {
    msg.reply('\n 姓名:**T-2000**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_r: :regional_indicator_f:\n http://en.gfwiki.com/images/thumb/0/03/T-5000.png/420px-T-5000.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 420') {
    msg.reply('\n 姓名:**G28**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_r: :regional_indicator_f:\n http://en.gfwiki.com/images/thumb/d/d3/G28.png/420px-G28.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 415') {
    msg.reply('\n 姓名:**SVD**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_r: :regional_indicator_f:\n http://en.gfwiki.com/images/thumb/3/33/SVD.png/420px-SVD.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 430') {
    msg.reply('\n 姓名:**PTRD**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_r: :regional_indicator_f:\n http://en.gfwiki.com/images/thumb/a/a6/PTRD.png/420px-PTRD.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 420') {
    msg.reply('\n 姓名:**PSG-1**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_r: :regional_indicator_f:\n http://en.gfwiki.com/images/thumb/8/8d/PSG-1.png/420px-PSG-1.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 410') {
    msg.reply('\n 姓名:**莫辛納甘**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_r: :regional_indicator_f:\n http://en.gfwiki.com/images/thumb/d/dc/Mosin-Nagant.png/420px-Mosin-Nagant.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 425') {
    msg.reply('\n 姓名:**春田**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_r: :regional_indicator_f:\n http://en.gfwiki.com/images/thumb/7/71/Springfield.png/420px-Springfield.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 350') {
    msg.reply('\n 姓名:**OTs-44**\n 等級::star: :star: :star: \n 槍種::regional_indicator_r: :regional_indicator_f:\n http://en.gfwiki.com/images/thumb/0/0d/OTs-44.png/420px-OTs-44.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 350') {
    msg.reply('\n 姓名:**漢陽造88式**\n 等級::star: :star: :star: \n 槍種::regional_indicator_r: :regional_indicator_f:\n http://en.gfwiki.com/images/thumb/4/4f/Hanyang_Type_88.png/420px-Hanyang_Type_88.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 340') {
    msg.reply('\n 姓名:**SV-98**\n 等級::star: :star: :star: \n 槍種::regional_indicator_r: :regional_indicator_f:\n http://en.gfwiki.com/images/thumb/2/25/SV-98.png/420px-SV-98.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 340') {
    msg.reply('\n 姓名:**M14**\n 等級::star: :star: :star: \n 槍種::regional_indicator_r: :regional_indicator_f:\n http://en.gfwiki.com/images/thumb/b/b4/M14.png/420px-M14.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 400') {
    msg.reply('\n 姓名:**M1 加蘭德**\n 等級::star: :star: :star: \n 槍種::regional_indicator_r: :regional_indicator_f:\n http://en.gfwiki.com/images/thumb/5/5f/M1_Garand.png/420px-M1_Garand.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 310') {
    msg.reply('\n 姓名:**G43**\n 等級::star: :star: \n 槍種::regional_indicator_r: :regional_indicator_f:\n http://en.gfwiki.com/images/thumb/b/bb/G43.png/420px-G43.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 320') {
    msg.reply('\n 姓名:**BM59**\n 等級::star: :star: \n 槍種::regional_indicator_r: :regional_indicator_f:\n http://en.gfwiki.com/images/thumb/8/88/BM59.png/420px-BM59.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 310') {
    msg.reply('\n 姓名:**FM49**\n 等級::star: :star: \n 槍種::regional_indicator_r: :regional_indicator_f:\n http://en.gfwiki.com/images/thumb/0/04/FN-49.png/420px-FN-49.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 330') {
    msg.reply('\n 姓名:**SVT-38**\n 等級::star: :star: \n 槍種::regional_indicator_r: :regional_indicator_f:\n http://en.gfwiki.com/images/thumb/2/2b/SVT-38.png/420px-SVT-38.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 233') {
    msg.reply('\n 姓名:**SR-3MP(旋風)**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/f/f1/SR-3MP.png/420px-SR-3MP.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 235') {
    msg.reply('\n 姓名:**79式**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/2/2f/Type_79.png/420px-Type_79.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 230') {
    msg.reply('\n 姓名:**G36C**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/0/05/G36C.png/420px-G36C.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 225') {
    msg.reply('\n 姓名:**索米**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/d/d5/Suomi.png/420px-Suomi.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 235') {
    msg.reply('\n 姓名:**Vector**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/2/27/Vector.png/420px-Vector.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 230') {
    msg.reply('\n 姓名:**湯姆森**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/c/c5/Thompson.png/420px-Thompson.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 218') {
    msg.reply('\n 姓名:**PP-19-01**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_m: :regional_indicator_g:\n https://media.discordapp.net/attachments/120561100264570881/392316105269706771/250px-PP-19-01_1.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 220') {
    msg.reply('\n 姓名:**PP90**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/2/20/PP-90.png/420px-PP-90.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 218') {
    msg.reply('\n 姓名:**希普卡**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/8/85/Shipka.png/420px-Shipka.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 215') {
    msg.reply('\n 姓名:**UMP45**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/d/d7/UMP45.png/420px-UMP45.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 215') {
    msg.reply('\n 姓名:**UMP9**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/7/7c/UMP9.png/420px-UMP9.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 220') {
    msg.reply('\n 姓名:**MP5**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/d/d5/MP5.png/420px-MP5.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 205') {
    msg.reply('\n 姓名:**Z-62**\n 等級::star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_m: :regional_indicator_g:\n 槍種:**SMG**\n http://en.gfwiki.com/images/thumb/6/69/Z-62.png/420px-Z-62.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 140') {
    msg.reply('\n 姓名:**微型烏茲**\n 等級::star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/1/1d/Micro_Uzi.png/420px-Micro_Uzi.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 140') {
    msg.reply('\n 姓名:**司登MK2**\n 等級::star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/a/a1/Sten_MkII.png/420px-Sten_MkII.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 200') {
    msg.reply('\n 姓名:**蠍式**\n 等級::star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/6/62/Skorpion.png/420px-Skorpion.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 210') {
    msg.reply('\n 姓名:**PPS-43**\n 等級::star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/d/da/PPS-43.png/420px-PPS-43.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 200') {
    msg.reply('\n 姓名:**MAC-10**\n 等級::star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/4/4c/MAC-10.png/420px-MAC-10.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 110') {
    msg.reply('\n 姓名:**PP-2000**\n 等級::star: :star: \n 槍種::regional_indicator_s: :regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/5/5e/PP-2000.png/420px-PP-2000.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 130') {
    msg.reply('\n 姓名:**MP40**\n 等級::star: :star: \n 槍種::regional_indicator_s: :regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/1/1b/MP40.png/420px-MP40.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 150') {
    msg.reply('\n 姓名:**PPSh-41**\n 等級::star: :star: \n 槍種::regional_indicator_s: :regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/b/b0/PPSh-41.png/420px-PPSh-41.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 130') {
    msg.reply('\n 姓名:**伯萊塔38型**\n 等級::star: :star: \n 槍種::regional_indicator_s: :regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/3/3b/Beretta_Model_38.png/420px-Beretta_Model_38.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 125') {
    msg.reply('\n 姓名:**64式**\n 等級::star: :star: \n 槍種::regional_indicator_s: :regional_indicator_m: :regional_indicator_g:\n 槍種:**SMG**\n http://en.gfwiki.com/images/thumb/e/e5/Type_64.png/420px-Type_64.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 110') {
    msg.reply('\n 姓名:**IDW**\n 等級::star: :star: \n 槍種::regional_indicator_s: :regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/1/16/IDW.png/420px-IDW.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 130') {
    msg.reply('\n 姓名:**M3**\n 等級::star: :star: \n 槍種::regional_indicator_s: :regional_indicator_m: :regional_indicator_g:\n http://en.gfwiki.com/images/thumb/a/a6/M3.png/420px-M3.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 102') {
    msg.reply('\n 姓名:**競爭者**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_h: :regional_indicator_g: \n http://en.gfwiki.com/images/thumb/2/2e/Contender.png/420px-Contender.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 105') {
    msg.reply('\n 姓名:**NZ75**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_h: :regional_indicator_g: \n http://en.gfwiki.com/images/thumb/0/0b/NZ75.png/420px-NZ75.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 100') {
    msg.reply('\n 姓名:**維爾德MK2**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_h: :regional_indicator_g: \n http://en.gfwiki.com/images/thumb/7/73/Welrod_MkII.png/420px-Welrod_MkII.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 105') {
    msg.reply('\n 姓名:**M950A**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_h: :regional_indicator_g: \n http://en.gfwiki.com/images/thumb/2/24/M950A.png/420px-M950A.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 110') {
    msg.reply('\n 姓名:**灰熊MKV**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_h: :regional_indicator_g: \n http://en.gfwiki.com/images/thumb/e/e0/Grizzly_MkV.png/420px-Grizzly_MkV.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 52') {
    msg.reply('\n 姓名:**Spitfire**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_h: :regional_indicator_g: \n http://en.gfwiki.com/images/thumb/b/b2/Spitfire.png/420px-Spitfire.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 55') {
    msg.reply('\n 姓名:**P7**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_h: :regional_indicator_g: \n http://en.gfwiki.com/images/thumb/6/64/P7.png/420px-P7.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 55') {
    msg.reply('\n 姓名:**斯捷奇金**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_h: :regional_indicator_g: \n http://en.gfwiki.com/images/thumb/f/fe/Stechkin.png/420px-Stechkin.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 50') {
    msg.reply('\n 姓名:**MK23**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_h: :regional_indicator_g: \n http://en.gfwiki.com/images/thumb/b/b1/Mk23.png/420px-Mk23.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 50') {
    msg.reply('\n 姓名:**柯爾特左輪**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_h: :regional_indicator_g: \n http://en.gfwiki.com/images/thumb/4/43/Colt_Revolver.png/420px-Colt_Revolver.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 45') {
    msg.reply('\n 姓名:**托卡列夫**\n 等級::star: :star: :star: \n 槍種::regional_indicator_h: :regional_indicator_g: \n http://en.gfwiki.com/images/thumb/e/ef/Tokarev.png/420px-Tokarev.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 40') {
    msg.reply('\n 姓名:**馬卡洛夫**\n 等級::star: :star: :star: \n 槍種::regional_indicator_h: :regional_indicator_g: \n http://en.gfwiki.com/images/thumb/4/4c/Makarov.png/420px-Makarov.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 40') {
    msg.reply('\n 姓名:**M9**\n 等級::star: :star: :star: \n 槍種::regional_indicator_h: :regional_indicator_g: \n http://en.gfwiki.com/images/thumb/5/58/M9.png/420px-M9.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 40') {
    msg.reply('\n 姓名:**阿斯特拉**\n 等級::star: :star: :star: \n 槍種::regional_indicator_h: :regional_indicator_g: \n http://en.gfwiki.com/images/thumb/7/73/Astra_Revolver.png/420px-Astra_Revolver.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 35') {
    msg.reply('\n 姓名:**92式**\n 等級::star: :star: :star: \n 槍種::regional_indicator_h: :regional_indicator_g: \n http://en.gfwiki.com/images/thumb/0/0f/Type_92.png/420px-Type_92.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 35') {
    msg.reply('\n 姓名:**P99**\n 等級::star: :star: :star: \n 槍種::regional_indicator_h: :regional_indicator_g: \n http://en.gfwiki.com/images/thumb/f/f9/P99.png/420px-P99.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 30') {
    msg.reply('\n 姓名:**P08**\n 等級::star: :star: :star: \n 槍種::regional_indicator_h: :regional_indicator_g: \n http://en.gfwiki.com/images/thumb/e/e0/P08.png/420px-P08.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 30') {
    msg.reply('\n 姓名:**C96**\n 等級::star: :star: :star: \n 槍種::regional_indicator_h: :regional_indicator_g: \n http://en.gfwiki.com/images/thumb/6/69/C96.png/420px-C96.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 28') {
    msg.reply('\n 姓名:**Bren Ten**\n 等級::star: :star: \n 槍種::regional_indicator_h: :regional_indicator_g: \n http://en.gfwiki.com/images/thumb/4/42/Bren_Ten.png/420px-Bren_Ten.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 28') {
    msg.reply('\n 姓名:**USP Compact**\n 等級::star: :star: \n 槍種::regional_indicator_h: :regional_indicator_g: \n http://en.gfwiki.com/images/thumb/9/97/USP_Compact.png/420px-USP_Compact.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 25') {
    msg.reply('\n 姓名:**MP-446**\n 等級::star: :star: \n 槍種::regional_indicator_h: :regional_indicator_g: \n http://en.gfwiki.com/images/thumb/6/60/MP-446.png/420px-MP-446.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 25') {
    msg.reply('\n 姓名:**FNP-9**\n 等級::star: :star: \n 槍種::regional_indicator_h: :regional_indicator_g: \n http://en.gfwiki.com/images/thumb/a/ad/FNP-9.png/420px-FNP-9.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 22') {
    msg.reply('\n 姓名:**PPK**\n 等級::star: :star: \n 槍種::regional_indicator_h: :regional_indicator_g: \n http://en.gfwiki.com/images/thumb/9/94/PPK.png/420px-PPK.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 20') {
    msg.reply('\n 姓名:**P38**\n 等級::star: :star: \n 槍種::regional_indicator_h: :regional_indicator_g: \n http://en.gfwiki.com/images/thumb/9/96/P38.png/420px-P38.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 20') {
    msg.reply('\n 姓名:**納甘左輪**\n 等級::star: :star: \n 槍種::regional_indicator_h: :regional_indicator_g: \n http://en.gfwiki.com/images/thumb/1/1a/Nagant_Revolver.png/420px-Nagant_Revolver.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' 20') {
    msg.reply('\n 姓名:**M1911**\n 等級::star: :star: \n 槍種::regional_indicator_h: :regional_indicator_g: \n http://en.gfwiki.com/images/thumb/b/b2/M1911.png/420px-M1911.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' e540') {
    msg.reply('\n 姓名:**工事妖精**\n 種類:**策略**\n https://img.moegirl.org/common/0/0e/Fortress_3_-0469.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' e535') {
    msg.reply('\n 姓名:**火箭妖精**\n 種類:**策略**\n https://img.moegirl.org/common/7/77/Position_3.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' e530') {
    msg.reply('\n 姓名:**布雷妖精**\n 種類:**策略**\n https://img.moegirl.org/common/5/55/Landmines_3_-0877.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' e510') {
    msg.reply('\n 姓名:**照明妖精**\n 種類:**策略**\n https://img.moegirl.org/common/5/56/Illumine_3.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' e505') {
    msg.reply('\n 姓名:**搜救妖精**\n 種類:**策略**\n https://img.moegirl.org/common/2/24/Rescue_3_-0435.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' e500') {
    msg.reply('\n 姓名:**指揮妖精**\n 種類:**策略**\n https://img.moegirl.org/common/f/fd/Command_3_-0281.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' e435') {
    msg.reply('\n 姓名:**暴怒妖精**\n 種類:**戰鬥**\n https://img.moegirl.org/common/9/95/Crit_3_-0937.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' e430') {
    msg.reply('\n 姓名:**勇士妖精**\n 種類:**戰鬥**\n http://pic.paopaoche.net/up/2017-8/201708181104197994825.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' e430') {
    msg.reply('\n 姓名:**勇士妖精**\n 種類:**策略**\n http://pic.paopaoche.net/up/2017-8/201708181104197994825.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' e410') {
    msg.reply('\n 姓名:**防禦妖精**\n 種類:**策略**\n https://img.moegirl.org/common/d/d0/Defense_3.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' e405') {
    msg.reply('\n 姓名:**空降妖精**\n 種類:**策略**\n https://img.moegirl.org/common/e/e5/Airborne_3_-0472.png  ');
  }
});

client.on('message', msg => {
  if (msg.content === prefix +' e400') {
    msg.reply('\n 姓名:**增援妖精**\n 種類:**策略**\n https://img.moegirl.org/common/b/bd/Reinforce_3.png  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' e340') {
    msg.reply('\n 姓名:**空襲妖精**\n 種類:**戰鬥**\n http://pic.paopaoche.net/up/2017-8/201708181108588295988.png  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' e335') {
    msg.reply('\n 姓名:**炮擊妖精**\n 種類:**戰鬥**\n http://pic.paopaoche.net/up/2017-8/201708181106406672209.png  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' e330') {
    msg.reply('\n 姓名:**狙擊妖精**\n 種類:**戰鬥**\n https://img.moegirl.org/common/d/d0/Sniper_3_-0809.png  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' e310') {
    msg.reply('\n 姓名:**嘲諷妖精**\n 種類:**戰鬥**\n https://img.moegirl.org/common/f/f8/Target_3.png  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' e305') {
    msg.reply('\n 姓名:**護盾妖精**\n 種類:**戰鬥**\n http://pic.paopaoche.net/up/2017-8/201708181205037371763.png  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' e300') {
    msg.reply('\n 姓名:**盾甲妖精**\n 種類:**戰鬥**\n https://img.moegirl.org/common/5/5f/Armor_3.png  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' e56') {
    msg.reply('\n 姓名:**熱光學迷彩披風**\n 種類:**人形裝備|偽裝披風**\n 等級:**5星**\n 適用槍種:**RF**\n http://en.gfwiki.com/images/a/ab/Thermoptic_Camo_Cape.png  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' e46') {
    msg.reply('\n 姓名:**城市迷彩披風**\n 種類:**人形裝備|偽裝披風**\n 等級:**4星**\n 適用槍種:**RF**\n http://en.gfwiki.com/images/0/0e/Urban_Camo_Cape.png  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' e31') {
    msg.reply('\n 姓名:**偽裝披風**\n 種類:**人形裝備|偽裝披風**\n 等級:**3星**\n 適用槍種:**RF**\n https://media.discordapp.net/attachments/392334198825811968/398476656190160896/image.png  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' e16') {
    msg.reply('\n 姓名:**破舊披風**\n 種類:**人形裝備|偽裝披風**\n 等級:**2星**\n 適用槍種:**RF**\n 缺圖片  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 325') {
    msg.reply('\n 姓名:**XM8**\n 等級::star: :star: :star: :star: \n 槍種::regional_indicator_a: :regional_indicator_r: \n https://img.moegirl.org/common/4/4e/Pic_XM8_D.png  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 228') {
    msg.reply('\n 姓名:**C-MS**\n 等級::star: :star: :star: :star: :star: \n 槍種::regional_indicator_s: :regional_indicator_m: :regional_indicator_g: \n https://img.moegirl.org/common/9/94/Pic_CBJMS_D.png  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 353') {
    msg.reply('\n 姓名:**MDR**\n 等級::star: :star: :star: :star: :star:\n 槍種::regional_indicator_a: :regional_indicator_r: \n https://img.moegirl.org/common/5/5a/Pic_MDR_D.png  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 53') {
    msg.reply('\n 姓名:**K5**\n 等級::star: :star: :star: :star: :star:\n 槍種::regional_indicator_h: :regional_indicator_g: \n https://img.moegirl.org/common/2/20/Pic_K5_D.png  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 412') {
    msg.reply('\n 姓名:**AK12**\n 等級::star: :star: :star: :star: :star:\n 槍種::regional_indicator_a: :regional_indicator_r: \n https://img.moegirl.org/common/0/00/Pic_AK12.png  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 409') {
    msg.reply('\n 姓名:**AN94**\n 等級::star: :star: :star: :star: :star:\n 槍種::regional_indicator_a: :regional_indicator_r: \n https://img.moegirl.org/common/b/b0/Pic_AN94.png  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 714') {
    msg.reply('\n 姓名:**M1014**\n 等級::star: :star: :star: :star:\n 槍種::regional_indicator_s: :regional_indicator_g: \n https://img.moegirl.org/common/e/ec/Pic_M1014.png  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 806') {
    msg.reply('\n 姓名:**FP6**\n 等級::star: :star: :star: :star: :star:\n 槍種::regional_indicator_s: :regional_indicator_g: \n https://img.moegirl.org/common/9/98/Pic_FP6.png  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 812') {
    msg.reply('\n 姓名:**AA12**\n 等級::star: :star: :star: :star: :star:\n 槍種::regional_indicator_s: :regional_indicator_g: \n https://img.moegirl.org/common/8/8e/Pic_AA12.png  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 松井惠理子') {
    msg.reply('\n **:musical_note: CV一覽:**\n ``` M1911 \n MP-40 \n 蠍式 \n FAMAS```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 伊藤明香') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` PPK \n M60 ```  ');
  }
})


client.on('message', msg => {
  if (msg.content === prefix +' 篠原成美') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` 納甘左輪 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 葉江透') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` P38 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 古賀葵') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` FNP-9 \n M950A ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 野水伊織') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` MP-446 \n Z-62 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 佐藤有世') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` USP Compact \n Bren Ten \n 鍊金術士（Alchemist） ```  ');
  }
})


client.on('message', msg => {
  if (msg.content === prefix +' 佐久間比呂美') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` 托卡列夫 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 雨宮天') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` 阿斯特拉 \n 56-1式 \n 布倫 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 小泉喬生') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` 魯格P08 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 洲崎綾') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` M9 \n 西蒙諾夫 \n 艾爾菲爾特·華倫泰 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 板谷彩香') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` M9 \n 毛瑟C96 \n 灰熊MKV ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 上坂堇') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` 馬卡洛夫 \n PPSh-41 \n PPS-43 \n 莫辛納甘 \n AS VAL ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 德井青空') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` M9 \n 格洛克17 \n F2000```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 田中美海') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` 79式 \n 格洛克17 \n SVD```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 川澄綾子') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` P99```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 三森鈴子') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` 92式 \n 格洛克17 \n M1A1```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 加藤英美里') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` 59式 \n ST AR-15 \n M37```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 藤井彩加') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` HK45 \n PP-19-01 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 種田梨沙') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` 湯姆森 \n M1加蘭德\n MG3 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 早見沙織') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` VECTOR ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 豐崎愛生') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` 索米KP31 \n 法官（Judge） ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 前川涼子') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` P226 \n Spitfire ```  ');
  }
})


client.on('message', msg => {
  if (msg.content === prefix +' 向山直美') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` PSM \n MP5 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 田中愛美') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` 柯爾特左輪 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 喜多村英梨') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` 斯捷奇金 \n M21 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 赤尾ひかる') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` Mk23 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 大坪由佳') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` SPP-1 \n 97霰 \n 干擾者（Intruder）\n 建築師（Architect） ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 黑澤朋世') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` P7 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 今井麻美') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` 維爾德Mark2 \n PSG-1 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 青木志貴') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` NZ75 \n PP-90 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 藤田茜') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` Five-seveN \n 百式(?) \n G36C ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 古城門志帆') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` CZ-75 \n T91 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 瀨戶麻沙美') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` 競爭者 \n IWS 2000 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 近藤佳奈子') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` 諾愛兒·梵密利歐 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 高橋春香') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` 伯萊塔38型 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 山根希美') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` M3 \n G43 \n M16A1 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' ひなたたまり') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` PP-2000 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 上間江望') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` Spectre M4 \n UMP40 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 伊藤明日香') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` IDW \n FG42 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 堀籠沙耶') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` 64式 \n 63式 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 高橋美佳子') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` M45 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 小倉結衣') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` MAC10 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 大門香實') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` 斯登 \n 95式 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 大西沙織') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` 微型烏茲 \n M14 ```  ');
  }
})


client.on('message', msg => {
  if (msg.content === prefix +' 芹澤優') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` FMG-9 \n PP-19 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 木舩幸歩') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` TMP ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 山本希望') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` EVO \n G28 \n AR70 ```  ');
  }
})

client.on('message', msg => {
  if (msg.content === prefix +' 苅谷瑠衣') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` EMT-9 \n 56半 \n RMB-93 ```  ');
  }
})
          
client.on('message', msg => {
  if (msg.content === prefix +' 井田愛里紗') {
    msg.reply('\n ** :musical_note: CV一覽:**\n ``` EMT-9 \n SCW \n T65 ```  ');
  }
})
              
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          

client.login(process.env.BOT_TOKEN);

