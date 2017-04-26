var provinceList;
     // 获取本地的JSON文件
     function fun(date){
        provinceList = date.city;
     }
window.onload = function () {
	var upBtn = document.getElementById('up_btn');
	var upInp = document.getElementById('up_file');
	var showTip = document.getElementById('show_tip');
	var showPic = document.getElementById('show_img');
	
function imgPreview(fileDom,id,id1){
    if (window.FileReader) {
        var reader = new FileReader();
    } else {
        alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
    }
    //获取文件
    var file = fileDom.files[0];
    // 正则表达式
    var tis=/^\b.+\b\.\bpng|jpeg|gif\b$/i;
    if(file.size>=1024*1024){
        id1.innerHTML='图片太大了';
        id1.style.color='red';
        return;
    }
    else if(!tis.test(file.name)){
        id1.innerHTML='图片格式不正确请上传JPEG/GIF/PNG格式';
        id1.style.color='red';
        return; 
    }
    else{
        id1.innerHTML='图片格式支持JPEG/GIF/PNG格式，大小1M以内';
        id1.style.color='#A2A2A2';
        var imageType = /^image\//;
        //是否是图片
        if (!imageType.test(file.type)) {
            alert("请选择图片！");
            return;
        }
        reader.onload = function(e) {
            //获取图片dom
            id.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }  
}

	
	
	
    var addressInit = function(_cmbProvince, _cmbCity, _cmbArea, defaultProvince, defaultCity, defaultArea)
{
    var cmbProvince = document.getElementById(_cmbProvince);
    var cmbCity = document.getElementById(_cmbCity);
    var cmbArea = document.getElementById(_cmbArea);
    function cmbSelect(cmb, str)
    {
        for(var i=0; i<cmb.options.length; i++)
        {
            if(cmb.options[i].value == str)
            {
                cmb.selectedIndex = i;
                return;
            }
        }
    }
    function cmbAddOption(cmb, str, obj)
    {
        var option = document.createElement("OPTION");
        cmb.options.add(option);
        option.innerText = str;
        option.value = str;
        option.obj = obj;
    }
    function changeCity()
    {
        cmbArea.options.length = 0;
        if(cmbCity.selectedIndex == -1)return;
        var item = cmbCity.options[cmbCity.selectedIndex].obj;
        for(var i=0; i<item.areaList.length; i++)
        {
            cmbAddOption(cmbArea, item.areaList[i], null);
        }
        cmbSelect(cmbArea, defaultArea);
    }
    function changeProvince()
    {
        cmbCity.options.length = 0;
        cmbCity.onchange = null;
        if(cmbProvince.selectedIndex == -1)return;
        var item = cmbProvince.options[cmbProvince.selectedIndex].obj;
        for(var i=0; i<item.cityList.length; i++)
        {
            cmbAddOption(cmbCity, item.cityList[i].name, item.cityList[i]);
        }
        cmbSelect(cmbCity, defaultCity);
        changeCity();
        cmbCity.onchange = changeCity;
    }
   


    for(var i=0; i<provinceList.length; i++)
    {
        cmbAddOption(cmbProvince, provinceList[i].name, provinceList[i]);
    }
    cmbSelect(cmbProvince, defaultProvince);
    changeProvince();
    cmbProvince.onchange = changeProvince;
} 
 addressInit('setProvince', 'setCity', 'setArea', '贵州', '贵阳市', '乌当区');
}
