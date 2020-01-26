(function ($) {
    "use strict";

    $.fn.menumaker = function (options) {
        var cssmenu = $(this),
            settings = $.extend({
                title: "Menu",
                format: "dropdown",
                sticky: false
            }, options);
        return this.each(function () {
            cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
            $(this).find("#menu-button").on('click', function () {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('ul');
                if (mainmenu.hasClass('open')) {
                    mainmenu.slideUp('fast').removeClass('open');
                } else {
                    mainmenu.slideDown('fast').addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('ul').slideDown();
                    }
                }
            });
            cssmenu.find('li ul').parent().addClass('has-sub');
            var multiTg = function () {
                cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                cssmenu.find('.submenu-button').on('click', function () {
                    $(this).toggleClass('submenu-opened');
                    if ($(this).siblings('ul').hasClass('open')) {
                        $(this).siblings('ul').removeClass('open').slideUp('fast');
                    } else {
                        $(this).siblings('ul').addClass('open').slideDown('fast');
                    }
                });
            };
            if (settings.format === 'multitoggle') multiTg();
            else cssmenu.addClass('dropdown');
            if (settings.sticky === true) cssmenu.css('position', 'fixed');
            var resizeFix = function () {
                if ($(window).width() > 992) {
                    cssmenu.find('ul').show();
                }
                if ($(window).width() < 992) {
                    cssmenu.find('ul').hide().removeClass('open');
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);
        });
    };
})(jQuery);

(function ($) {
    "use strict";

    $(function () {


        //used for humburg menu on header 
        // $('.menu-trigger').on('click', function () {
        //     $(this).toggleClass('active');
        //     return false;
        // });

        //over

        $(".header-menu").menumaker({
            title: '<i class="fa fa-bars"></i>',
            format: "multitoggle"
        });

        $("#dd_drop_1,#dd_drop_2,#dd_drop_3,#dd_drop_4, #colleps-row").on('click', function () {
            jQuery(this).toggleClass("active");
        });

        // google map

        // $('#close-map-modal').click(function(e) {
        //     debugger
        //     e.stopPropagation();
        //     jQuery(this).parents('.google-map-style,.active').removeClass('active');
        // });

        // $('#google-map').click(function(e) {
        //     debugger
        //     e.stopPropagation();
        //     jQuery(this).addClass("active");
        // });



        // $(document).click(function() {

        //     jQuery('#google-map').removeClass("active");
        // });




        //#img-upload-1, #img-upload-2, #img-upload-3, #img-upload-4, #vid-upload-1
        /* $(".img-container .imgUp").on('click', function () {
             
             
             jQuery(".img-container .imgUp").each(function(){
                 jQuery(this).removeClass("active");
             });
             jQuery(this).addClass("active");
             
         });
 
         $(".upload-box .imgUp").on('click', function () {
             jQuery(this).toggleClass("active");    
         });
 
         $(".videoUp").on('click', function () {
             jQuery(this).toggleClass("active");    
         });*/


    });


})(jQuery);