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
        let viewportWidth = Number($(window).width());
        if (viewportWidth < 500) {
            $("div#pagepiling").removeAttr('pagepiling');
        }
    });

    /*$("#status").fadeOut("slow");
    $("#preloader").delay(500).fadeOut("slow").remove();*/

});