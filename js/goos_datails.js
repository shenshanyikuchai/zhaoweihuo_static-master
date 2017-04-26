function order(){
	 var allOrder = getClass('order');//获取两个页面的DIV;
	 var clickOrder = $('order_manage');//获取菜单栏“订单管理”li
     console.log(clickOrder);
       clickOrder.onclick=function(){
       clickOrder.style.backgroundColor="rgb(203,57,61)";
       allOrder[0].style.display="block";
     }
}
window.onload = function(){
	 order();
   GetTime();
   communication();
   testr();
   jieshuan();   
      
}



        //获取当前时间   
          function GetTime(){
                    Date.prototype.format = function (format) {
                    var o = {
                        "M+": this.getMonth() + 1, //month 
                        "d+": this.getDate(), //day 
                        "h+": this.getHours(), //hour 
                        "m+": this.getMinutes(), //minute 
                        "s+": this.getSeconds(), //second 
                        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter 
                        "S": this.getMilliseconds() //millisecond 
                    }
                    if (/(y+)/.test(format)) {
                        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
                    }
                    for (var k in o) {
                        if (new RegExp("(" + k + ")").test(format)) {
                            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
                        }
                    }
                    return format;
                }

                var testDate = new Date();
                var a=testDate.format("yyyy-MM-dd hh:mm:ss<br/>");
                 console.log(a);
                var submit_time = document.getElementById("submit_time");
                var payment_time = document.getElementById("payment_time");
                var take_goods_time = document.getElementById("take_goods_time");
                var sign_in_time = document.getElementById("sign_in_time");
                var complete_time = document.getElementById("complete_time");
                     
                  submit_time.innerHTML=a;
                  payment_time.innerHTML=a;
                  take_goods_time.innerHTML=a;
                  sign_in_time.innerHTML=a;
                  complete_time.innerHTML=a;
          }


  var Data ={"dataNew":{"texter":[{
                          picture:"img/foot.png",
                          textContent:"大哥牌虾味香酥花生豆230g/罐",
                          standard:"规格:黄色",
                          price:"￥12.90",
                          number:10, 
                          shangjia:"上海非凡贸易有限公司",
                          m_url:"img/shanghai.png",
                          consig:"收货人：彭于晏 联系电话 18273829172 地址：上海浦东新区东方金融园1981号5楼D",
                          ziti:"收货吗是【20160101】，请妥善保管。收到货后请将收货码告知供应商以便完成订单。" ,
                          xiaoji:"共20件商品，小计：&nbsp;&nbsp;&nbsp;&nbsp;￥1000.00",
                          yunfei:"运费：        &nbsp;&nbsp;&nbsp;&nbsp;￥10.00" ,
                          zhongjinen:"总金额：<p>&nbsp;￥500.00</p>"   
                        }],

                   
              }               
}
    

    
   function communication() {
        var consignees=document.getElementById('consignees');
         consignees.innerHTML=Data.dataNew.texter[0].consig;
         var huoma=document.getElementById('huoma');
         huoma.innerHTML=Data.dataNew.texter[0].ziti;
     
   }
     
      
      function testr() {
         
           var tite_box = document.createElement("div");
            tite_box.className = "tite_box";
            tite_box.innerHTML= Data.dataNew.texter[0].shangjia;
            Order_box.appendChild(tite_box);

        var shanJa_img = document.createElement("img");
        shanJa_img.className="shanJa_img";
        shanJa_img.src = Data.dataNew.texter[0].m_url;
        tite_box.appendChild(shanJa_img);

        //创建盒子
        var length=2;
        for (var i = 0; i < length; i++) {
          var sub_box = document.createElement("div");
          sub_box.className = "sub_box";
          Order_box.appendChild(sub_box);
          //创建图片
        var sub_img = document.createElement("img");
        sub_img.className="sub_img";
        sub_img.src = Data.dataNew.texter[0].picture;
        sub_box.appendChild(sub_img);

        // 创建标题
        var title_txt = document.createElement("h5");
        title_txt.innerHTML= Data.dataNew.texter[0].textContent;
        console.log(Data.dataNew.texter.textContent);
        title_txt.className = "title_txt";
            sub_box.appendChild(title_txt);

            //小标题
            var small_div = document.createElement("div");
          small_div.innerHTML = Data.dataNew.texter[0].standard;
          small_div.className = "small_div";
          sub_box.appendChild(small_div);

          var price_div = document.createElement("div");
          price_div.innerHTML = Data.dataNew.texter[0].price;
          price_div.className = "price_div";
          sub_box.appendChild(price_div);

          var number_div = document.createElement("div");
          number_div.innerHTML = Data.dataNew.texter[0].number;
          number_div.className = "number_div";
          sub_box.appendChild(number_div);

          var price_box = document.createElement("div");
          price_box .innerHTML = Data.dataNew.texter[0].price;
          price_box .className = "price_box";
          sub_box.appendChild(price_box);

        }

      
       }

        
       function jieshuan () {

        var xiaoji=document.getElementById('xiaoji');
        var yunfei=document.getElementById('yunfei');
        var zhongjinen=document.getElementById('zhongjinen');
          xiaoji.innerHTML=Data.dataNew.texter[0].xiaoji;
          yunfei.innerHTML=Data.dataNew.texter[0].yunfei;
          zhongjinen.innerHTML=Data.dataNew.texter[0].zhongjinen;
         
       }

  