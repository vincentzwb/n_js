var baseobj = function(){
	var base = this;
	jQuery.ajaxSetup({
        beforeSend: function () {
			// console.log(111111);
            $("#loading").css('display', 'block');
        },
        statusCode: {
            // 401: function () {
            //     location.href = "/BdUser/Login";
            // },
            // 422: function () {
            //     // msgalert("提示", "用户名不存在或密码错误！");
            // },
            // 403: function () {
            //     location.href = "/BdUser/Login";
            //     // msgalert("提示", "/BdUser/Login");
            // },
            // 404: function () { 
            //     // msgalert("提示", "服务器404")
            //  },
            // 500: function () { 
            //     // msgalert("提示", "服务器500");
            //  },
        },
        complete: function () {
			// console.log(22222);
            $("#loading").css('display', 'none');
        },
    });
	
	return base;
	
}(document,window)
