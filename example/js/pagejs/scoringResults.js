define(['vue', 'txt!../../pages/scoringResults.html', 'routes'], function (v, scoringResultsHtml, routes) {

    var mitsub = v.extend({
        template: scoringResultsHtml,
        data: function () {
            return {
                resultScore: [],
                courseid: 0,
                lat_one_pr: '0%',
                lat_two_pr: '0%',
                lat_three_pr: '0%',
                lat_four_pr: '0%',
                lat_five_pr: '0%'
            }
        },
        mounted: function () {
            var that = this;
            that.courseid = this.$route.params.courseid;
            var requestData = {};
            requestData.lession_id = this.$route.params.courseid;
            $.post("/best_result/resultBylessionid", requestData, function (data) {

                var data = jQuery.parseJSON(data);
                console.log(data);
                that.resultScore = data.result;
                that.lat_one_pr = data.result.lat_one_pr;
                that.lat_two_pr = data.result.lat_two_pr;
                that.lat_three_pr = data.result.lat_three_pr;
                that.lat_four_pr = data.result.lat_four_pr;
                that.lat_five_pr = data.result.lat_five_pr;

                // that.yuan();
                // that.skill_level_progressbar();

                window.onscroll = function () { //绑定scroll事件
                    var t = document.documentElement.scrollTop || document.body.scrollTop;  //获取滚动距离
                    if (t >= 500) {
                        that.skill_level_progressbar();
                    }
                }


            });

        },
        methods: {
            progressNum: function (percent) {
                var str = parseFloat(percent);
                str = str / 10;
                return str;
            },
            skill_level: function (ele) {
                var eledom = ele.currentTarget;
                var index = $(eledom).index() - 1;
                $(eledom).addClass("active").siblings().removeClass("active");
                $('.skill_level_container .skill_level_item').eq(index).show().siblings().hide();
            },
            skill_level_qb: function (ele) {
                var eledom = ele.currentTarget;
                $(eledom).addClass("active").siblings().removeClass("active");
                $('.skill_level_container .skill_level_item').show();
            },
            // yuan: function () {
            //     $('#indicatorContainer').radialIndicator({
            //         barBgColor: 'transparent',
            //         barColor: '#fff',
            //         barWidth: 12,
            //         //                            initValue: 12,
            //         radius: 138,
            //         roundCorner: true,
            //         format: '分'
            //     });
            //     var radialObj = $('#indicatorContainer').data('radialIndicator');
            //     radialObj.animate(this.resultScore.Total_score);

            // },
            skill_level_progressbar: function () {
                var that = this;
                $('.progressbar').each(function (index) {
                    var t = $(this);
                    if (index == 0) {
                        var dataperc = that.resultScore.lat_one_pr.split('%')[0];
                    }
                    if (index == 1) {
                        var dataperc = that.resultScore.lat_two_pr.split('%')[0];
                    }
                    if (index == 2) {
                        var dataperc = that.resultScore.lat_three_pr.split('%')[0];
                    }
                    if (index == 3) {
                        var dataperc = that.resultScore.lat_four_pr.split('%')[0];
                    }
                    if (index == 4) {
                        var dataperc = that.resultScore.lat_five_pr.split('%')[0];
                    }
                    var barperc = Math.round(dataperc * 5.56);
                    t.find('.bar').animate({ width: barperc }, dataperc * 25);
                    t.find('.label').append('<div class="perc"></div>');
                    function perc() {
                        var length = t.find('.bar').css('width'),
                            perc = Math.round(parseInt(length) / 5.56),
                            labelpos = (parseInt(length) - 2);
                        t.find('.label').css('left', labelpos);
                        t.find('.perc').text(perc + '%');
                    }
                    perc();
                    setInterval(perc, 0);
                });

            },

        },
    });

    return mitsub;
});