

	  var prev=document.getElementById('prev');
    var next=document.getElementById('next');
    var button=document.getElementById("liu_button").getElementsByTagName('span');
    var index=1;
    // 上下页
    prev.onclick=function (){
        index -=1;
        if(index<1){
            index=5;
        }
        buttonsShow();        
      }
      next.onclick=function (){
        index +=1;
        if(index>5){
            index=1;
        }
        buttonsShow(); 
      }
       //当鼠标点击到某个页面时，点击上下一页会在相应的位置继续翻转页面
      for (var i = 0; i < button.length; i++)
       {
                (function(i) {
                    button[i].onclick = function() {
                        var clickIndex = parseInt(this.getAttribute('index'));
                        index = clickIndex; 
                        buttonsShow();
                    }
                })(i)
      }

//给相应的页面添加相应的背景色代替跳转页面
    function buttonsShow(){
        for(var i=0;i<button.length;i++)
        {
            if(button[i].className=="on")
            {
                button[i].className=" ";
            }
        }
        button[index-1].className="on";        
    }

    // 输入 跳转
    var ok = document.getElementById("ok");
    var it = document.getElementById('input');
    
    function  trun() 
    {                      
          var i = it.value;
          i--;
          for(var j=0;j<5;j++)
          {
            button[j].className="";
          }
          button[i].className = "on";
          index = i +1;
      
    }

    ok.onclick = function  () 
    {   
        trun();
        
    }

    //键盘上的上下页面翻转
    document.onkeydown = function (event) 
    {
        var event = event || window.event;

        if (event.keyCode == 13 || event.keyCode == 108) 
        {
            trun();
        }
    }


    // 输入跳转之后再 点击上下页

    // 商品状态
    var condtion = document.getElementById('condtion');

    var spans = condtion.children;
    
    var ta_box = document.getElementById("center_right").getElementsByClassName('ta_box');
  
    for (var i = 0; i < spans.length; i++) 
    {   
        spans[i].index = i ;
        spans[i].onclick = function () 
        { 
          for (var i = 0; i < ta_box.length; i++) 
          {
            spans[i].style.borderBottom = "none";
            ta_box[i].style.display = "none";                    
          }
         this.style.borderBottom = "2px black solid" ;
         ta_box[this.index].style.display = "block";
                     
        }

    }





