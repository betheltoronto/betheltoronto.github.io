/**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = 100; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
        $('.dropdown-menu').addClass("dropdown-scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
        $('.dropdown-menu').removeClass("dropdown-scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}