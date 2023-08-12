import "./bootstrap";
import "./aos";
import "./script";

import Alpine from "alpinejs";
import focus from "@alpinejs/focus";

window.Alpine = Alpine;

Alpine.plugin(focus);

Alpine.start();


$(document).ready(function () {
    $(window).scroll(function () {
        var footerOffset = $("#footer").offset().top;
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        var fixedImg = $("#fixedImg");

        if (scrollTop + windowHeight > footerOffset) {
            $("#fixedImg").hide();
            $("#absoluteImg").show();
        } else {
            $("#fixedImg").show();
            $("#absoluteImg").hide();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener("click", function () {
                // Get the "main-nav" element
                var $target = document.getElementById("main-nav");

                // Toggle the class on "main-nav"
                $target.classList.toggle("hidden");
            });
        });
    }
});
(function (window, $, undefined) {
    "use strict";

    ////////////// Begin jQuery and grab the $ ////////////////////////////////////////

    $(document).ready(function () {
        $(".naaa").click(function () {
            $("#main-nav").addClass("hidden");
        });

        function is_scrolling() {
            var $element = $(".site-header"),
                $nav_height = $element.outerHeight(true);

            if ($(this).scrollTop() >= $nav_height) {
                //if scrolling is equal to or greater than the nav height add a class

                $element.addClass("is-scrolling");
                $(".sticky").addClass("is-blue");
            } else {
                //is back at the top again, remove the class

                $element.removeClass("is-scrolling");
                $(".sticky").removeClass("is-blue");
            }
        } //end is_scrolling();

        $(window).scroll(_.throttle(is_scrolling, 200));
    }); //* end ready
})(this, jQuery);

AOS.init();

var openmodal = document.getElementById("modal-open");
openmodal.addEventListener("click", function (event) {
    event.preventDefault();
    toggleModal();
});

const overlay = document.querySelector(".modal-overlay");
overlay.addEventListener("click", toggleModal);

var closemodal = document.querySelectorAll(".modal-close");
for (var i = 0; i < closemodal.length; i++) {
    closemodal[i].addEventListener("click", toggleModal);
}

document.onkeydown = function (evt) {
    if ($(".modal").css("opacity") == 1) {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
            isEscape = evt.key === "Escape" || evt.key === "Esc";
        } else {
            isEscape = evt.keyCode === 27;
        }
        if (isEscape && document.body.classList.contains("modal-active")) {
            toggleModal();
        }
    }
    if ($(".modal2").css("opacity") == 1) {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
            isEscape = evt.key === "Escape" || evt.key === "Esc";
        } else {
            isEscape = evt.keyCode === 27;
        }
        if (isEscape && document.body.classList.contains("modal-active")) {
            toggleModal2();
        }
    }
    if ($(".modal3").css("opacity") == 1) {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
            isEscape = evt.key === "Escape" || evt.key === "Esc";
        } else {
            isEscape = evt.keyCode === 27;
        }
        if (isEscape && document.body.classList.contains("modal-active")) {
            toggleModal3();
        }
    }
};

function toggleModal() {
    const body = document.querySelector("body");
    const modal = document.querySelector(".modal");
    modal.classList.toggle("opacity-0");
    modal.classList.toggle("pointer-events-none");
    body.classList.toggle("modal-active");
}

var openmodal2 = document.getElementById("modal-open2");
openmodal2.addEventListener("click", function (event) {
    event.preventDefault();
    toggleModal2();
});

const overlay2 = document.querySelector(".modal-overlay2");
overlay2.addEventListener("click", toggleModal2);

var closemodal2 = document.querySelectorAll(".modal-close2");
for (var i = 0; i < closemodal2.length; i++) {
    closemodal2[i].addEventListener("click", toggleModal2);
}

function toggleModal2() {
    const body = document.querySelector("body");
    const modal = document.querySelector(".modal2");
    modal.classList.toggle("opacity-0");
    modal.classList.toggle("pointer-events-none");
    body.classList.toggle("modal-active");
}

var openmodal3 = document.getElementById("modal-open3");
openmodal3.addEventListener("click", function (event) {
    event.preventDefault();
    toggleModal3();
});

const overlay3 = document.querySelector(".modal-overlay3");
overlay3.addEventListener("click", toggleModal3);

var closemodal3 = document.querySelectorAll(".modal-close3");
for (var i = 0; i < closemodal3.length; i++) {
    closemodal3[i].addEventListener("click", toggleModal3);
}

function toggleModal3() {
    const body = document.querySelector("body");
    const modal = document.querySelector(".modal3");
    modal.classList.toggle("opacity-0");
    modal.classList.toggle("pointer-events-none");
    body.classList.toggle("modal-active");
}
jQuery(document).ready(
    (function ($) {
        // Scroll to the desired section on click
        // Make sure to add the `data-scroll` attribute to your `<a>` tag.
        // Example:
        // `<a data-scroll href="#my-section">My Section</a>` will scroll to an element with the id of 'my-section'.
        function scrollToSection(event) {
            event.preventDefault();
            var $section = $($(this).attr("href"));
            $("html, body").animate(
                {
                    scrollTop: $section.offset().top - 80,
                },
                1000
            );
        }
        $("[data-scroll]").on("click", scrollToSection);
    })(jQuery)
);

$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
        // If page is scrolled more than 50px
        $("#return-to-top").fadeIn(200); // Fade in the arrow
    } else {
        $("#return-to-top").fadeOut(200); // Else fade out the arrow
    }
});
$("#return-to-top").click(function () {
    // When arrow is clicked
    $(".naaa").removeClass("active");
    $("body,html").animate(
        {
            scrollTop: 1, // Scroll to top of body
        },
        500
    );
});

$(function () {
    $(".naaa").click(function () {
        // remove classes from all
        $(".naaa").removeClass("active");
        // add class to the one we clicked
        $(this).addClass("active");
    });
});
