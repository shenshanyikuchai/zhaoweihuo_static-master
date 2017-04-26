window.onload = function(){
function $(id){return document.getElementById(id);}
    //采购商与提供商的切换
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

  
	fun();
	GetTime();

	function $(id){return document.getElementById(id);}
  var order_bigbox = $("order_bigbox");
  var management = $("management");
  var Wul = $("Wul");
   var gyx_box =$("gyx_box"); 
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
// var order_form = $("order_form");
// var ul = order_form.children;
// for (var i = 0; i < 6; i++) {
// 	var lis = document.createElement("li");
// 	console.log(lis);
    
// };
         var  json={
                    "q":[
                           {"img":"img/zhanshi.png",
                                      "p1":"大哥牌虾味香酥花生豆230g/罐",
                                      "p2":"规格：黄色",
                                      "wenzi3":"￥12.90",
                                      "wenzi4":10,
                                      "wenzi5":"￥12.90"},
                           {"img":"img/zhanshi.png",
                                      "p1":"大哥牌虾味香酥花生豆230g/罐",
                                      "p2":"规格：黄色",
                                      "wenzi3":"￥12.90",
                                      "wenzi4":10,
                                      "wenzi5":"￥12.90"}
                        ]
                }
            createCell();  
            console.log(json.q[0].wenzi5) ;  

           
            console.log(gyx_box);  

      function createCell(){
       var num=0;          
        for (var i = 0; i <json.q.length; i++) {       
        var sub_div =document.createElement("div");
        sub_div.className = "sub_div";
        gyx_box.appendChild(sub_div);

        var sub_img = document.createElement("img");
        sub_img.src =json.q[i].img;
        sub_img.className = "sub_img";
        sub_div.appendChild(sub_img);

        var p1 = document.createElement("p");
        p1.innerHTML = json.q[i].p1;
        p1.className = "p1";
        sub_div.appendChild(p1);
        var p2 = document.createElement("p");
        p2.innerHTML = json.q[i].p2;
        p2.className = "p2";
        sub_div.appendChild(p2);
        var p3 = document.createElement("p");
        p3.innerHTML = json.q[i].wenzi3;
        p3.className = "p3";
        sub_div.appendChild(p3);
        var p4 = document.createElement("p");
        p4.innerHTML = json.q[i].wenzi4;
        p4.className = "p4";
        sub_div.appendChild(p4);
         var p5 = document.createElement("p");
        p5.innerHTML = json.q[i].wenzi5;
        p5.className = "p5";
        sub_div.appendChild(p5);
    
    var pre_price =json.q[i].wenzi5.substring(1);
    console.log(pre_price);

    var num_c=json.q[i].wenzi4;
    num+=num_c;
    console.log(num);
    // var num = json.q.length;
    var money=pre_price*num;  
    var allmoney= money + 10; 
    var subtotal=document.getElementById('subtotal');
    var total=document.getElementById('total');
    var jian_num=document.getElementById('jian_num');
    subtotal.innerHTML="￥"+money;
    total.innerHTML="￥"+allmoney;
    jian_num.innerHTML=num;
    }
  }
}





