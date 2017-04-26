var dataArry=[];
function fn(dates){
  dataArry=dates.data.shop;
}
function fn1(){
	function f1() {
            my$("box").innerHTML = "";
        }
        var headers = ["ID","商品图片","商品信息","销量价格","状态","商家信息","创建时间 更新时间","操作"];
        //数据
        var scores = {"shop":[
            {"num":1, "subject": "<img src='img/shipin_logo1.png'></img>", "score": "<p>泰国进口零食品&nbsp;小老板脆紫<br/>菜即是靠海苔</p><span>货号：20358</span><span>条形码：20358</span>", "subject1": "<div id='price'>12~30元/件</div><div id='num'>库存：200</div>", "subject2": "上线中", "subject3": "<p class='p1'>上海好未来有限公司</p>", "subject4": "<div id='settime'>2017-12-02 12:00:00</div><div id='updatetime'>2017-12-02 12:00:00</div>","subject5":"<div id='leave'>下线</div><div class='opt'>查看详情</div>"},
            {"num":2, "subject": "<img src='img/shipin_logo1.png'></img>", "score": "<p>泰国进口零食品&nbsp;小老板脆紫<br/>菜即是靠海苔</p><span>货号：20358</span><span>条形码：20358</span>", "subject1": "<div id='price'>12~30元/件</div><div id='num'>库存：200</div>", "subject2": "已下线", "subject3": "<p class='p1'>上海好未来有限公司</p>", "subject4": "<div id='settime'>2017-12-02 12:00:00</div><div id='updatetime'>2017-12-02 12:00:00</div>","subject5":"<div class='opt opt1' id='edts'>编辑</div><div class='' id='online'>上线</div><div class='opt'>查看详情</div><div class='opt opt_'>删除</div>"},
            {"num":3, "subject": "<img src='img/shipin_logo1.png'></img>", "score": "<p>泰国进口零食品&nbsp;小老板脆紫<br/>菜即是靠海苔</p><span>货号：20358</span><span>条形码：20358</span>", "subject1": "<div id='price'>12~30元/件</div><div id='num'>库存：200</div>", "subject2": "审核中", "subject3": "<p class='p1'>上海好未来有限公司</p>", "subject4": "<div id='settime'>2017-12-02 12:00:00</div><div id='updatetime'>2017-12-02 12:00:00</div>","subject5":"<div class='opt opt1'>编辑</div><div class='opt'>查看详情</div><div class='opt opt_'>删除</div>"},
            {"num":4, "subject": "<img src='img/shipin_logo1.png'></img>", "score": "<p>泰国进口零食品&nbsp;小老板脆紫<br/>菜即是靠海苔</p><span>货号：20358</span><span>条形码：20358</span>", "subject1": "<div id='price'>12~30元/件</div><div id='num'>库存：200</div>", "subject2": "<p class='p1'>审核失败</p><p class='p1' id='p2'>图片不清晰</p>", "subject3": "<p class='p1'>上海好未来有限公司</p>", "subject4": "<div id='settime'>2017-12-02 12:00:00</div><div id='updatetime'>2017-12-02 12:00:00</div>","subject5":"<div class='opt opt1'>编辑</div><div class='opt'>查看详情</div><div class='opt opt_'>删除</div>"},
            {"num":5, "subject": "<img src='img/shipin_logo1.png'></img>", "score": "<p>泰国进口零食品&nbsp;小老板脆紫<br/>菜即是靠海苔</p><span>货号：20358</span><span>条形码：20358</span>", "subject1": "<div id='price'>12~30元/件</div><div id='num'>库存：200</div>", "subject2": "草稿箱", "subject3": "<p class='p1'>上海好未来有限公司</p>", "subject4": "<div id='settime'>2017-12-02 12:00:00</div><div id='updatetime'>2017-12-02 12:00:00</div>","subject5":"<div class='opt opt1'>编辑</div><div class='opt'>查看详情</div><div class='opt opt_'>删除</div>"},
            {"num":3, "subject": "<img src='img/shipin_logo1.png'></img>", "score": "<p>泰国进口零食品&nbsp;小老板脆紫<br/>菜即是靠海苔</p><span>货号：20358</span><span>条形码：20358</span>", "subject1": "<div id='price'>12~30元/件</div><div id='num'>库存：200</div>", "subject2": "审核中", "subject3": "<p class='p1'>上海好未来有限公司</p>", "subject4": "<div id='settime'>2017-12-02 12:00:00</div><div id='updatetime'>2017-12-02 12:00:00</div>","subject5":"<div class='opt opt1'>编辑</div><div class='opt'>查看详情</div><div class='opt opt_'>删除</div>"},
            {"num":4, "subject": "<img src='img/shipin_logo1.png'></img>", "score": "<p>泰国进口零食品&nbsp;小老板脆紫<br/>菜即是靠海苔</p><span>货号：20358</span><span>条形码：20358</span>", "subject1": "<div id='price'>12~30元/件</div><div id='num'>库存：200</div>", "subject2": "<p class='p1'>审核失败</p><p class='p1' id='p2'>图片不清晰</p>", "subject3": "<p class='p1'>上海好未来有限公司</p>", "subject4": "<div id='settime'>2017-12-02 12:00:00</div><div id='updatetime'>2017-12-02 12:00:00</div>","subject5":"<div class='opt opt1'>编辑</div><div class='opt'>查看详情</div><div class='opt opt_'>删除</div>"},
            {"num":5, "subject": "<img src='img/shipin_logo1.png'></img>", "score": "<p>泰国进口零食品&nbsp;小老板脆紫<br/>菜即是靠海苔</p><span>货号：20358</span><span>条形码：20358</span>", "subject1": "<div id='price'>12~30元/件</div><div id='num'>库存：200</div>", "subject2": "草稿箱", "subject3": "<p class='p1'>上海好未来有限公司</p>", "subject4": "<div id='settime'>2017-12-02 12:00:00</div><div id='updatetime'>2017-12-02 12:00:00</div>","subject5":"<div class='opt opt1'>编辑</div><div class='opt'>查看详情</div><div class='opt opt_'>删除</div>"}
            
          ]};

        var table =  createTable(headers, scores.shop);

        //1 创建表格
        function createTable(headers, datas) 
        {
            var table = createTHead(headers);
            createTBody(table,datas);
            return table;
        }

        //2 创建表头
        function createTHead(headers) 
        {
            //1 创建表格
            var table = document.getElementById("tb");
            if(table) {
                //
                my$("box").removeChild(table);
            }

            table = document.createElement("table");
            document.getElementById("box").appendChild(table);

            table.style.className = "table";

            table.cellSpacing = "0px";
            table.cellPadding = "0px";
            table.style.width = "800px";
            // tr.style.backgroundColor="#5f5f5f";
            table.id = "tb";

            //IE7以前，表头，必须放在thead中才会显示
            var thead = document.createElement("thead");
            table.appendChild(thead);

            var tr = document.createElement("tr");
            thead.appendChild(tr);
            tr.style.height = "50px";
            tr.style.width = "752px";
            tr.style.fontSize="12px";
            tr.style.fontWeight="normal";
            tr.style.borderBottom="solid 2px rgb(245,245,245)";

            for(var i = 0; i < headers.length; i++) 
            {
                var header = headers[i];

                var th = document.createElement("th");
                th.style.paddingLeft="10px";
                tr.appendChild(th);
                setInnerText(th, header);
            }
            return table;
        }

        function createTBody(tb, datas) 
        {

            var tbody = document.createElement("tbody");
            tb.appendChild(tbody);
            tbody.style.textAlign = "center";

            for(var i = 0; i < datas.length; i++) 
            {
                var data = datas[i];
                tr = document.createElement("tr");
                tr.id = "tr";
                for (var j = 0 ; j < 8 ; j++) 
                {
                      var td = document.createElement('td');
                      tr.appendChild(td);
                }
                tr.children[0].innerHTML=i+1;
                tr.children[1].innerHTML=scores.shop[i].subject;
                tr.children[2].innerHTML=scores.shop[i].score;
                tr.children[3].innerHTML=scores.shop[i].subject1;
                tr.children[4].innerHTML=scores.shop[i].subject2;
                tr.children[5].innerHTML=scores.shop[i].subject3;
                tr.children[6].innerHTML=scores.shop[i].subject4;
                tr.children[7].innerHTML=scores.shop[i].subject5;

                tr.children[0].style.paddingLeft="5px";
                tr.children[1].style.paddingLeft="10px";
    
                // console.log(tr.children[1].children[0]);
                
                tr.children[1].children[0].style.width="80px";
                tr.children[1].children[0].style.height="80px";

                tr.children[2].children[0].style.width="150px";
                tr.children[2].children[0].style.height="72px";

                tr.children[2].children[0].style.fontSize="12px";
                tr.children[2].children[1].style.fontSize="12px";
                tr.children[2].children[2].style.fontSize="12px";
                
                td.style.paddingLeft = "15px";
                td.style.paddingRight = "20px";

                tbody.appendChild(tr);
            }   

        var editor = document.getElementsByClassName("opt1");
        var deletes=document.getElementsByClassName("opt_");


       for (var i = 0; i < deletes.length; i++) 
       {    
            deletes[i].index = i ;
            deletes[i].onclick = (function (i) 
            {   
                return function  () 
                {
                
                    console.log(scores.shop);
                    scores.shop.splice(this.index, 1);
                    // this.parentNode.parentNode.remove();
                      console.log(scores.shop);
                 createTable(headers, scores.shop);
                }
                 
           })(i);

       editor[i].onclick=function()
       {
        alert("跳转编辑页")
        } 

      };
  }

  var online=document.getElementById('online');
  var box1=document.getElementById('box1');
  online.style.color="red";
  online.onclick=function(){
      box1.style.display="block";

      // pageTurning()
  }
pageTurning();
// 商品状态
function pageTurning(){
   var condtion = document.getElementById('condtion');

    var spans = condtion.children;
    
    var ta_box = document.getElementById("center_right");
    var tea_box=document.getElementsByClassName('ta_box');
  
    for (var i = 0; i < spans.length; i++) 
    {   
        spans[i].index = i ;
        spans[i].onclick = function () 
        { 
          for (var i = 0; i < tea_box.length; i++) 
          {
            spans[i].style.borderBottom = "none";
            tea_box[i].style.display = "none";                    
          }
         spans[this.index].style.borderBottom = "2px black solid" ;
         tea_box[this.index].style.display = "block";
                     
        }

    } 
}
    
var p_=document.getElementById('btn')
p_.onclick=function(){
    p_.style.border="none";
    alert("跳转添加商品页面");
}
    var Offlines = document.getElementById("leave");
    var box2=document.getElementById('box2');
    // console.log(Offlines);
    Offlines.style.cursor = "pointer";

    Offlines.style.color = "skyblue";

    var pop_up = document.getElementById("pop_up");

    var close_all = document.getElementById("close_all");
    var sure = document.getElementById("sure");
    var cancel = document.getElementById("cancel");
    
    var that ;

    // 弹出 管理框
       Offlines.onclick = function () 
        {
            pop_up.style.display = "block";
            that = this.parentNode.parentNode.parentNode;
            // console.log(that);

        }

    sure.onclick = function () 
    {
        pop_up.style.display = "none";
        that.remove();
        box2.style.display="block";
    }

    close_all.onclick = function () 
    {
        pop_up.style.display = "none";
    }
    
    cancel.onclick = function () 
    {
        pop_up.style.display = "none";
    }  


    //动态创建列表
        var lists=document.getElementById('box1');
        creatCell(dataArry);
        function creatCell(dataArry){
          lists.innerHTML="";
          for (var i = 0; i < dataArry.length; i++) {
            var sub_div=document.createElement("div");
            sub_div.className="sub-div";
            lists.appendChild(sub_div);

            var number=document.createElement('div');
            number.innerHTML=i+1;
            number.className="num";
            sub_div.appendChild(number);

            var content=document.createElement('div');
            content.innerHTML=dataArry[i].name;
            content.className="contents";
            sub_div.appendChild(content);
            content.id="show";

            var revise=document.createElement('div');
            revise.innerHTML=dataArry[i].emand;
            revise.className="revise";
            sub_div.appendChild(revise);
            revise.onclick=function(){
            liu_manage.style.display="block";
            right_list.style.opacity=0;
            }

            var del=document.createElement('div');
            del.innerHTML=dataArry[i].del;
            del.className="del";
            sub_div.appendChild(del);
            del.onclick=function(){
            dataArry.splice(this.index,1);
            creatCell(dataArry);

            }
          }
        }
}
