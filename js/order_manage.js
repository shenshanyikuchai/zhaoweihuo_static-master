function order() {
  var allOrder = getClass('order'); //获取两个页面的DIV;
  var clickOrder = $('order_manage'); //获取菜单栏“订单管理”li
  var service = getClass('service'); //获取 下面服务部分的div;
  var help = getClass('help'); // 获取help 部分的div ;
  var service_itm = getClass("service_itm");
  clickOrder.onclick = function() {
    clickOrder.style.backgroundColor = "rgb(203,57,61)"; //点击按钮的颜色;
    allOrder[0].style.display = "block";
   
    // service[1].children.color="black";
  }
}

// 切换栏效果 切换teb
function change_teb() {
  var cloud = $('cloud'); //获取下划线；
  var order_teb = $('order_teb');
  var orderLis = order_teb.children[1].children;
  var frist_order = $("first_order");
  var allBox = frist_order.children;

  for (var i = 0; i < orderLis.length; i++) {

    orderLis[i].index = i;
    allBox[i].style.display = "none";
    allBox[0].style.display = "block";
    orderLis[i].onclick = function() {
      //让所有的 btn 类名清空
      var target = this.offsetLeft;
      cloud.style.left = target + "px";
      for (var j = 0; j < allBox.length; j++) {
        allBox[j].index = j;
        allBox[j].style.display = "none";
        allBox[this.index].style.display = "block";
      }
    }
  }
}

// 模拟数据库，动态创建各项商品开始

var date_new = [],
all_data = new Array();
function fun(data_all) {
  data_new = data_all.data.seller;
  all_data = data_all.data.seller;
  len = all_data.length;
  console.log(len);
}

function dataDetail() {
  var firstOrder = document.getElementById("firstOrder");
  var num = 0;
  var each= 5;
  var helpArry = data_new.slice(num,each);
  creatCell(helpArry);
  function creatCell(date_new) {
      firstOrder.innerHTML="";
    for (var i = 0; i < date_new.length; i++) {
      // 创建第一个商家大盒子
      var first_div = document.createElement("div");
      first_div.className = "first_div";
      firstOrder.appendChild(first_div);

      // 创建第一个商家大盒子里面的顶部
      var sup_div = document.createElement("div");
      sup_div.className = "sup_div";
      first_div.appendChild(sup_div);

      // 创建第一个商家大盒子里面的顶部的订单编号
      var orderNum = document.createElement("div");
      orderNum.innerHTML = date_new[i].m_ID;
      orderNum.className = "orderNum";
      sup_div.appendChild(orderNum);

      // 创建第一个商家大盒子里面的顶部的日期
      var datas = document.createElement("div");
      datas.innerHTML = date_new[i].m_create_time;
      datas.className = "orderNum";
      sup_div.appendChild(datas);

      // 创建第一个商家大盒子里面的顶部的公司名称
      var seller = document.createElement("div");
      seller.innerHTML = date_new[i].m_seller_name;
      seller.className = "orderNum01";
      sup_div.appendChild(seller);

     //创建第一个商家大盒子里面的顶部的公司图标
      var seller_photo = document.createElement("img");
      seller_photo.src = date_new[i].m_seller_photo;
      seller_photo.className = "seller_photo";
      seller.appendChild(seller_photo);

      // 创建第一个商家大盒子里面的底部
      var sub_div = document.createElement("div");
      sub_div.className = "sub_div";
      first_div.appendChild(sub_div);
        if(i<date_new.length-1){
          sub_div.style.marginBottom="20px";
        }
      // 创建第一个商家大盒子里面的底部的左边商家信息的盒子
      var sub_left_div = document.createElement("div");
      sub_left_div.className = "sub_left_div";
      sub_div.appendChild(sub_left_div);

      // 给每个sub_div盒子添加详细的商家信息
      var z = 0,sum=0;
      var details_arry = date_new[i].m_label_names[0].m_detial;
      for (var j = 0; j < details_arry.length; j++) {
        var detail_div = document.createElement("div");
        detail_div.className = "detail_div";
        sub_left_div.appendChild(detail_div);
        sum=details_arry.length;
        // 给盒子加边框
        if (j < details_arry.length - 1) {
          detail_div.style.borderBottom = "1px solid #ccc";
        }
        detail_div.style.height = details_arry * 100 + "px";

        // 给每个sub_div盒子添加详细的图片
        var detail_img = document.createElement("img");
        detail_img.src = details_arry[j].m_image_url;
        detail_img.className = "detail_img";
        detail_div.appendChild(detail_img);

        // 给每个sub_div盒子添加详细的标题
        var detail_title = document.createElement("div");
        detail_title.innerHTML = details_arry[j].m_name;
        detail_title.className = "detail_title";
        detail_div.appendChild(detail_title);

        // 给每个sub_div盒子添加详细的单价
        var detail_per = document.createElement("div");
        detail_per.innerHTML = details_arry[j].m_per;
        detail_per.className = "detail_per";
        detail_div.appendChild(detail_per);

        // 给每个sub_div盒子添加详细的标准
        var detail_standard = document.createElement("div");
        detail_standard.innerHTML = details_arry[j].m_standard;
        detail_standard.className = "detail_standard";
        detail_div.appendChild(detail_standard);

        // 给每个sub_div盒子添加详细的价格
        var detail_price = document.createElement("div");
        detail_price.innerHTML = details_arry[j].m_price;
        detail_price.className = "detail_price";
        detail_div.appendChild(detail_price);
        var o = details_arry[j].m_price.substring(1);
        
        // 给每个sub_div盒子添加详细的数量
        var detail_number = document.createElement("div");
        detail_number.innerHTML = details_arry[j].m_number;
        detail_number.className = "detail_number";
        detail_div.appendChild(detail_number);
        var p = parseInt(details_arry[j].m_number);
      };
      // 创建第一个商家大盒子里面的底部的中间的盒子
      var sub_middle_div = document.createElement("div");
      sub_middle_div.className = "sub_middle_div";
      sub_div.appendChild(sub_middle_div);
      sub_middle_div.style.height = details_arry.length * 100 + "px";

      // 创建第一个商家大盒子里面的底部的中间的盒子里的姓名
      var customerName = document.createElement("div");
      customerName.className = "customerName";
      customerName.innerHTML = date_new[i].m_label_names[0].m_customer_name;
      sub_middle_div.appendChild(customerName);

      // 创建第一个商家大盒子里面的底部的中间的盒子里的号码
      var tel = document.createElement("div");
      tel.className = "tel";
      tel.innerHTML = date_new[i].m_label_names[0].m_tel;
      sub_middle_div.appendChild(tel);
      z=p*o*sum;
      // 创建第一个商家大盒子里面的底部的总价盒子
      var money = document.createElement("div");
      money.className = "money";
      sub_div.appendChild(money);
      money.style.height = details_arry.length * 100 + "px";

      // 创建第一个商家大盒子里面的底部的总价内容
      var m_money = document.createElement("div");
      m_money.className = "m_money";
      m_money.innerHTML = "￥"+z;  
      money.appendChild(m_money);

      // 创建第一个商家大盒子里面的底部的状态的盒子
      var status_div = document.createElement("div");
      status_div.className = "status_div";
      sub_div.appendChild(status_div);
      status_div.style.height = details_arry.length * 100 + "px";

      // 创建第一个商家大盒子里面的底部的状态的盒子付款状态
      var status = document.createElement("div");
      status.className = "status";
      status.innerHTML = date_new[i].m_label_names[0].m_status;
      status_div.appendChild(status);

      // 创建第一个商家大盒子里面的底部的状态的盒子查看详情
      var check = document.createElement("a");
      check.className = "check";
      check.innerHTML = "查看详情";
      status_div.appendChild(check);

      // 创建第一个商家大盒子里面的底部的最右边的盒子
      var right_div = document.createElement("div");
      right_div.className = "right_div";
      sub_div.appendChild(right_div);
      right_div.style.height = details_arry.length * 100 + "px";

      if (status.innerHTML == "待付款") {
        // 创建第一个商家大盒子里面的底部的付款按钮
        var pay_btn = document.createElement("button");
        pay_btn.className = "pay_btn";
        pay_btn.id = "pay_btn";
        pay_btn.innerHTML = "付款";
        right_div.appendChild(pay_btn);

        pay_btn.onclick = function() {
          var service = getClass('service');
          console.log(service);
          service[0].children.color = "black";
          allOrder[0].style.display = "none";
        }

        // 创建第一个商家大盒子里面的底部的查看详情按钮
        var checked = document.createElement("a");
        checked.className = "checked";
        checked.innerHTML = "查看详情";
        right_div.appendChild(checked);

        // 创建第一个商家大盒子里面的底部的取消订单按钮
        var cancel = document.createElement("a");
        cancel.className = "cancel";
        cancel.innerHTML = "取消订单";
        right_div.appendChild(cancel);
        cancel.onclick=function(){
              var login = document.getElementById("login");
            var mask = document.getElementById("mask");
            var box = document.getElementById("box");
            var zhangspace = document.getElementById("zhangspace");
               // 当我们点击登录，会弹出灰色的大盒子和白色的小盒子
                mask.style.display = "block";
                box.style.display = "block";
            var ta=this;
           // 事件源 span x
            var close_all = document.getElementById("close_all");
            zhangspace.onclick=function(){
                mask.style.display = 'none';
                box.style.display = "none";
                cancel.style.display="none";
                checked.style.display="none";
                pay_btn.style.display="none";
                date_new[0].m_label_names[0].m_status="已取消";
                 creatCell(helpArry);
                   }
            close_all.onclick = function(){
                mask.style.display = 'none';
                box.style.display = "none";
                
  
            }
            var zhangnav=document.getElementById("zhangnav");
            zhangnav.onclick=function(){
              mask.style.display = "none";
                box.style.display = "none";
            }
         }

      } else if (status.innerHTML == "已发货") {
        // 创建第一个商家大盒子里面的底部的查看物流按钮
        var logistics = document.createElement("button");
        logistics.className = "logistics";
        logistics.innerHTML = "查看物流";
        right_div.appendChild(logistics);

        // 创建第一个商家大盒子里面的底部的确定收货按钮
        var confirm = document.createElement("button");
        confirm.className = "confirm";
        confirm.innerHTML = "确定收货";
        right_div.appendChild(confirm);
      };

    }
    
  }

  // 指定跳转页面开始
  var page_number = document.getElementById("page_number");
  var pages = Math.ceil(len/each);
  var pages_div = document.createElement("div");
  pages_div.className = "pages_div";
  page_number.appendChild(pages_div);


  var pre_page = document.createElement("div");
  pre_page.innerHTML="上一页";
  pre_page.className="pre_page";
  pages_div.appendChild(pre_page);

  pre_page.onclick=function(){
              num-=each;
              var k=num/each;
            if(num<=0){
              num=0;
              pre_page.style.color="#ccc";
             }else{
              pre_page.style.color="#000";
             }
             if(num==each*(pages-1)){
              next_page.style.color="#ccc";
             }else{
              next_page.style.color="#000";
             }
            if (k+1>0) {
            var helpArry = all_data.slice(num,num+each);
            creatCell(helpArry);  
            for(var l=0;l<ulLis.length;l++){
            ulLis[l].className="";
             }
            ulLis[k].className="current_color";
             }
  }
  
  var ul=document.createElement("ul");
  var that=0;
  pages_div.appendChild(ul);
  pre_page.style.color="#ccc";

  for (var i = 0; i < pages; i++) {
    var page_li = document.createElement("li");
    page_li.className ="page_li";
    console.log(page_li);
    page_li.innerHTML=i+1;
    ul.appendChild(page_li);
     }


    ul.children[0].className="current_color";
    var ulLis=ul.children;

    for(var i=0;i<ulLis.length;i++){
         ulLis[i].index=i;
         ulLis[i].onclick=function(){
         for(var j=0;j<ulLis.length;j++){ulLis[j].className="";}
          this.className="current_color";
          var helpArry = all_data.slice(this.index*each,this.index*each+each);
          creatCell(helpArry);
          num=this.index*5;
          if(this.index==0){pre_page.style.color="#ccc";}
          else{pre_page.style.color="#000";}
          if(this.index==ulLis.length-1) {next_page.style.color="#ccc";}
          else{next_page.style.color="#000";}
       }

    }
  var next_page = document.createElement("div");
  next_page.innerHTML="下一页";
  next_page.className="next_page";
  pages_div.appendChild(next_page);
  
  next_page.onclick=function()
  {
      num+=each;
     console.log(num)
     if (num>each*(pages-1)) {
             num-=each;      
        }
             if(num==each*(pages-1)){
              next_page.style.color="#ccc";
             }else{
              next_page.style.color="#000";
             }
      if(num<=0){
              pre_page.style.color="#ccc";
             }else{
              pre_page.style.color="#000";
             }
      var k=num/each;
      if((k+1)<=pages)
      { 
          var helpArry = all_data.slice(num,num+each);
          creatCell(helpArry);
          for(var l=0;l<ulLis.length;l++)
            {ulLis[l].className="";
        }
          ulLis[k].className="current_color";
          
     }
}

           var Dg_Page = document.getElementById("Dg_Page");
           Dg_Page.innerHTML=pages;
           var Dg_Btn=document.getElementById("Dg_Btn");
           var page=document.getElementById("Page");
           
           Dg_Btn.onclick=function()
           {
                var m=page.value;
                if (m>0&&m<=pages)
                 {
                    for(var j=0;j<ulLis.length;j++)
                    {
                      ulLis[j].className="";
                      
                    }
                   ulLis[m-1].className="current_color";
                    var helpArry = all_data.slice((m-1)*each,(m-1)*each+each);
                    creatCell(helpArry);
                }  else{return ;}
        }
       }  // 指定跳转页面结束
  

function payFor() {
  var titleOrder = getClass("order_title");
  var allOrder = getClass("main_order");
  var order_pay = $('order_pay');
   console.log(order_pay);
  allOrder[0].style.display = "none";
  titleOrder[0].style.display = "none";
  order_pay.style.display = "block";
}

window.onload = function() {
  order();
  change_teb();
  dataDetail();
  var pay_btn = $('pay_btn');
  pay_btn.onclick= function(){
    payFor();
  }
}