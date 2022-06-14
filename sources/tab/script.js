$(function(){

    // tab1
    function tab1() {
        let tabMenu = $('.tab1').find('.menu li a');
    
        tabMenu.on('click',function(e) {
            e.preventDefualt;
            let thisIndex = $(this).parent().index(),
                thisCont = $(this).parents('.tab1').find('.cont li'),
                className = 'active';

            $(this).parent().siblings().removeClass(className);
            $(this).parent().addClass(className);
            thisCont.removeClass(className);
            thisCont.eq(thisIndex).addClass(className);
        })
    }
    tab1();

    // tab2
    function tab2() {
        $('.tab2 .menu li').each(function(index){
            $(this).data('cont li', $('.tab2 .cont li').eq(index));
        })
        $('.tab2 .menu li a').on('click',function(e) {
            e.preventDefualt;
            $(this).parent().siblings().removeClass('active');
            $(this).parents('.tab2').find('.cont li').removeClass('active');
            $(this).parent().addClass('active').data('cont li').addClass('active');
        })
    }
    tab2();
})