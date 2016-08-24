// JavaScript Document

$(document).ready(function () {
    var expadedContent = document.getElementsByClassName("tab-content");
    var umpgLogoLarge = document.getElementsByClassName('logo-large');

    $(expadedContent).hide();
    //$(umpgLogoLarge).hide();
});


var navBarHandler = (function () {
    var navClosed = true;





    var swapConent = function () {
        var expadedContent = document.getElementsByClassName("tab-content");
        var collapsedContent = document.getElementsByClassName("collapsed-content");
        var mainMenu = document.getElementsByClassName("nav-panel");
       if (!$(mainMenu).hasClass('open')) {
       
            //If Closed
            $(collapsedContent).fadeIn();
            $(expadedContent).hide();
        } else {
            //If opened
            $(collapsedContent).hide();
            $(expadedContent).delay(340).fadeIn();
        }
    }

    var toggleOpenClass = function () {

        var mainMenu = document.getElementsByClassName("nav-panel");
        if (navClosed) {
            $(mainMenu).addClass("open");
        } else {
            $(mainMenu).removeClass("open");
        }
    }

    /* Open when someone clicks on the span element */
    var openNav = function () {
        toggleOpenClass();
        navClosed = !navClosed;
       // swapConent();
    }

    /* Close when someone clicks on the "x" symbol inside the overlay */
    var closeNav = function () {
        toggleOpenClass();
        navClosed = !navClosed;
//        swapConent();
    }

    var removeActiveTabs = function() {
        $('.tab-pane').removeClass('active');
        $('.mapTab').removeClass('active');
    }

    return {
        toggleNav: function () {
            if (navClosed) {
                openNav();
            } else {
                closeNav();
            }
        },

        openNav: function () {
            //make sure nav is not already opened
            var mainMenu = document.getElementsByClassName("nav-panel");
            if (!$(mainMenu).hasClass('open')) {
                openNav();
            }
        },

        openAmericasTab: function() {
            //remove active tab
            var mainMenu = document.getElementsByClassName("nav-panel");
            if (!$(mainMenu).hasClass('open')) {
                openNav();
                removeActiveTabs();
                $('#americas').addClass('active');
                $('.americas-pill').addClass('active');
                swapConent();

            }
        },

        openEuropeTab:function() {
            var mainMenu = document.getElementsByClassName("nav-panel");
            if (!$(mainMenu).hasClass('open')) {
                openNav();
                removeActiveTabs();
                $('#europe').addClass('active');
                $('.europe-pill').addClass('active');
                swapConent();
            }
        },
        openAsiaTab: function () {
            var mainMenu = document.getElementsByClassName("nav-panel");
            if (!$(mainMenu).hasClass('open')) {
                openNav();
                removeActiveTabs();
                $('#asiapacific').addClass('active');
                $('.asiapacific-pill').addClass('active');
                swapConent();
            }
        },

        closeNav: function () {
            closeNav();
            removeActiveTabs();
            swapConent();
        }
    }
})();