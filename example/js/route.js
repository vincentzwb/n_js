define(
        ['pagejs/login','pagejs/entryExperience','pagejs/courseList','pagejs/examination',
         'pagejs/scoringResults','pagejs/userCenter','pagejs/comment','pagejs/courseLevel'
         ],
        function(
                 login,entryExperience,courseList,examination,scoringResults,userCenter,comment,courseLevel
                )
        { 
        mode:'history'
	var routes=[
                 {name:'login',title:'登录',path:'/login',component:login},
                 {name:'entryExperience',title:'进入体验',path:'/entryExperience',component:entryExperience},
                 {name:'courseLevel',title:'课程列表',path:'/courseLevel',component:courseLevel},
                 {name:'courseList',title:'课程列表',path:'/courseList/:level',component:courseList},
//                 {name:'courseContent',title:'课程内容',path:'/courseContent/:course',component:courseContent},
                 {name:'examination',title:'考试题目',path:'/examination/:courseid',component:examination},
                 {name:'scoringResults',title:'得分结果',path:'/scoringResults/:courseid',component:scoringResults},
                 {name:'userCenter',title:'用户中心',path:'/userCenter',component:userCenter},
                 {name:'comment',title:'用户评论',path:'/comment',component:comment},
                 
                 

                
            ]
	return routes;
});

