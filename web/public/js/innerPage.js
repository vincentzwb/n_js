$(function(){
    ban_img("#ban img","#ban", 1920,552);

    ban_img("#sidebar .proImg img","#sidebar .proImg", 341,223);

    //项目介绍轮播
    pro_slider();

    downPlay();

    mobileMenu();

    $("html").css({"visibility":"visible"});
})

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

function downPlay(){

    $("#nav").waypoint(function (dir) {
		if (dir === 'down')
		{
			$(".siderbar_ele07").css({display:"block"});
			$(".siderbar_ele07").animate({opacity:1},500);
		}else{
			$(".siderbar_ele07").animate({opacity:0},500,function(){
				$(".siderbar_ele07").css({display:"none"});
			});
		}
	}, {'offset': "400px"});

	$(".siderbar_ele07").click(function(){
		$("html,body").animate({"scrollTop":0},1000);
	})

	
}

function pro_slider() {
	
    $('.pro_slider').carouFredSel({
        'responsive': true,
        items: {
            visible: 1
        },
        'scroll': {
            'duration': 1000,
            'items': 1,
            // 'fx':'crossfade',
            
            //'event':'hover',
            //'pauseOnHover':true

        },
        // 'auto': {'duration': 800},
        'pagination': '.pro-pagination',
        'auto':false,
    });
	
	$(window).fssResize();

};


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

