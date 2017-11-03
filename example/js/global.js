$(function(){

    $('.user_best_record_list ul li:first-child').addClass('active');
    $('.user_best_record_list ul li:first-child .user_best_record_show').show();
    $('body').on('click','.user_best_record_list ul li',function(){
        if(!$(this).hasClass('active')){
            $('.user_best_record_list ul li .user_best_record_show').slideUp();
            $(this).find('.user_best_record_show').slideDown();
            $('.user_best_record_list ul li').removeClass('active');
            $(this).addClass('active');
        }else{
            $('.user_best_record_list ul li .user_best_record_show').slideUp();
            $('.user_best_record_list ul li').removeClass('active');
        }
    });

});