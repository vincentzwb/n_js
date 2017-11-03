define(['vue', 'txt!../../pages/examination.html', 'routes'], function (v, examinationHtml, routes) {

    var mitsub = v.extend({
        template: examinationHtml,
        data: function () {
            return {
                content: [],
                examinationList: [],
                'courseid': '',
                'q1_id': '',
                'q1_an': '',
                'q2_id': '',
                'q2_an': '',
                'q3_id': '',
                'q3_an': '',
                'q4_id': '',
                'q4_an': '',
                'q5_id': '',
                'q5_an': '',
                'q6_id': '',
                'q6_an': '',
                'q7_id': '',
                'q7_an': '',
                'q8_id': '',
                'q8_an': '',
                'q9_id': '',
                'q9_an': '',
                'q10_id': '',
                'q10_an': '',
                'q11_id': '',
                'q11_an': '',
                'q12_id': '',
                'q12_an': '',
                'q13_id': '',
                'q13_an': '',
                'q14_id': '',
                'q14_an': '',
                'q15_id': '',
                'q15_an': '',
                'q16_id': '',
                'q16_an': '',
                'q17_id': '',
                'q17_an': '',
                'q18_id': '',
                'q18_an': '',
                'q19_id': '',
                'q19_an': '',
                'q20_id': '',
                'q20_an': '',
                'finish_time': '',
                'exam_time': '00:00:00',
                'progress': 5,
            }
        },
        mounted: function () {
            var that = this;
            that.reviewListData();
            that.clearTime();
            that.changetime();
            that.progressBar();
            that.examination_progressbar();
        },
        methods: {
            reviewListData: function () {
                var that = this;
                that.courseid = this.$route.params.courseid;
                var requestData2 = {};
                requestData2.id = that.courseid;
                var requestData = {};
                requestData.lession_id = that.courseid;
                $.post("/coursesUser/getCoursesInfo", requestData2, function (data) {
                    var data = jQuery.parseJSON(data);
                    that.content = data.result;
                });
                $.post("/examinqationFlow/getquestionlist", requestData, function (data) {
                    var data = jQuery.parseJSON(data);
                    console.log(data);
                    that.examinationList = data.result;
                    that.q1_id=data.result[0].question; 
                    that.q2_id=data.result[1].question;  
                    that.q3_id=data.result[2].question;  
                    that.q4_id=data.result[3].question;  
                    that.q5_id=data.result[4].question;
                    that.q6_id=data.result[5].question; 
                    that.q7_id=data.result[6].question;  
                    that.q8_id=data.result[7].question;  
                    that.q9_id=data.result[8].question;  
                    that.q10_id=data.result[9].question; 
                    that.q11_id=data.result[10].question; 
                    that.q12_id=data.result[11].question;  
                    that.q13_id=data.result[12].question;  
                    that.q14_id=data.result[13].question;  
                    that.q15_id=data.result[14].question; 
                    that.q16_id=data.result[15].question; 
                    that.q17_id=data.result[16].question;  
                    that.q18_id=data.result[17].question;  
                    that.q19_id=data.result[18].question;  
                    that.q20_id=data.result[19].question;   

                    if (data.errcode == 1002) {
                        alert("提示", '暂无考题，将返回到题目列表');
                        location.href ="/culliganexamine/#/courseLevel";
                    }
                });
            },
            //用户答案
            userAnswer: function (ele) {
                var that = this;
                var elecurr = ele.currentTarget;
                var answer = $(elecurr).attr("value");
                var qus_id = $(elecurr).attr("qus-id");
                var qus = $(elecurr).attr("qus");
                if (qus_id == 1) {
                    that.q1_id = qus;
                    that.q1_an = answer;
                }
                if (qus_id == 2) {
                    that.q2_id = qus;
                    that.q2_an = answer;
                }
                if (qus_id == 3) {
                    that.q3_id = qus;
                    that.q3_an = answer;
                }
                if (qus_id == 4) {
                    that.q4_id = qus;
                    that.q4_an = answer;
                }
                if (qus_id == 5) {
                    that.q5_id = qus;
                    that.q5_an = answer;
                }
                if (qus_id == 6) {
                    that.q6_id = qus;
                    that.q6_an = answer;
                }
                if (qus_id == 7) {
                    that.q7_id = qus;
                    that.q7_an = answer;
                }
                if (qus_id == 8) {
                    that.q8_id = qus;
                    that.q8_an = answer;
                }
                if (qus_id == 9) {
                    that.q9_id = qus;
                    that.q9_an = answer;
                }
                if (qus_id == 10) {
                    that.q10_id = qus;
                    that.q10_an = answer;
                }
                
                 if (qus_id == 11) {
                     that.q11_id = qus;
                     that.q11_an = answer;
                 }
                 if (qus_id == 12) {
                     that.q12_id = qus;
                     that.q12_an = answer;
                 }
                 if (qus_id == 13) {
                     that.q13_id = qus;
                     that.q13_an = answer;
                 }
                 if (qus_id == 14) {
                     that.q14_id = qus;
                     that.q14_an = answer;
                 }
                 if (qus_id == 15) {
                     that.q15_id = qus;
                     that.q15_an = answer;
                 }
                 if (qus_id == 16) {
                     that.q16_id = qus;
                     that.q16_an = answer;
                 }
                 if (qus_id == 17) {
                     that.q17_id = qus;
                     that.q17_an = answer;
                 }
                 if (qus_id == 18) {
                     that.q18_id = qus;
                     that.q18_an = answer;
                 }
                 if (qus_id == 19) {
                     that.q19_id = qus;
                     that.q19_an = answer;
                 }
                 if (qus_id == 20) {
                     that.q20_id = qus;
                     that.q20_an = answer;
                 }
                $(elecurr).siblings().removeClass("active");
                $(elecurr).addClass("active");
            },
            changeQuestions: function (qusId) {
                var that=this;
                var qusId = qusId;
                $(".examinationpage").hide();
                $(".examinationpage" + qusId).show();
                this.progress = this.progress + 5;
                that.progressBar();

                that.examination_progressbar();
            },
            changpage: function () {

                $(".course_content_con").hide();
                $(".examination_con").show();

                $(".examination_progress_bar").show();

            },
            saveQuestions: function () {
                var that = this;
                var questionData = {};
                questionData.lession_id = that.courseid,
                questionData.q1_id = that.q1_id,
                questionData.q1_an = that.q1_an,
                questionData.q2_id = that.q2_id,
                questionData.q2_an = that.q2_an,
                questionData.q3_id = that.q3_id,
                questionData.q3_an = that.q3_an,
                questionData.q4_id = that.q4_id,
                questionData.q4_an = that.q4_an,
                questionData.q5_id = that.q5_id,
                questionData.q5_an = that.q5_an,
                questionData.q6_id = that.q6_id,
                questionData.q6_an = that.q6_an,
                questionData.q7_id = that.q7_id,
                questionData.q7_an = that.q7_an,
                questionData.q8_id = that.q8_id,
                questionData.q8_an = that.q8_an,
                questionData.q9_id = that.q9_id,
                questionData.q9_an = that.q9_an,
                questionData.q10_id = that.q10_id,
                questionData.q10_an = that.q10_an,
                questionData.q11_id = that.q11_id,
                questionData.q11_an = that.q11_an,
                questionData.q12_id = that.q12_id,
                questionData.q12_an = that.q12_an,
                questionData.q13_id = that.q13_id,
                questionData.q13_an = that.q13_an,
                questionData.q14_id = that.q14_id,
                questionData.q14_an = that.q14_an,
                questionData.q15_id = that.q15_id,
                questionData.q15_an = that.q15_an,
                questionData.q16_id = that.q16_id,
                questionData.q16_an = that.q16_an,
                questionData.q17_id = that.q17_id,
                questionData.q17_an = that.q17_an,
                questionData.q18_id = that.q18_id,
                questionData.q18_an = that.q18_an,
                questionData.q19_id = that.q19_id,
                questionData.q19_an = that.q19_an,
                questionData.q20_id = that.q20_id,
                questionData.q20_an = that.q20_an,
                questionData.finish_time = that.exam_time,
                $.post("/best_result/addResultByUser", questionData, function (data) {
                    var data = jQuery.parseJSON(data);
                    console.log(data);
                    if (data.errcode == 0) {
                        window.location.href = "/culliganexamine/#/scoringResults/" + that.courseid;
                    }
                });

            },
            //计时器
            changetime: function () {
                var sec = 0;
                that = this;
                var timer;
                window.timer = setInterval(function () {
                    sec++;
                    var date = new Date(0, 0)
                    date.setSeconds(sec);
                    var h = date.getHours(), m = date.getMinutes(), s = date.getSeconds();
                    if (h < 10) {
                        h = "0" + h;
                    } else {
                        h = h;
                    }
                    if (m < 10) {
                        m = "0" + m;
                    } else {
                        m = m;
                    }
                    if (s < 10) {
                        s = "0" + s;
                    } else {
                        s = s;
                    }
                    that.exam_time = h + ":" + m + ":" + s;
                }, 1000);
            },
            clearTime: function () {
                window.clearInterval(window.timer);
            },
            progressBar: function () {
                $('#jqmeter-container').jQMeter({
                    goal: '$1,00',
                    raised: '$' + this.progress,
                    width: '320px',
                    height: '10px',
                    bgColor: '#0053a6',
                    barColor: '#fff',
                    displayTotal: false,
                    animationSpeed: '3000'
                });
            },
            examination_progressbar: function () {
                var that = this;
                $('.examination_progressbar').each(function () {
                    var t = $(this);
                    dataperc = that.progress,
                    barperc = Math.round(dataperc * 3.56);
                    t.find('.bar').animate({ width: barperc }, dataperc * 10);
                    t.find('.label').append('<div class="perc"></div>');
                    function perc() {
                        var length = t.find('.bar').css('width'),
                            perc = Math.round(parseInt(length) / 3.56),
                            labelpos = (parseInt(length) - 2);
                        t.find('.label').css('left', labelpos);
                        t.find('.perc').text(perc + '%');
                    }
                    perc();
                    setInterval(perc, 0);
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