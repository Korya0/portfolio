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
    const contactContainer = document.getElementById("social-contact-icons");

    SOCIAL_LINKS.forEach(function (social) {
        headerContainer.appendChild(createSocialLink(social));

        const contactLink = createSocialLink(social);
        contactLink.style.padding = "3%";
        contactContainer.appendChild(contactLink);
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
    { value: "1+", label1: "Year", label2: "Experience" },
    { value: "6+", label1: "Apps Built", label2: "" },
    { value: "3", label1: "Client", label2: "Projects" },
];

function renderStats() {
    const statsContainer = document.getElementById("overall-stats");

    STATS.forEach(function (stat) {
        const statDiv = document.createElement("div");
        statDiv.className = "stats stats-data";

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
    });
}
