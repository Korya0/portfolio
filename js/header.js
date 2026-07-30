document.addEventListener("DOMContentLoaded", function () {
    mapMetaDataInHeader();
    mapSocialLinksData();
    mapStatsData();
});

function mapMetaDataInHeader() {
    var tagElement = document.getElementById("tag-label");
    tagElement.innerText = 'Software Engineer';

    let firstName = 'Mahmoud';
    let lastName = 'Mohamed';

    var firstNameElement = document.getElementById("first-name");
    firstNameElement.innerHTML = firstName;

    var lastNameElement = document.getElementById("last-name");
    lastNameElement.innerHTML = lastName;

}

function mapSocialLinksData() {
    let socials = [
        {
            "icon": "fa fa-linkedin-square",
            "value": "https://linkedin.com/in/mahmoudk25"
        },
        {
            "icon": "fa fa-github",
            "value": "https://github.com/Korya0"
        },
        {
            "icon": "fa fa-instagram",
            "value": "https://instagram.com/nahmoudmohammeddev"
        }
    ];

    // icons in top section
    for (var i = 0; i < socials.length; i++) {
        var anchor = document.createElement("a");
        anchor.className = "social-icon-wrapper";

        var icon = document.createElement("i");
        icon.className = "social-icon " + socials[i]["icon"];

        var link = socials[i]["value"];
        anchor.href = link;

        if (socials[i]["copy"]) {
            anchor.addEventListener("click", function(e) {
                e.preventDefault();
                var text = this.getAttribute("data-copy");
                navigator.clipboard.writeText(text).then(function() {
                    var original = document.querySelector(".social-icon.fa-envelope") ? document.querySelector(".social-icon.fa-envelope").style.color : "";
                    var iconEl = document.querySelector(".social-icon.fa-envelope");
                    if (iconEl) iconEl.style.color = "var(--primary-green)";
                    setTimeout(function() {
                        if (iconEl) iconEl.style.color = original || "";
                    }, 1000);
                });
            });
            anchor.setAttribute("data-copy", socials[i]["copy"]);
        } else {
            anchor.target = "_blank";
        }

        anchor.appendChild(icon);

        var socialHandles = document.getElementById("social-handles");
        socialHandles.appendChild(anchor);
    }

    // icons in contact section
    for (var i = 0; i < socials.length; i++) {
        var anchor = document.createElement("a");
        anchor.className = "social-icon-wrapper";
        anchor.style.padding = "3%";

        var icon = document.createElement("i");
        icon.className = "social-icon " + socials[i]["icon"];

        var link = socials[i]["value"];
        anchor.href = link;

        if (socials[i]["copy"]) {
            anchor.addEventListener("click", function(e) {
                e.preventDefault();
                var text = this.getAttribute("data-copy");
                navigator.clipboard.writeText(text).then(function() {
                    var iconEl = document.querySelectorAll(".social-icon.fa-envelope");
                    iconEl.forEach(function(el) { el.style.color = "#28a745"; });
                    setTimeout(function() {
                        iconEl.forEach(function(el) { el.style.color = ""; });
                    }, 1000);
                });
            });
            anchor.setAttribute("data-copy", socials[i]["copy"]);
        } else {
            anchor.target = "_blank";
        }

        anchor.appendChild(icon);

        var socialHandlsContact = document.getElementById("social-contact-icons");
        var extraDiv = document.createElement("div");

        socialHandlsContact.appendChild(extraDiv);
        socialHandlsContact.appendChild(anchor);
        socialHandlsContact.appendChild(extraDiv);
    }
}

function mapStatsData() {
    let stats = [
        {
            "value": "1+",
            "text-1": "Year",
            "text-2": "Experience"
        },
        {
            "value": "6+",
            "text-1": "Apps Built",
            "text-2": ""
        },
        {
            "value": "3",
            "text-1": "Client",
            "text-2": "Projects"
        }
    ];

    for (var i = 0; i < stats.length; i++) {
        var stat = stats[i];
        var value = stat["value"];
        var txt1 = stat["text-1"];
        var txt2 = stat["text-2"];
        var link = stat["link"];

        var div = document.createElement("div");
        div.className = "stats stats-data";

        var valueText;
        if (link) {
            valueText = document.createElement("a");
            valueText.href = link;
            valueText.target = "_blank";
        } else {
            valueText = document.createElement("h1");
        }
        valueText.className = "value";
        valueText.textContent = value;

        var textColumn = document.createElement("div");
        textColumn.className = "stats-label-column";

        var text1 = document.createElement("div");
        text1.className = "label stats-label";
        text1.innerHTML = txt1;

        var text2 = document.createElement("div");
        text2.className = "label stats-label";
        text2.innerHTML = txt2;

        textColumn.appendChild(text1);
        textColumn.appendChild(text2);

        div.appendChild(valueText);
        div.appendChild(textColumn);

        var overaAllStatsDiv = document.getElementById("overall-stats");
        overaAllStatsDiv.append(div);
    }
}