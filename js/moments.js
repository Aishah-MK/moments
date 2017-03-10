window.onload = function(){

	function getByClass(clsName,parent){
		var oParent = parent?document.getElementById(parent):document,
		    eles = [],
		    elements = oParent.getElementsByTagName('*');

		for(var i = 0,l = elements.length;i<l;i++){
			if(elements[i].className == clsName){
				eles.push(elements[i]);
			}
		}
		return eles;
	}

	var review = document.getElementById("review");
	var packup = document.getElementById("packup");
	var arrow = document.getElementById("arrow");
	var pc = document.getElementById("pc");

	var heart = document.getElementById("heart");
	heart.onclick = function(e){
		e = e || window.event;
     	if(e.stopPropagation){
          e.stopPropagation();
     	}else{
          e.cancelBubble = true;
     	}

     	var clsName = this.getAttribute("class");
		if(clsName == "fa fa-heart-o"){
			this.setAttribute("class","fa fa-heart");
			this.style.color = "#5bafff";
			document.getElementById("count").innerHTML++;
		} else{
			this.setAttribute("class","fa fa-heart-o");	
			this.style.color = "#80858c";
			document.getElementById("count").innerHTML--;	
		}
	}

	var heart1 = document.getElementById("heart1");
	heart1.onclick = function(e){
		e = e || window.event;
     	if(e.stopPropagation){
          e.stopPropagation();
     	}else{
          e.cancelBubble = true;
     	}

     	var clsName = this.getAttribute("class");
		if(clsName == "fa fa-heart-o"){
			this.setAttribute("class","fa fa-heart");
			this.style.color = "#5bafff";
			document.getElementById("count1").innerHTML++;
		} else{
			this.setAttribute("class","fa fa-heart-o");	
			this.style.color = "#80858c";
			document.getElementById("count1").innerHTML--;	
		}
	}


    //一些小bug，暂时没有调试好
	// var praise = getByClass("praise",);
	// for(var i = 0; i < praise.length; i++){
	// 	var heart = praise[i].firstChild;
	// 	heart.onclick = function(e){
	// 		e = e || window.event;
	//      	if(e.stopPropagation){
	//           e.stopPropagation();
	//      	}else{
	//           e.cancelBubble = true;
	//      	}

	//      	var clsName = this.getAttribute("class");
	// 		if(clsName == "fa fa-heart-o"){
	// 			this.setAttribute("class","fa fa-heart");
	// 			this.style.color = "#5bafff";
	// 			document.getElementById("count").innerHTML++;
	// 		} else{
	// 			this.setAttribute("class","fa fa-heart-o");	
	// 			this.style.color = "#80858c";
	// 			document.getElementById("count").innerHTML--;	
	// 		}
	// 	}

	packup.onclick = function(e){

		e = e || window.event;
     	if(e.stopPropagation){
          e.stopPropagation();
     	}else{
          e.cancelBubble = true;
     	}
		
		 var clsName = arrow.getAttribute("class");
     	if(clsName == "fa fa-chevron-up"){
     		arrow.setAttribute("class","fa fa-chevron-down");
     		review.style.display = "none";
     		pc.innerHTML = "查看全部评论";
     	}else{
     		arrow.setAttribute("class","fa fa-chevron-up")
     		review.style.display = "block";
     		pc.innerHTML = "收起" ;
     	}
	}
}
