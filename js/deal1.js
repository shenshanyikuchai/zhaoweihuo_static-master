       
          
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
          function fun(){
            var take_one = document.getElementById('take_one');
            var take_two = document.getElementById('take_two');
            var data = {
              "take_one":'收货人：彭于晏&nbsp;&nbsp;联系电话：18273829172&nbsp;&nbsp;地址：上海市浦东新区东方金融元2981号5楼D',
              "take_two":'您的收获码是【20160101】，请妥善保管。收到货后请将收获码告知供应商，以便完成订单。'
            }
            take_one.innerHTML = data.take_one;
            take_two.innerHTML = data.take_two;
            
            
          } 


          
          function getTotal() {
          var seleted = 0;
          var price = 0;
          var HTMLstr = '';
          for (var i = 0, len = tr.length; i < len; i++) {
            if (tr[i].getElementsByTagName('input')[0].checked) {
              tr[i].className = 'on';
              seleted += parseInt(tr[i].getElementsByTagName('input')[1].value);
              price += parseFloat(tr[i].cells[4].innerHTML);
              HTMLstr += '<div><img src="' + tr[i].getElementsByTagName('img')[0].src + '"><span class="del" index="' + i + '">取消选择</span></div>'
            }
            else {
              tr[i].className = '';
            }
          } 
          selectedTotal.innerHTML = seleted;
          priceTotal.innerHTML = price.toFixed(2);
          selectedViewList.innerHTML = HTMLstr;
        
          if (seleted == 0) {
            foot.className = 'foot';
          }
        } 

         