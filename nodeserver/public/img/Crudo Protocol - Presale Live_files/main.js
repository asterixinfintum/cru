/*-----------------------------------------------------------------------------------

    Theme Name: SQE
    Theme URI: http://
    Description: The Multi-Purpose Onepage Template
    Author: gecdesigns    

-----------------------------------------------------------------------------------*/

/*=================================================
 == Table Of Content

    1. PRELOADER
    2. SCROLLIT
    3. NAVBAR
    4. SCROLL TO TOP    
    5. SKILL PROGRESS
    6. PORTFOLIO
    7. COUNT TO TRIGGER
    8. OWLCAROUSEL
    9. VALIDATOR

*/

$(function () {
    "use strict";
    var wind = $(window);

    /*============= PRELOADER ============= */
    $(document).ready(function () {

        // Fakes the loading setting a timeout
        setTimeout(function () {
            $('body').addClass('loaded');
        }, 1500);

    });

    /*============= SCROLLIT ============= */
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -1 // offste (in px) for fixed top navigation
    });

    /*============= NAVBAR ============= */
    // Add navbar background color when scrolled
    $(window).scroll(function () {
        if ($(window).scrollTop() > 56) {
            $(".navbar").addClass("nav-scroll");
        } else {
            $(".navbar").removeClass("nav-scroll");
        }
    });

    // close navbar-collapse when a  clicked
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

});

/*============= SCROLL TO TOP ============= */
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#scroll-to-top').click(function () {
        $('#scroll-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

/*======== SKILL PROGRESS ========*/
$(function () {
    "use strict";
    var windows = $(window);
    windows.on('scroll', function () {
        $(".progress-item span").each(function () {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_windows = $(windows).scrollTop() + $(windows).height();
            var myVal = $(this).attr('data-value');
            if (bottom_of_windows > bottom_of_object) {
                $(this).css({
                    width: myVal
                });
            }
        });
    });
});



