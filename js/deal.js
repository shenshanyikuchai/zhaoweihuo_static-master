window.onload = function(){
	function $(id){return document.getElementById(id);}
    // 采购商与提供商的切换
    var purchase = $("purchase");
    var provision = $("provision");
    purchase.onclick = function(){
    	provision.className = "";
    	purchase.className = "customer_active";
    }
    provision.onclick = function(){
    	purchase.className = "";
    	provision.className = "customer_active";
    }



	var order_bigbox = $("order_bigbox");
	var management = $("management");
	var Wul = $("Wul");
	    order_bigbox.appendChild(management);
	    management.appendChild(Wul);	 
	 var Wa = document.getElementsByClassName('manages');
	 var order_management = $("order_management"); 
	 var or_management = document.getElementsByClassName("order_management");
	 var swit = $("swit");
	 console.log(or_management);
		for (var j = 0; j < Wa.length; j++) {
			Wa[j].index = j;
			console.log(j);
            or_management[0].style.display = "block";
             Wa[0].style.backgroundColor = "#cb393d";
			Wa[j].onclick = function(){	
				for (var k = 0; k < Wa.length; k++) {
					Wa[k].style.backgroundColor = "";
					 this.style.backgroundColor = "#cb393d";
				}			 
			 swit.children[0].innerHTML = this.innerHTML;			
			for (var i = 0; i < or_management.length; i++) {
			    or_management[i].style.display = "none";							
				or_management[this.index].style.display = "block";             
			}	
			  		             
		}
	}


 var order_management = $("order_management"); 
var order_form = $("order_form");
var ul = order_form.children;
console.log(ul);
var lis = ul[0].children;
console.log(lis);
// var payment_other = $("payment_others");
var payment_others = document.getElementsByClassName("payment_others");
console.log(payment_others);
  payment_others[0].style.display = "block";
var display_Order = $("display_Order");
for (var i = 0; i < lis.length; i++) {
    lis[i].index =i;
  lis[0].className = "borde";
  lis[i].onclick=function(){
    for (var j = 0; j < lis.length; j++) {
        lis[j].index= j; 
        lis[j].className = "";
        lis[this.index].className = "borde";
   }; 

    for (var k = 0; k < payment_others.length; k++) {
        payment_others[k].index = k;
        // display_Order.style.display = "none";
        payment_others[k].style.display = "none";        
        payment_others[this.index].style.display = "block";
    }; 
       
  }

};



//模拟数据库  
   var Json = {
        "list":[
            {
                "dingdanID":"订单编号：1234442343",
                "m_create_time":"2017-07-12 14:45:00",
              "company":"上海股权分配有限公司",
                "m_label_names":[
                    { 
                    "imgs_pic":"img/foot.png",
                   "textContent":"大哥牌虾味香酥花生豆230g/罐",
                   "number":10,
                   "standard":"黄色",
                   "price":10
                    },
                    { 
                  "imgs_pic":"img/foot.png",
                   "textContent":"大哥牌虾味香酥花生豆230g/罐",
                   "number":20,
                   "standard":"黄色",
                   "price":20
                    },
                    { 
                       "imgs_pic":"img/foot.png",
                   "textContent":"大哥牌虾味香酥花生豆230g/罐",
                   "number":30,
                   "standard":"黄色",
                   "price":50
                    }],
                    "username":"小明",
                   "userPhone":"1223344545",
                   "allMoney":"1000.00",
                   "wate":"待付款",
                   "chakanqing":"查看详情",
                   "looking":"查看详情",
                   "payfor":"付款",
                   "quxiao":"取消订单"
        },
        {
                "dingdanID":"订单编号：11232442343",
                "m_create_time":"2017-07-12 14:45",
               "company":"上海股权分配有限公司",
                "m_label_names":[
                    { 
                    "imgs_pic":"img/foot.png",
                   "textContent":"大哥牌虾味香酥花生豆230g/罐",
                   "number":10,
                   "standard":"黄色",
                   "price":"10"
                    }],
                    "username":"小明",
                   "userPhone":"1223344545",
                   "allMoney":"1000.00",
                   "wate":"待付款",
                   "chakanqing":"查看详情",
                   "looking":"",
                   "payfor":"确定收货",
                   "quxiao":""
        },
        {
                "dingdanID":"订单编号：1234442343",
                "m_create_time":"2017-07-12 14:45",
               "company":"上海股权分配有限公司",
                "m_label_names":[
                    { 
                    "imgs_pic":"img/foot.png",
                   "textContent":"大哥牌虾味香酥花生豆230g/罐",
                   "number":10,
                   "standard":"黄色",
                   "price":"10",
                   "wate":"待付款",
                   "chakanqing":"查看详情",
                   "looking":"查看详情",
                   "payfor":"付款",
                   "quxiao":"取消订单"
                    },
                    { 
                       "imgs_pic":"img/foot.png",
                   "textContent":"大哥牌虾味香酥花生豆230g/罐",
                   "number":10,
                   "standard":"黄色",
                   "price":"10"
                    }
                    ],
                    "username":"小明",
                   "userPhone":"1223344545",
                   "allMoney":"1000.00",
                   "wate":"待付款",
                   "chakanqing":"查看详情",
                   "looking":"查看详情",
                   "payfor":"付款",
                   "quxiao":"取消订单"
        }
        , {
                "dingdanID":"订单编号：1234442343",
                "m_create_time":"2017-07-12 14:45",
               "company":"上海股权分配有限公司",
                "m_label_names":[
                    { 
                    "imgs_pic":"img/foot.png",
                   "textContent":"大哥牌虾味香酥花生豆230g/罐",
                   "number":10,
                   "standard":"黄色",
                   "price":"10",
                   "wate":"待付款",
                   "chakanqing":"查看详情",
                   "looking":"查看详情",
                   "payfor":"付款",
                   "quxiao":"取消订单"
                    },
                    { 
                       "imgs_pic":"img/foot.png",
                   "textContent":"大哥牌虾味香酥花生豆230g/罐",
                   "number":10,
                   "standard":"黄色",
                   "price":"10"
                    }
                    ],
                    "username":"小明",
                   "userPhone":"1223344545",
                   "allMoney":"1000.00",
                   "wate":"待付款",
                   "chakanqing":"查看详情",
                   "looking":"查看详情",
                   "payfor":"付款",
                   "quxiao":"取消订单"
        }
        ]
      }
   // console.log(Json);
	// 下单详情

    var order_table = document.getElementById("order_table");
    
    var date_new = Json.list;
            
    for (var i = 0; i < date_new.length; i++) { 
            var box = document.createElement("div");
        box.className="box";
        box.innerHTML="";
        order_table.appendChild(box); // 创建大盒子

          //订单部分开始
            var dingdan = document.createElement("div");
                dingdan.className="dingdan";
                box.appendChild(dingdan);

            var bianhao = document.createElement("div");
                bianhao.className="bianhao";
                dingdan.appendChild(bianhao);
                bianhao.innerHTML=date_new[i].dingdanID;
            var new_time= document.createElement("div");
                new_time.className="new_time";
                dingdan.appendChild(new_time);
                new_time.innerHTML=date_new[i].m_create_time;

            var companyls = document.createElement("h4");
                companyls.className="companyls";
                dingdan.appendChild(companyls);
                companyls.innerHTML=date_new[i].company;
          //订单部分结束
          //商品显示部分开始
            var sub_div = document.createElement("div");
                 sub_div.className="sub_div";
                 box.appendChild(sub_div);
                
          //大盒子左边的部分  
            var left_box = document.createElement("div");
                sub_div.appendChild(left_box);
                left_box.className="left_box";
                 //创建图片+创建商品名称+单价等
                 //大盒子左边的部分商品的详情部分
            var  date_one=date_new[i].m_label_names;
             var c = 0;
            for (var j = 0; j < date_one.length; j++) {
              box.style.height=date_one.length*100+70+"px";
              var  sub_box_one = document.createElement("div"); 
                 sub_box_one.className="sub_box_one";
                 left_box.appendChild(sub_box_one);
                 var  imgs = document.createElement("img");
                 imgs.className="imgs";
                 sub_box_one.appendChild(imgs);
                 imgs.src=date_one[j].imgs_pic; 

                sub_div.style.height=date_one.length*101+"px";


                 var  textContent =document.createElement("h4");
                      textContent.className="textContent";
                      sub_box_one.appendChild(textContent);
                      textContent.innerHTML=date_one[j].textContent;

                 var  number =document.createElement("p");
                      number.className="number";
                      sub_box_one.appendChild(number);
                      number.innerHTML=date_one[j].number;
                      var a =date_one[j].number; 

                var   price =document.createElement("p");
                      price.className="price";
                      sub_box_one.appendChild(price);
                      price.innerHTML="￥"+date_one[j].price;
                      var b = date_one[j].price;
                      c += a*b;
                     
               
                     
                 console.log(c);

               var    standard =document.createElement("p");
                      standard.className="standard";
                      sub_box_one.appendChild(standard);
                      standard.innerHTML=date_one[j].standard;
            };

                var    center_box= document.createElement("div");
                       center_box.className="center_box";
               //第二个盒子 姓名+电话
               var    new_two =document.createElement("div");
              
                      new_two.className="new_two";
                      sub_div.appendChild(new_two);
                      new_two.appendChild(center_box);
                      new_two.style.height=date_one.length*101+"px";
                var    username =document.createElement("p");
                      username.className="username";
                      center_box.appendChild(username);
                      username.innerHTML=date_new[i].username;


                var   userPhone = document.createElement("p");
                      userPhone.className="userPhone";
                      center_box.appendChild(userPhone);
                      userPhone.innerHTML=date_new[i].userPhone;

                //第三个盒子
                var    center_box1= document.createElement("div");
                       center_box1.className="center_box1";
                var   new_three =document.createElement("div");
                      new_three.className="new_three";
                      sub_div.appendChild(new_three); 
                      new_three.appendChild(center_box1);
                      new_three.style.height=date_one.length*101+"px";     
                var   allMoney = document.createElement("p");
                      allMoney.className="allMoney";
                      center_box1.appendChild(allMoney);
                      allMoney.innerHTML="￥"+c+".00";
                
                //第四个盒子
                var    center_box2= document.createElement("div");
                       center_box2.className="center_box2";
                 var   new_four =document.createElement("div");
                 var chakanqing = document.createElement("a");
                      new_four.className="new_four";
                      chakanqing.href = "deal1.html";
                      chakanqing.className ="chakanqing";
                       chakanqing.innerHTML=date_new[i].chakanqing;
                      center_box2.appendChild(chakanqing);
                      sub_div.appendChild(new_four);
                      new_four.appendChild(center_box2);
                       new_four.style.height=date_one.length*101+"px";  

                var   wate = document.createElement("p");
                      wate.className="wate";
                      wate.innerHTML=date_new[i].wate;                      
                      center_box2.appendChild(wate);
                      console.log(wate);
                      // wate.index=i;
                      console.log(wate.index);


                
                //第五个盒子
                var    center_box3= document.createElement("div");
                      
                       center_box3.className="center_box3";
                var   new_five =document.createElement("div");
                      new_five.className="new_five";
                      sub_div.appendChild(new_five);
                      new_five.appendChild(center_box3);
                      new_five.style.height=date_one.length*101+"px"; 
                      var   buttonss = document.createElement("button");
                      buttonss.className="buttonss";
                      center_box3.appendChild(buttonss);
                      buttonss.innerHTML=date_new[i].payfor;

                var   looking = document.createElement("a");
                      looking.className="looking";
                      center_box3.appendChild(looking);
                      looking.innerHTML=date_new[i].looking;

                var   looking = document.createElement("a");
                      looking.className="looking";
                      looking.href = "deal1.html";
                      center_box3.appendChild(looking);
                      looking.innerHTML=date_new[i].looking;
                      if (date_new[i].looking=="") {
                         looking.style.display = "none"
                         buttonss.style.top = "35px";
                      } else{
                        looking.innerHTML=date_new[i].looking;
                      };


                var   quxiao = document.createElement("p");
                      quxiao.className="quxiao";
                      if (date_new[i].quxiao=="") {
                         quxiao.style.display = "none"
                      } else{
                        quxiao.innerHTML=date_new[i].quxiao;
                      };
                      center_box3.appendChild(quxiao);
                     
          //商品显示部分结束
             // var date = ["wate"];
         
               
//点击的部分开始
            var oNam=document.getElementsByClassName('wate');
            // var table_box=document.getElementsByClassName('box');
            var payment_others4 = $("payment_others4");
            var box = document.getElementsByClassName("box");
            quxiao.index=i;
            box.index = i;
            quxiao.onclick=function(){
               this.parentNode.style.display="none"; 
               oNam[this.index].innerHTML= "已取消";
               table_box1 = box[this.index].cloneNode(true);
               payment_others4.appendChild(table_box1);
              }

                //点击的部分结束
        }
       


             
	
}







