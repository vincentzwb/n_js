define(['vue', 'txt!../../pages/courseList.html', 'routes'], function (v, courseListHtml, routes) {

    var mitsub = v.extend({
        template: courseListHtml,
        data: function () {
            return {
                courselist: [],
                levelNume: 0,
            }
        },
        mounted: function () {
            var that = this;
            that.levelNume = this.$route.params.level;
            that.reviewListData();
        },
        methods: {
            reviewListData: function () {
                var that = this;
                var requestData={};
                requestData.level=  that.levelNume;
                requestData.limit=  20;
                requestData.offset=  0;

                $.post("/coursesUser/getCoursesList", requestData, function (data) {
                    var data = jQuery.parseJSON(data);
                                           console.log(data);
                    that.courselist = data.result.result;
                });
            }
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
            "$route": "reviewListData"
        },
    });

    return mitsub;
});