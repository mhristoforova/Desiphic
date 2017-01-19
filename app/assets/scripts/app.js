$(document).ready(function() {

    /*Call pagepiling plugin */
        $('#pagepiling').pagepiling({
            loopTop: true,
            loopBottom: false,
            keyboardScrolling: true,
            verticalCentered: false,
            navigation: {
                'bulletsColor':false,
                'position': 'right',
                'tooltips': false
            },
        });

    //Hide pagepiling if mobile

    $(window).resize(function () {
        let viewportWidth = $(window).width();
        if (viewportWidth < 500) {
            $(".main-pile").removeAttr('pagepiling');
        }
    });

    /*$("#status").fadeOut("slow");
    $("#preloader").delay(500).fadeOut("slow").remove();*/

});