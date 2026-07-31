// Smooth scrolling, scroll-to-top button, AOS animations and URL cleanup
$(document).ready(function () {
    scrollToTop();
    initSmoothScroll();
    aosInit();

    // Highlight the active nav link while scrolling
    $(document).on("scroll", onScroll);
});

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

function initSmoothScroll() {
    // smooth scroll
    $('a[href^="#"]').on('click', function (e) {
        const target = this.hash;
        const $target = $(target);
        if ($target.length === 0) return;

        e.preventDefault();
        $(document).off("scroll", onScroll);

        $('a').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 1000, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
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

function onScroll() {
    const scrollPos = $(document).scrollTop();
    $('#navbar-menu a').each(function () {
        const currLink = $(this);
        const refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navbar-menu ul li a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}

// Clean URL parameters for better SEO
(function cleanUrlParameters() {
    if (!window.location.search) return;

    const url = new URL(window.location);
    const params = new URLSearchParams(url.search);

    // Tracking parameters to strip from the URL
    const trackingParams = [
        'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
        'trk', 'from', 'ref', 'source', 'fbclid', 'gclid', '_ga'
    ];

    let hasChanges = false;
    trackingParams.forEach(param => {
        if (params.has(param)) {
            params.delete(param);
            hasChanges = true;
        }
    });

    if (hasChanges) {
        const cleanUrl = url.origin + url.pathname + (params.toString() ? '?' + params.toString() : '');
        window.history.replaceState({}, document.title, cleanUrl);
    }
})();
