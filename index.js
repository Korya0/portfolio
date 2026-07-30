/// Incase needed in future - problem with click
// $(document).scroll(function () {
//     var up = document.getElementById("up");
//     var y = $(this).scrollTop();
//     if (y > 800) {
//         up.className = "up show";
//         $("#up").fadeIn();
//     } else {
//         up.className = "up hide";
//         $("#up").fadeOut();
//     }
// });


document.addEventListener("DOMContentLoaded", function () {

    scrollToTop();
    aosInit();

    window.onscroll = function () {
        $(document).on("scroll", onScroll);

        //smooth scroll
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');

            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top + 2
            }, 1000, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    }
})

function scrollToTop() {
    // scroll to top
    $("#up").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
        return false;
    });

    $("#brand").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
        return false;
    });

}

function aosInit() {
    // fade in's animation
    AOS.init({
        easing: "ease",
        duration: 1200,
        once: true
    });
}

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#navbarMenu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navbarMenu ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
}

function downloadResume() {
    window.open("https://mhmz.dev/resume", "_blank");
}

// Clean URL parameters for better SEO
(function cleanUrlParameters() {
    if (window.location.search) {
        // List of allowed parameters (if any)
        const allowedParams = []; // Add any parameters you want to keep

        const url = new URL(window.location);
        const params = new URLSearchParams(url.search);

        // Remove tracking parameters
        const trackingParams = [
            'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
            'trk', 'from', 'ref', 'source', 'fbclid', 'gclid', '_ga'
        ];

        let hasChanges = false;
        trackingParams.forEach(param => {
            if (params.has(param) && !allowedParams.includes(param)) {
                params.delete(param);
                hasChanges = true;
            }
        });

        if (hasChanges) {
            const cleanUrl = url.origin + url.pathname + (params.toString() ? '?' + params.toString() : '');
            window.history.replaceState({}, document.title, cleanUrl);
        }
    }
})();