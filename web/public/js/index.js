$(function(){
		
//首页轮播
	index_gd();

	slider_as();

	news_slider();

	downPlay();

	ban_img(".section02 .imgWrap img", ".section02 .imgWrap", 334,218);

	ban_img(".sec3_ele .imgWrap img", ".sec3_ele .imgWrap", 600,300)

	videoPlay();

	video_slider();

	waypointEffe();

	mobileMenu();
	
	manyEle_mobile_slider();

	$("html").css({"visibility":"visible"})
})

function ban_img(a, b, w, h) {
    var $window = $(b);
    var $windowWidth = function() {
        return $window.width();
    };
    var $windowHeight = function() {
        return $window.height();
    };
    $window.fssResize(function() {
        var width = $windowWidth();
        var height = $windowHeight();

        $(b).each(function() {
            $this = $(this);
            $this.height(height).width(width);
            $this.triggerHandler("configuration", {height: height, width: width, items: {width: width}});
            $this.triggerHandler("updateSizes");
        });

    });

    $(a).each(function() {
        $(this).fullscreenstage({'width': w, 'height': h});
    });

    $(window).fssResize();
    $("#banner01").css({"visibility":"visible"});
}

function mobileMenu(){
	$(".nav-toggle").click(function(e) {
		$("body").toggleClass("sideopen");
		if (e && e.preventDefault) {
			e.preventDefault();
		} else {
			window.event.returnValue = false;
		}
	});
	$("#shadow").click(function(e) {
		$("body").toggleClass("sideopen");
		if (e && e.preventDefault) {
			e.preventDefault();
		} else {
			window.event.returnValue = false;
		}
	});
}

function waypointEffe(){

	$(".banner_silder .b_ele").eq(0).animate({opacity:"1"},800,function(){
		$(".banner_silder .b_ele").eq(1).animate({opacity:"1"},800,function(){
			$(".banner_silder .b_ele").eq(2).animate({opacity:"1"},800,function(){
		
			})
		})
	})

	$(".section01").waypoint(function (dir) {
		if (dir === 'down')
		{
			$(".siderbar_ele07").css({display:"block"});
			$(".siderbar_ele07").animate({opacity:1},500);
		}else{
			$(".siderbar_ele07").animate({opacity:0},500,function(){
				$(".siderbar_ele07").css({display:"none"});
			});
		}
	}, {'offset': "500px"});

	$(".section_mobile").waypoint(function (dir) {
		if (dir === 'down')
		{
			$(".section_mobile").animate({opacity:1},500);
		}
	}, {'offset': "500px"});

	$(".section01").waypoint(function (dir) {
		if (dir === 'down')
		{
			$(".section01").animate({opacity:1},500);
		}
	}, {'offset': "500px"});
	$(".section02").waypoint(function (dir) {
		if (dir === 'down')
		{
			$(".section02").animate({opacity:1},500);
		}
	}, {'offset': "500px"});
	$(".section03").waypoint(function (dir) {
		if (dir === 'down')
		{
			$(".section03").animate({opacity:1},500);
		}
	}, {'offset': "500px"});
	$(".section04").waypoint(function (dir) {
		if (dir === 'down')
		{
			$(".section04").animate({opacity:1},500);
		}
	}, {'offset': "500px"});
	


}


function downPlay(){
	$(".siderbar_ele07").click(function(){
		$("html,body").animate({"scrollTop":0},1000);
	})


	$(".banner_silder .b_c_02 img").click(function(){
		var _top=$(".section01").offset().top;
		$("html,body").animate({"scrollTop":_top},1000);
	})
	
}
function index_gd() {
	var $window = $(window);

	var $windowWidth = function() {
		return $window.width();
	};
	var $windowHeight = function() {
		return $window.height();
	};
		   
	$window.fssResize(function() {
		var width = $windowWidth();
		var height = $windowHeight();

		$('#home .slider').each(function() {
			$this = $(this);
			$this.height(height).width(width);
			$this.triggerHandler("configuration", {
				height: height,
				width: width,
				items: {
					width: width
				}
			});
			$this.triggerHandler("updateSizes");
		});

	});

	$('#home .slider .slider_ele').each(function() {
		$(this).fullscreenstage({
			'width': 1920,
			'height': 1027
		});
	});

	$(window).fssResize();
	$('#home .slider').carouFredSel({
		'responsive': true,
		items: {
			visible: 1
		},
		'scroll': {
			'duration': 1000,
			'items': 1,
			'fx':'crossfade',
			 onBefore:function(data){
				 console.log(data)
				var _old=data.items.old;
				var _visible=data.items.visible;
                 console.log(_old)
				 console.log(_visible)
				 
            },
            onAfter:function(data){
				var _old=data.items.old;
				var _visible=data.items.visible;
                 _old.find(".p1").css({"margin-left":"-800px"});
				  _old.find(".p2").css({"margin-left":"-800px"});
				 _visible.find(".p1effe01").animate({"margin-left":"0px"},function(){
					 _visible.find(".p1effe02").animate({"margin-left":"0px"},function(){
						_visible.find(".p1effe03").animate({"margin-left":"0px"});
					 
					});
					 
					  
				 });
				
            },
			//'event':'hover',
			//'pauseOnHover':true

		},
		// 'auto': {'duration': 800},
        'auto':false,
        'prev': ".banner-left",
		'next': ".banner-right",
		'pagination': '.banner-pagination',
	});
	$(".banner_silder .fss-wrapper").eq(0).find(".p1").css({"margin-left":"0px"});
	$(".banner_silder .fss-wrapper").eq(0).find(".p2").css({"margin-left":"0px"});
	
	

	$(window).fssResize();
   
		   

};

function manyEle_mobile_slider(){
	$(".manyEle_mobile_slider").carouFredSel({
        'width': '100%',
        'responsive':true,
        items:{

            'visible':{min:1,max:4},
        },
        'scroll':{
			items:1,
            'duration': 1000, 
        }, 
        'auto': false, 
        'prev': '.m_m_s_left',
        'next': '.m_m_s_right'
    });
}
function video_slider() {
	
	$('.sec3_contain_slider').carouFredSel({
		'responsive': true,
		items: {
			visible: 1
		},
		'scroll': {
			'duration': 1000,
			'items': 1,
			'fx':'crossfade',
			
			//'event':'hover',
			//'pauseOnHover':true

		},
		// 'auto': {'duration': 800},
		'pagination': '.video-pagination',
        'auto':false,
	});
	
	

};

function news_slider() {
	
	$('.news_slider').carouFredSel({
		'responsive': true,
		items: {
			visible: 1
		},
		'scroll': {
			'duration': 1000,
			'items': 1,
			'fx':'crossfade',
			
			//'event':'hover',
			//'pauseOnHover':true

		},
		// 'auto': {'duration': 800},
		'pagination': '.new-pagination',
        'auto':false,
	});
	
	

};


function slider_as(){
	$('.sa_slider').carouFredSel({
		'responsive': true,
		items: {
			visible: 1
		},
		'scroll': {
			'duration': 1000,
			'items': 1,

		},
		'auto': {'duration': 800},
        // 'auto':true,
        'prev': ".b_left",
		'next': ".b_right"
	});
}


 function videoPlay(){
	$(".sec3_ele_video").click(function(event) {
		event.preventDefault();
		var url = $(this).data('url');
		$("<div class='videoshadow'><div class='videobg'></div></div>").appendTo("body");
		$("<div class='videoboxw'><div class='videobox'></div></div>").appendTo(".videoshadow");
		$("<div class='close'></div>").appendTo(".videobox");
		$("<div id='control'><div id='video_paly'></div><div class='controls'><div class='jp-play'>播放</div><div class='jp-pause'>暂停</div><div class='timeline'><div class='jp-seek-bar'><div class='jp-play-bar'></div></div></div><div class='jp-time'><div class='jp-current-time'></div><div>/</div><div class='jp-duration'></div></div><div class='jp-full-screen'></div><div class='jp-restore-screen'></div></div></div>").appendTo(".videobox");
		$("#video_paly").jPlayer({
			swfPath: "./js",
			ready: function() {
				$(this).jPlayer("setMedia", {
					m4v: url
				}).jPlayer("play").jPlayer("repeat");
			},
			// solution: "flash,html",
			loop: false,
			supplied: "m4v",
			cssSelectorAncestor: '.videoshadow',
			size: {
				width: '100%',
				height: '100%'
			},
			fullWindow: false,
			cssSelector: {
				play: '.jp-play',
				pause: '.jp-pause',
				seekBar: '.jp-seek-bar',
				playBar: '.jp-play-bar',
				currentTime: '.jp-current-time',
				duration: '.jp-duration',
				gui: '.control',
				fullScreen: '.jp-full-screen',
				restoreScreen: '.jp-restore-screen',
			}
		});
		$(".videobox").stop().animate({'width': '100%'}, function() {
			$(this).stop().animate({'height': '100%'}, function() {
				$("#video_paly").bind($.jPlayer.event.progress, function(e) {
					console.log(e.jPlayer.status.seekPercent);
					if (e.jPlayer.status.seekPercent > 15) {
						$("#video_paly").jPlayer("play");
					}
				});
			});
		});
		$('.jp-video-full videoBox').css({width: '100%'})

	});
	$("body").on('click', '.close', function(event) {
		event.preventDefault();
		$("#video_paly").jPlayer("stop");
		$(".videobox").stop().animate({'height': '2px'}, function() {
			$(this).stop().animate({'width': '0px'}, 1000, function() {
				$(".videoshadow").remove();
			});
		});
	});
	$("body").on('click', '.videobg', function(event) {
		event.preventDefault();
		$("#video_paly").jPlayer("stop");
		$(".videobox").stop().animate({'height': '2px'}, function() {
			$(this).stop().animate({'width': '0px'}, 1000, function() {
				$(".videoshadow").remove();
			});
		});
	});
}












