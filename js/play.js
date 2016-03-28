
$(function(){
	
	var i=0;//第i张图片
	$(".banner .imgs").append('<li><img src="./images/p1.jpg"></li>');
	var size=$(".banner .imgs li").size();
	var liLenth=$(".banner .imgs li")[0].offsetWidth;
	$('.imgs').css({width:liLenth*size});
	//var clone=$(".banner .img li").first().clone();
	//$(".banner .img").append(clone);	
/*
	var Arrayimg = {};
	Arrayimg[0] = "./images/p1.jpg";
	Arrayimg[1] = "./images/p2.jpg";
	Arrayimg[2] = "./images/p3.jpg";
	Arrayimg[3] = "./images/p4.jpg";

	for(var j=0;j<5;j++){
		if(j<4){
			var img = Arrayimg[j];
		}
		else
			img = Arrayimg[0];
		$(".banner .img").append('<li><a href="#"><img src="'+img+'"/></a></li>');
	}
*/
	
	/*加载小圆点*/
	for(var j=0;j<size-1;j++){
		$(".banner .num").append("<li></li>");
	}
	$(".banner .num li").first().addClass("on");
	
	
	/*鼠标划入圆点*/
	$(".banner .num li").hover(function(){
		var index=$(this).index();
		i=index;
		$(".banner .imgs").stop().animate({left:-index*liLenth},300)/*定义图片每次滑动的距离*/
		$(this).addClass("on").siblings().removeClass("on")		
	})
	
	
	/*自动轮播*/
	var t=setInterval(function(){
		i++;
		move()
	},20000)
	
	
	/*对banner定时器的操作*/
	$(".banner").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
			i++;
			move()
		},2000)
	})
	
	
	
	/*向左的按钮*/
	$(".banner .btn_l").click(function(){
		i--
		move();	
	})
	
	
	
	/*向右的按钮*/
	$(".banner .btn_r").click(function(){
		i++
		move()				
	})
	
	
	
	
	
	
	function move(){


		
		if(i==size){
			$(".banner  .imgs").css({left:0})			
			i=1;
		}
		
		
		if(i==-1){
			$(".banner .imgs").css({left:-(size-1)*liLenth})
			i=size-2;
		}
		
		$(".banner .imgs").stop().animate({left:-i*liLenth},600)	
		
		if(i==size-1){
			$(".banner .num li").eq(0).addClass("on").siblings().removeClass("on")	
		}else{		
			$(".banner .num li").eq(i).addClass("on").siblings().removeClass("on")	
		}
					
	}
	
})
