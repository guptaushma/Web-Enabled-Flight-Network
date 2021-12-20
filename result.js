$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
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
    var typed = new Typed(".typing", {
        strings: ["New York City!"],
        typeSpeed: 80,
        backSpeed: 40,
        loop: false
    });
});