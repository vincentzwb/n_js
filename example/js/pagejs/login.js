define(['vue', 'txt!../../pages/login.html', 'routes'], function(v, loginHtml, routes) {

    var mitsub = v.extend({
        template: loginHtml,
        data: function() {
            return {
                usename: '',
                userphone: '',
                error: '',
            }
        },
        mounted: function() {
        },
        methods: {
            loginthis: function(e) {
                e.preventDefault();
                var that = this;
                var requestData = {};
                that.error ="";
                requestData.username = that.usename;
                requestData.phone = that.userphone;

                if (that.usename == ''||that.userphone == '') {
                    that.error = "请输入您的姓名或手机号码";
                    return false;
                }
                var reg = /^1[34578][0-9]{9}/;
                if (!reg.test(that.userphone)) {
                    that.error = "请输入正确的手机号";
                    return false;
                }
                // $.post("/BdUser/BdUser", requestData, function(data) {
                //     var data = jQuery.parseJSON(data);
                //     if(data.errcode==1001){
                //         alert("您好 ！您的手机没有进行绑定 ！请联系康丽根客服！");
                //     }
                //     if(data.errcode==0){
                //          window.location.href = "/culliganexamine/#/courseLevel";
                //     }
                //     if(data.errcode==1002){
                //         alert("找不到输入的的绑定信息或者该用户已经绑定");
                //     }
                // });
            }
        }
    });

    return mitsub;
});







