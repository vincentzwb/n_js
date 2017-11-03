require.config({
    map: {
        '*': {
            'css': 'lib/require-css/css'
        }
    },
    paths: {
        'jquery': 'lib/jquery-1.10.2',
        'jquerys': 'lib/radialIndicator',
        'jqmeter': 'lib/jqmeter.min',
        'vue': 'lib/vue/vue',
        'vueRoute': 'lib/vue/vue-router',
        'base': 'base',
        'routes': 'route',
        'txt': 'lib/text/text',
        'cookie': 'jquery.cookie'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'cookie': {
            deps: ['jquery'],
            exports: 'cookie'
        },
        'jquerys': {
            deps: ['jquery'],
            exports: 'jquerys'
        },
        'jqmeter': {
            deps: ['jquery'],
            exports: 'jqmeter'
        },
        'base': ['vue'],
        'vueRoute': ['vue'],
    }
});
require(['jquery', 'vue', 'vueRoute', 'routes', 'base', 'cookie','jquerys','jqmeter'], function ($, v, v_route, routes, cookie,jquerys,jqmeter) {
    v.use(v_route);
    //配置路由
    var router = new v_route({
        routes: routes
    });
    //配置vue参数；
    var startvue = {
        el: "#app",
        router: router,
        data: function () {
            return {
                // time: "",
            }
        },
        mounted: function () {
            var that = this;
             that.reviewListData();
        },
        methods: {
            reviewListData: function () {


                window.location.href="/#/login";
                    
            },
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
            "$route": "reviewListData"
        }
    };
    new v(startvue);
});
