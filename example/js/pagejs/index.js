define(['vue', 'txt!../pages/index.html','routes'], function(v, indexHtml,routes) {
	
	var mitsub = v.extend({
		template: indexHtml,
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