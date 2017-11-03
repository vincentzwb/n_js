define(['vue', 'txt!../../pages/comment.html', 'routes'], function (v, commentHtml, routes) {

    var mitsub = v.extend({
        template: commentHtml,
        data: function () {
            return {
                commentText: '',
                commenterror:"",
            }
        },
        mounted: function () {
        },
        methods: {
            saveComment: function () {
                var that=this;
                if(that.commentText==""){
                    that.commenterror="*请输入评论内容";
                	return;
                }
                var requestData = {};
                requestData.comment=that.commentText;
                $.post("/comment/addComment",requestData, function (data) {
                    var data = jQuery.parseJSON(data);
                    if(data.errcode==0){
                         window.location.href = "/culliganexamine/#/userCenter";
                    }
                });
            }
        }
    });

    return mitsub;
});