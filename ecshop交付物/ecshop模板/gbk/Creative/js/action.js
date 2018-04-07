function $(element) {
    return document.getElementById(element);
}
//切屏--是按钮，_v是内容平台，_h是内容库
function reg(str){
  var bt=$(str+"_b").getElementsByTagName("h2");
  bt[0].className = "";
  for(var i=0;i<bt.length;i++){
    bt[i].subj=str;
    bt[i].pai=i;
    bt[i].style.cursor="pointer";
    bt[i].onmouseover=function(){
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
  var elem = $(id);
  if(elem.getAttribute("id") == id){
      //elem.className = color1;
      if(elem.className == color1)
           elem.className = color2;
        else
           elem.className = color1; 
    }
}

function articleSize(size,lineheight){
var article = $("article");
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

//销售排行
function PinClass(id){
    var id = $(id).getElementsByTagName("p");
    for(var j=0; j<id.length; j++){
        id[j].className = "p"+j;
    }
}
//促销信息
function promotionInof(o,d,c){
    if(d==c){
        var t=getFirstChild(o.firstChild).cloneNode(true);
        o.removeChild(getFirstChild(o.firstChild));
        o.appendChild(t);
        t.style.marginTop="0px";
    }else{
        c+=2;
        getFirstChild(o.firstChild).style.marginTop=-c+"px";
        window.setTimeout(function(){promotionInof(o,d,c)},20);
    }
}
function getFirstChild(node){
  while (node.nodeType!=1)
  {
      node=node.nextSibling;
  }
  return node;
}

//recommend_promotion
    var isMoving = false;
    function moveElement(elementID,final_y,final_x,interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;
    isMoving = true;
    var elem = document.getElementById(elementID);
    if (elem.movement) { clearTimeout(elem.movement);}
    if (!elem.style.left) {
       elem.style.left = "0px";
    }
   if (!elem.style.top) {
       elem.style.top = "0px";
   }
   var xpos = parseInt(elem.style.left);
   var ypos = parseInt(elem.style.top);
   if (ypos == final_y && xpos == final_x) {
      isMoving = false;
      return true;
   }
   if (xpos < final_x) {
       var dist = Math.ceil((final_x - xpos)/10);
       xpos = xpos + dist;
       if(-xpos>0){
         document.getElementById("right").className = "cr";
       }
       if(xpos==0){
         document.getElementById("left").className = "l";
       }
   }
   if (xpos > final_x) {
      var dist = Math.ceil((xpos - final_x)/10);
      xpos = xpos - dist;
      if(xpos<0){
        document.getElementById("left").className = "cl";
      }
      if(-xpos >= ulWidth - width){
        document.getElementById("right").className = "r";
      }

   }
   if (ypos < final_y) {
       var dist = Math.ceil((final_y - ypos)/10);
       ypos = ypos + dist;
   }
   if (ypos > final_y) {
      var dist = Math.ceil((ypos - final_y)/10);
      ypos = ypos - dist;
   }
   elem.style.left = xpos + "px";
   elem.style.top = ypos + "px";
   var repeat = "moveElement('"+elementID+"',"+final_y+","+final_x+","+interval+")";
      elem.movement = setTimeout(repeat,interval);
   }
//brands
function startmarquee(lh,speed,delay,index){
    var t;
    var p=false;
    var o=document.getElementById("marqueebox"+index);
    o.innerHTML+=o.innerHTML;
    o.onmouseover=function(){p=true}
    o.onmouseout=function(){p=false}
    o.scrollTop = 0;
    function start(){
        t=setInterval(scrolling,speed); 
        if(!p){ o.scrollTop += 1;}
    }
    function scrolling(){
        if(o.scrollTop%lh!=0){
            o.scrollTop += 1;
            if(o.scrollTop>=o.scrollHeight/2) o.scrollTop = 0;
            
        }else{
            clearInterval(t);
            setTimeout(start,delay);
        }
    }
    setTimeout(start,delay);
}






