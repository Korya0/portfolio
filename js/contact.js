// Contact section rendering: contact cards and current date
document.addEventListener("DOMContentLoaded", function () {
    renderContactCards();
    renderCurrentDate();
});

const CONTACT_ITEMS = [
    {
        icon: "fa fa-phone",
        label: "+20 106 517 1195",
        link: "https://wa.me/201065171195?text=Hello%20Mahmoud%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you%21",
    },
    {
        icon: "fa fa-envelope",
        label: "mahmoudmohamed01559@gmail.com",
        link: "#",
        copyText: "mahmoudmohamed01559@gmail.com",
    },
];

function renderContactCards() {
    const container = document.getElementById("contact-info-div");

    CONTACT_ITEMS.forEach(function (item) {
        container.insertBefore(createContactCard(item), container.firstChild);
    });
}

function createContactCard(item) {
    const card = document.createElement("a");
    card.className = "contact-card";
    card.href = item.link;

    if (item.copyText) {
        card.addEventListener("click", function (event) {
            event.preventDefault();
            copyToClipboard(item.copyText, card);
        });
    } else {
        card.target = "_blank";
    }

    const icon = document.createElement("i");
    icon.className = "contact-card-icon " + item.icon;

    const label = document.createElement("span");
    label.className = "body2 contact-label";
    label.textContent = item.label;

    const chevron = document.createElement("i");
    chevron.className = "contact-card-chevron fa fa-chevron-right";

    card.appendChild(icon);
    card.appendChild(label);
    card.appendChild(chevron);
    return card;
}

function copyToClipboard(text, card) {
    navigator.clipboard.writeText(text).then(function () {
        const labelElement = card.querySelector(".contact-label");
        const originalText = labelElement.textContent;

        labelElement.textContent = "Copied!";
        labelElement.style.color = "var(--primary-green)";

        setTimeout(function () {
            labelElement.textContent = originalText;
            labelElement.style.color = "";
        }, 1000);
    });
}

function onMeetClick() {
    window.open("https://rebrand.ly/MahmoudCV", "_blank");
}

function renderCurrentDate() {
    const current = new Date();

    const monthName = current.toLocaleDateString("en-US", { month: "long" });
    const dayNumber = current.getDate();
    const dayName = current.toLocaleDateString("en-US", { weekday: "long" });

    document.getElementById("month").textContent = monthName;
    document.getElementById("date").textContent = dayNumber;
    document.getElementById("day").textContent = dayName;
}
