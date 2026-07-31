// Client Testimonials rendering — the review text is shown inside each
// screenshot image, so cards display only the visual + metadata.
document.addEventListener("DOMContentLoaded", renderTestimonials);

const MOSTAQL_ICON = "images/svgs/mostaql.svg";

const TESTIMONIALS = [
    {
        client: "Hussain K.",
        image: "images/reviews/review-car-register.png",
        alt: "Screenshot of a five-star client review on Mostaql by Hussain K. praising the delivery quality and punctuality of the Car Register app",
        link: "https://mostaql.com/u/Korya/reviews/9091624",
    },
    {
        client: "Abdulrahman M.",
        image: "images/reviews/review-ico-stories.png",
        alt: "Screenshot of a five-star client review on Mostaql by Abdulrahman M. praising cooperation and professionalism on the ICO Stories app",
        link: "https://mostaql.com/u/Korya/reviews/9118016",
    },
    {
        client: "Abdulrahman M.",
        image: "images/reviews/review-private-project.png",
        alt: "Screenshot of a five-star client review on Mostaql by Abdulrahman M. praising always meeting deadlines",
        link: "https://mostaql.com/u/Korya/reviews/9379221",
    },
];

function renderTestimonials() {
    const container = document.getElementById("testimonials");
    if (!container) return;

    TESTIMONIALS.forEach(function (item, index) {
        const card = createTestimonialCard(item);

        // Scroll reveal — staggered fade-up
        card.setAttribute("data-aos", "fade-up");
        card.setAttribute("data-aos-delay", String(index * 100));

        container.appendChild(card);
    });

    // Make sure AOS picks up the dynamically added cards after init
    setTimeout(function () {
        if (window.AOS && window.AOS.refresh) {
            window.AOS.refresh();
        }
    }, 0);
}

function createTestimonialCard(item) {
    const card = document.createElement("article");
    card.className = "testimonial-card";

    card.appendChild(createMedia(item));
    card.appendChild(createBody(item));
    return card;
}

function createMedia(item) {
    const figure = document.createElement("figure");
    figure.className = "testimonial-media";

    // "Mostaql" platform badge on the screenshot (like the project type badge)
    const type = document.createElement("span");
    type.className = "testimonial-type";

    const icon = document.createElement("img");
    icon.className = "mostaql-svg";
    icon.src = MOSTAQL_ICON;
    // Decorative — the visible "Mostaql" text label already carries the name
    icon.alt = "";
    icon.setAttribute("aria-hidden", "true");
    type.appendChild(icon);
    type.appendChild(document.createTextNode("Mostaql"));

    figure.appendChild(type);

    const image = document.createElement("img");
    image.className = "testimonial-screenshot";
    image.src = item.image;
    image.alt = item.alt;
    image.loading = "lazy";
    figure.appendChild(image);

    return figure;
}

function createBody(item) {
    const body = document.createElement("div");
    body.className = "testimonial-body";

    // Matches the project card title markup (.p-title)
    const title = document.createElement("p");
    title.className = "body1 testimonial-title";
    title.textContent = item.client;

    body.appendChild(title);
    body.appendChild(createReviewLink(item.link));
    return body;
}

function createReviewLink(url) {
    const link = document.createElement("a");
    link.className = "testimonial-link";
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", "View the original review on Mostaql (opens in a new tab)");

    // Mirrors the Experience section link (.exp-link): icon first, then label
    const icon = document.createElement("i");
    icon.className = "fa fa-external-link";
    icon.setAttribute("aria-hidden", "true");
    link.appendChild(icon);

    link.appendChild(document.createTextNode("View Preview"));
    return link;
}

// Fallback: if AOS fails to load, keep the section visible anyway
window.addEventListener("load", function () {
    if (window.AOS) return;

    document.querySelectorAll(".testimonials-div [data-aos]").forEach(function (el) {
        el.classList.add("aos-animate");
    });
});
