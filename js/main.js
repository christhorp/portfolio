$(document).ready(function(){
   $("#outer-wrap").onepage_scroll(); 
   
   site.resize();

    $(window).resize(function(){
        site.resize();
    });
    
    $(window).load(function(){
        site.resize();
    });
    
    $('.portfolio').cycle({
        slides: '.port-slide'
    });
   
   
   
});



var site = {
    resize: function(){
        var new_margin = Math.ceil(($(window).height() ) / 2);
        $('.vert-align').each(function(){
            $(this).css('margin-top', new_margin + 'px');
            $(this).css('top',-($(this).outerHeight() / 2) - 50);
        });
    }
};