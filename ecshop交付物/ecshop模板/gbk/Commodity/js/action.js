function $(element) {
    return document.getElementById(element);
}
//切屏--是按钮，_v是内容平台，_h是内容库
function reg(str){
  var bt=$(str+"_b").getElementsByTagName("h2");
  for(var i=0;i<bt.length;i++){
    bt[i].subj=str;
    bt[i].pai=i;
    bt[i].style.cursor="pointer";
    bt[i].onclick=function(){
      $(this.subj+"_v").innerHTML=$(this.subj+"_h").getElementsByTagName("blockquote")[this.pai].innerHTML;
      for(var j=0;j<$(this.subj+"_b").getElementsByTagName("h2").length;j++){
        var _bt=$(this.subj+"_b").getElementsByTagName("h2")[j];
        var ison=j==this.pai;
        _bt.className=(ison?"":"h2bg");
      }
    }
  }
  $(str+"_h").className="none";
  $(str+"_v").innerHTML=$(str+"_h").getElementsByTagName("blockquote")[0].innerHTML;
}

function colorStyle(id,color1,color2){
  var elem = document.getElementById(id);
  if(elem.getAttribute("id") == id){
      //elem.className = color1;
      if(elem.className == color1)
           elem.className = color2;
        else
           elem.className = color1; 
    }
}

function articleSize(size,lineheight){
var article = document.getElementById("article");
article.style.fontSize = size+"px";
article.style.lineHeight = lineheight+"px";
}

//goods.dwt
function initAutoFocus(){
    autoShiftFocus("focustab", "a", "focuscont", "div");
    function autoShiftFocus(tabsid, tabstagname, contentid, contenttagname){
        //var autotpc = setInterval(autoSlideTopic, 3000);//每隔3秒运行一次autoSlideTopic
        var tabs = document.getElementById(tabsid).getElementsByTagName(tabstagname);//提取a标签
        tabs[0].className = "act";
        var contents = document.getElementById(contentid).getElementsByTagName(contenttagname);//提取id为focuscont下的div标签
        contents[0].style.display = "block";
        var cur_index_num = 0;
        if (tabstagname == "a") {
            for (var a = tabs.length - 1; a >= 0; a--) {
                tabs[a].onclick = function(){
                    return false;
                }
            }
            
        }
        function getContentsArr(){
            var contentsarr = new Array();
            for (var z=0;z<contents.length; z++) {
                if(contents[z].id.indexOf(contentid)>=0){
                    contentsarr[contentsarr.length] = contents[z];
                }                
            }
             return contentsarr;
        }
        var contarr=getContentsArr();
        function autoSlideTopic(){
            for (var a = tabs.length - 1; a >= 0; a--) {
                tabs[a].className = "";
            }
            
            for (var b = contarr.length - 1; b >= 0; b--) {                
                    contarr[b].style.display = "none";
            }
            contarr[cur_index_num].style.display = "block";
            
            tabs[cur_index_num].className = "act";
            var total_num = tabs.length;
            cur_index_num++;
            if (cur_index_num >= total_num) {
                cur_index_num = 0;
            }
        }
        for (var c = tabs.length - 1; c >= 0; c--) {
            tabs[c].onmouseover = function(){
                //clearInterval(autotpc);
                changeTabs(this.name);
            }
            tabs[c].onmouseout = function(){
                //autotpc = setInterval(autoSlideTopic, 3000);
                clearInterval(autoSlideTopic);
            }
        }
        function changeTabs(num){
            var thenum = num - 1;
            for (var n = tabs.length - 1; n >= 0; n--) {
                tabs[n].className = "";
            }
            tabs[thenum].className = "act";
            for (var m = contarr.length - 1; m >= 0; m--) {
                contarr[m].style.display = "none";
            }
            contarr[thenum].style.display = "block";
            cur_index_num = thenum;
        }
        
    }
    
}

function zoom(id){
    var up=document.getElementById("up");   
    var obj=document.getElementById(id);
    var dH=obj.clientHeight; 
    obj.style.height=360+"px";
    obj.style.overflow="hidden";
    if(dH<340){
      up.style.display="none";
    }else{
      up.style.display="block"; 
    } 
    obj.onmouseover=function(){
        up.style.display="none";
        this.style.height=dH+"px";  
        this.style.backgroundColor="#fffae7";
        this.style.border="3px solid #fe8802" ;  
        this.style.overflow="visible";
        this.style.zIndex=999;
    }   
    obj.onmouseout=function(){ 
        if(dH<340){
          up.style.display="none";
        }else{
          up.style.display="block"; 
        }
        //up.style.display="block";    
        this.style.height=360+"px";   
        this.style.border="3px solid #fff" ;  
        this.style.backgroundColor=""; 
        this.style.overflow="hidden";  
        this.style.zIndex="";   
    } 
}
