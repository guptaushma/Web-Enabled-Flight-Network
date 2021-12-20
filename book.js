$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbarr').addClass("sticky");
        } else {
            $('.navbarr').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scrollup').addClass("show");
        } else {
            $('.scrollup').removeClass("show");
        }
    });
    $('.scrollup').click(function () {
        $('html').animate({
            scrollTop: 0
        });
    });

});