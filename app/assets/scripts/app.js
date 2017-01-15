$(document).ready(function() {

    /*Call pagepiling plugin */
        $('#pagepiling').pagepiling({
            loopTop: true,
            loopBottom: true,
            keyboardScrolling: true,
            verticalCentered: false,
            navigation: {
                'bulletsColor':false,
                'position': 'right',
                'tooltips': false
            },
        });

    /*$("#status").fadeOut("slow");
    $("#preloader").delay(500).fadeOut("slow").remove();*/

});