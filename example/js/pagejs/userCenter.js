define(['vue', 'txt!../../pages/userCenter.html', 'routes'], function (v, userCenterHtml, routes) {

    var mitsub = v.extend({
        template: userCenterHtml,
        data: function () {
            return {
                resultdata: [],
                coursesresultlist:[]
            }
        },
        mounted: function () {
            var that = this;
            that.$nextTick(function () {
                $.post("/best_result/resultlistByUser", "", function (data) {
                    var data = jQuery.parseJSON(data);
                    that.resultdata = data.result;
                    that.coursesresultlist = data.result.coursesresult;
                });
            })
        },
        methods: {
            slidechild: function (ele) {
                var eledom = ele.currentTarget;
                if (!$(eledom).hasClass("active")) {
                    $(".user_best_record_show").hide();
                    $(eledom).siblings().removeClass("active");
                    $(eledom).addClass("active");
                    $(eledom).find(".user_best_record_show").show();
                } else {
                    $(eledom).removeClass("active");
                    $(eledom).find(".user_best_record_show").hide();
                }
            }
        }
    });
    return mitsub;
});