// Header contact icons: phone and email, rendered next to the social icons
document.addEventListener("DOMContentLoaded", function () {
    renderHeaderContact();
});

const CONTACT_ITEMS = [
    {
        icon: "fa fa-phone",
        url: "https://wa.me/201065171195?text=Hello%20Mahmoud%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you%21",
        ariaLabel: "Phone",
    },
    {
        icon: "fa fa-envelope",
        url: "#",
        copyText: "mahmoudmohamed01559@gmail.com",
        ariaLabel: "Email",
    },
];

function renderHeaderContact() {
    const container = document.getElementById("social-handles");
    if (!container) return;

    CONTACT_ITEMS.forEach(function (item) {
        container.appendChild(createContactIcon(item));
    });
}

function createContactIcon(item) {
    const anchor = document.createElement("a");
    anchor.className = "social-icon-wrapper";
    anchor.href = item.url;
    anchor.setAttribute("aria-label", item.ariaLabel);

    if (item.copyText) {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            copyToClipboard(item.copyText, anchor);
        });
    } else {
        anchor.target = "_blank";
    }

    const icon = document.createElement("i");
    icon.className = "social-icon " + item.icon;
    anchor.appendChild(icon);

    return anchor;
}

function copyToClipboard(text, anchor) {
    navigator.clipboard.writeText(text).then(function () {
        const iconElement = anchor.querySelector(".social-icon");
        const originalClass = iconElement.className;
        const originalColor = iconElement.style.color;

        iconElement.className = "social-icon fa fa-check";
        iconElement.style.color = "white";

        setTimeout(function () {
            iconElement.className = originalClass;
            iconElement.style.color = originalColor;
        }, 1000);
    });
}

function onMeetClick() {
    window.open("https://rebrand.ly/MahmoudCV", "_blank");
}
