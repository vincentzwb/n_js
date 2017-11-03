define(['vue', 'txt!../../pages/courseLevel.html','routes'], function(v, courseLevelHtml,routes) {
	
	var mitsub = v.extend({
		template: courseLevelHtml,
		data:function(){
                    return {
                        courselist:[],
                        level1:0,
                        level2:0,
                        level3:0,
                    };
		},
		 mounted: function () {
                    this.reviewListData();
                },
                methods: {
                    reviewListData: function () {
                        var that = this;
                        that.getLevelStatus2();
                        that.getLevelStatus3();
                    },
                    getLevelStatus2:function(){
                        var that = this;
                        var requestData={};
                        requestData.level=0;
                        $.post("/coursesUser/getCoursesList", requestData, function (data) {
                            var data = jQuery.parseJSON(data);
                            console.log(data);
                            that.courselist = data.result.result;
                            console.log(data.result.result.length);
                            if(data.result.result[data.result.result.length-1].status==true){
                                that.level2=1;
                            }
                        });
                    },
                     getLevelStatus3:function(){
                        var that = this;
                        var requestData={};
                        requestData.level=1;
                        $.post("/coursesUser/getCoursesList", requestData, function (data) {
                            var data = jQuery.parseJSON(data);
                            console.log(data);
                            that.courselist = data.result.result;
                            if(data.result.result[data.result.result.length-1].status==true){
                                that.level3=1;
                            }
                        });
                    },
                    
                    
                },
                watch: {
                    // 如果路由有变化，会再次执行该方法
                    "$route": "reviewListData"
                },
	});
	return mitsub;
});