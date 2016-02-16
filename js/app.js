$(document).ready(function() {
    //$('.card').on('click', function () {
    //    $(".dubi")
    //        .animate(
    //        {
    //            padding: 0,
    //            width: ['toggle', 'swing']
    //        }, 'fast', 'easeOutExpo')
    //});


    $('#fullpage').fullpage({
        css3: true,
        scrollingSpeed: 500,
        easingcss3: 'cubic-bezier(0.860, 0.000, 0.070, 1.000)',
        controlArrows: false,
        easing: 'easeInOutCirc',
        loopHorizontal: false,
        scrollOverflow: true,
        //normalScrollElementTouchThreshold: 100,
        //normalScrollElements: '.detail-content',

    })
});