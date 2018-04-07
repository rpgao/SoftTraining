function $(element) {
	return document.getElementById(element);
}
//����--�ǰ�ť��_v������ƽ̨��_h�����ݿ�
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
function showMenu(menuID,index) {
	$(menuID).style.display=(index==0?"none":"block");
}
function promotion(){
	document.getElementById("promotion").getElementsByTagName("li")[0].className = "m0";
	document.getElementById("promotion").getElementsByTagName("li")[1].className = "m1";
	document.getElementById("promotion").getElementsByTagName("li")[2].className = "m2";
}

function ScrollText(content,btnPrevious,btnNext,autoStart,timeout,isSmoothScroll)
{
    this.Speed = 10;
    this.Timeout = timeout;
    this.stopscroll =false;//�Ƿ�ֹͣ�����ı�־λ
    this.isSmoothScroll= isSmoothScroll;//�Ƿ�ƽ����������
    this.LineHeight = 20;//Ĭ�ϸ߶ȡ��������ⲿ������Ҫ����
    this.NextButton = this.$(btnNext);
    this.PreviousButton = this.$(btnPrevious);
    this.ScrollContent = this.$(content);
    //this.ScrollContent.innerHTML += this.ScrollContent.innerHTML;//Ϊ��ƽ�������ټ�һ��

	if(this.PreviousButton)

	{
		this.PreviousButton.onclick = this.GetFunction(this,"Previous"); 
		this.PreviousButton.onmouseover = this.GetFunction(this,"MouseOver");
		this.PreviousButton.onmouseout = this.GetFunction(this,"MouseOut");
	}
	if(this.NextButton){
		this.NextButton.onclick = this.GetFunction(this,"Next");
		this.NextButton.onmouseover = this.GetFunction(this,"MouseOver");
		this.NextButton.onmouseout = this.GetFunction(this,"MouseOut");
    }
    this.ScrollContent.onmouseover = this.GetFunction(this,"MouseOver");
    this.ScrollContent.onmouseout = this.GetFunction(this,"MouseOut");

    if(autoStart)
    {
        this.Start();
    }
}

ScrollText.prototype = {

	$:function(element)
	{
		return document.getElementById(element);
	},
	Previous:function()
	{
		this.stopscroll = true;
		this.Scroll("up");
	},
	Next:function()
	{
		this.stopscroll = true;
		this.Scroll("down");
	},
	Start:function()
	{
		if(this.isSmoothScroll)
		{
			this.AutoScrollTimer = setInterval(this.GetFunction(this,"SmoothScroll"), this.Timeout);
		}
		else
		{		
			this.AutoScrollTimer = setInterval(this.GetFunction(this,"AutoScroll"), this.Timeout);
		}
	},
	Stop:function()
	{
		clearTimeout(this.AutoScrollTimer);
		this.DelayTimerStop = 0;
	},
	MouseOver:function()
	{	
		this.stopscroll = true;
	},
	MouseOut:function()
	{
		this.stopscroll = false;
	},
	AutoScroll:function()
	{
		if(this.stopscroll) 
		{
			return;
		}
		this.ScrollContent.scrollTop++;
		if(parseInt(this.ScrollContent.scrollTop) % this.LineHeight != 0)
		{
			this.ScrollTimer = setTimeout(this.GetFunction(this,"AutoScroll"), this.Speed);
		}
		else
		{
			if(parseInt(this.ScrollContent.scrollTop) >= parseInt(this.ScrollContent.scrollHeight) / 2)
			{
				this.ScrollContent.scrollTop = 0;
			}
			clearTimeout(this.ScrollTimer);
			//this.AutoScrollTimer = setTimeout(this.GetFunction(this,"AutoScroll"), this.Timeout);
		}
	},
	SmoothScroll:function()
	{
		if(this.stopscroll) 
		{
			return;
		}
		this.ScrollContent.scrollTop++;
		if(parseInt(this.ScrollContent.scrollTop) >= parseInt(this.ScrollContent.scrollHeight) / 2)
		{
			this.ScrollContent.scrollTop = 0;
		}
	},
	Scroll:function(direction)
	{

		if(direction=="up")
		{
			this.ScrollContent.scrollTop--;
		}
		else
		{
			this.ScrollContent.scrollTop++;
		}
		if(parseInt(this.ScrollContent.scrollTop) >= parseInt(this.ScrollContent.scrollHeight) / 2)
		{
			this.ScrollContent.scrollTop = 0;
		}
		else if(parseInt(this.ScrollContent.scrollTop)<=0)
		{
			this.ScrollContent.scrollTop = parseInt(this.ScrollContent.scrollHeight) / 2;
		}
		
		if(parseInt(this.ScrollContent.scrollTop) % this.LineHeight != 0)
		{
			this.ScrollTimer = setTimeout(this.GetFunction(this,"Scroll",direction), this.Speed);
		}
	},
	GetFunction:function(variable,method,param)
	{
		return function()
		{
			variable[method](param);
		}
	}
}

function picturs(){
	var goodsimg = document.getElementById("goodsimg");
	var imglist = document.getElementById("imglist");
	var imgnum = imglist.getElementsByTagName("img");
	for(var i = 0; i<imgnum.length; i++){
		imgnum[i].onclick=function(){
			var lang = this.getAttribute("lang");
			goodsimg.setAttribute("src",lang);
			for(var j=0; j<imgnum.length; j++){
				if(imgnum[j].getAttribute("class") =="onbg" || imgnum[j].getAttribute("className") =="onbg"){
					imgnum[j].className = "autobg";
					break;
				}
			}
			this.className = "onbg";
		}
	}
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



