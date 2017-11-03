define(['vue', 'txt!../../pages/entryExperience.html','routes'], function(v, entryExperienceHtml,routes) {
	
	var mitsub = v.extend({
		template: entryExperienceHtml,
		data:function(){
                    return {
                        userinfo:[]
                    }
		},
		mounted: function() {
		},
	});
	
	return mitsub;
});