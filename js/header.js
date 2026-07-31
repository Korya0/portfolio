// Header rendering: name, social links and stats
document.addEventListener("DOMContentLoaded", function () {
    renderHeader();
    renderSocialLinks();
    renderStats();
});

function renderHeader() {
    setText("tag-label", "Software Engineer");
    setText("first-name", "Mahmoud");
    setText("last-name", "Mohamed");
}

function setText(elementId, text) {
    document.getElementById(elementId).textContent = text;
}

const SOCIAL_LINKS = [
    { icon: "fa fa-linkedin-square", url: "https://linkedin.com/in/mahmoudk25" },
    { icon: "fa fa-github", url: "https://github.com/Korya0" },
    { icon: "fa fa-instagram", url: "https://instagram.com/nahmoudmohammeddev" },
];

function renderSocialLinks() {
    const headerContainer = document.getElementById("social-handles");

    SOCIAL_LINKS.forEach(function (social) {
        headerContainer.appendChild(createSocialLink(social));
    });
}

function createSocialLink(social) {
    const anchor = document.createElement("a");
    anchor.className = "social-icon-wrapper";
    anchor.href = social.url;
    anchor.target = "_blank";

    const icon = document.createElement("i");
    icon.className = "social-icon " + social.icon;
    anchor.appendChild(icon);

    return anchor;
}

const STATS = [
    { value: "1+", label1: "Year", label2: "Experience", target: "#exp" },
    { value: "6+", label1: "Apps Built", label2: "", target: "#projects-div" },
    { value: "3", label1: "Client", label2: "Projects", target: "#testimonials-div" },
];

function renderStats() {
    const statsContainer = document.getElementById("overall-stats");

    STATS.forEach(function (stat) {
        const statDiv = document.createElement("div");
        statDiv.className = "stats stats-data";
        statDiv.setAttribute("role", "button");
        statDiv.setAttribute("tabindex", "0");
        statDiv.setAttribute("aria-label", stat.label1 + " " + stat.label2 + ": " + stat.value);

        const valueElement = document.createElement("h1");
        valueElement.className = "value";
        valueElement.textContent = stat.value;

        const labelColumn = document.createElement("div");
        labelColumn.className = "stats-label-column";

        [stat.label1, stat.label2].forEach(function (label) {
            const labelElement = document.createElement("div");
            labelElement.className = "label stats-label";
            labelElement.textContent = label;
            labelColumn.appendChild(labelElement);
        });

        statDiv.appendChild(valueElement);
        statDiv.appendChild(labelColumn);
        statsContainer.appendChild(statDiv);

        attachStatInteractions(statDiv, valueElement, stat);
    });
}

function attachStatInteractions(statDiv, valueElement, stat) {
    const parsed = parseStatValue(stat.value);

    function runCountUp() {
        animateCountUp(valueElement, parsed.number, parsed.suffix);
    }

    // Hover → count-up animation
    statDiv.addEventListener("mouseenter", runCountUp);

    // Click → count-up + smooth scroll to the linked section
    statDiv.addEventListener("click", function () {
        runCountUp();
        if (stat.target) scrollToSection(stat.target);
    });

    // Keyboard accessibility (Enter / Space)
    statDiv.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            runCountUp();
            if (stat.target) scrollToSection(stat.target);
        }
    });
}

function parseStatValue(value) {
    const match = String(value).match(/^(\d+)(.*)$/);
    return { number: match ? parseInt(match[1], 10) : 0, suffix: match ? match[2] : "" };
}

function animateCountUp(element, target, suffix) {
    const duration = 900;
    const startTime = performance.now();

    // Cancel any running animation on the same element to avoid overlapping loops
    if (element._countUpFrame) {
        cancelAnimationFrame(element._countUpFrame);
    }

    function frame(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        // Ease-out curve for a snappy start and soft landing
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);
        element.textContent = current + suffix;

        if (progress < 1) {
            element._countUpFrame = requestAnimationFrame(frame);
        } else {
            delete element._countUpFrame;
        }
    }

    element._countUpFrame = requestAnimationFrame(frame);
}

function scrollToSection(target) {
    const section = document.querySelector(target);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
}
