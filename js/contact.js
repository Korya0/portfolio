document.addEventListener("DOMContentLoaded", function () {
    mapContactDetails();
    currentDate();
});

function mapContactDetails() {
    let contactInfo = [
        {
            "icon": "fa fa-phone",
            "label": "+20 106 517 1195",
            "link": "https://wa.me/201065171195?text=Hello%20Mahmoud%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you%21"
        },
        {
            "icon": "fa fa-envelope",
            "label": "mahmoudmohamed01559@gmail.com",
            "link": "#",
            "copy": "mahmoudmohamed01559@gmail.com"
        }
    ];

    for (var i = 0; i < contactInfo.length; i++) {
        var c = contactInfo[i];
        var icon = c.icon;
        var label = c.label;
        var link = c.link;

        var card = document.createElement("a");
        card.className = "contact-card";

        card.href = link;
        
        if (c.copy) {
            card.addEventListener("click", function(e) {
                e.preventDefault();
                navigator.clipboard.writeText(c.copy).then(function() {
                    var labelEl = card.querySelector(".contact-label");
                    if (labelEl) {
                        var original = labelEl.textContent;
                        labelEl.textContent = "Copied!";
                        labelEl.style.color = "var(--primary-green)";
                        setTimeout(function() {
                            labelEl.textContent = original;
                            labelEl.style.color = "";
                        }, 1000);
                    }
                });
            });
        } else {
            card.target = "_blank";
        }

        var iconDiv = document.createElement("i");
        iconDiv.className = icon;
        iconDiv.id = "mail-icon";

        var labelDiv = document.createElement("span");
        labelDiv.className = "body2 contact-label";
        labelDiv.innerHTML = label;

        var chevDiv = document.createElement("i");
        chevDiv.id = "chevron-icon";
        chevDiv.className = "fa fa-chevron-right";

        card.appendChild(iconDiv);
        card.appendChild(labelDiv);
        card.appendChild(chevDiv);

        var contactInfoDiv = document.getElementById("contact-info-div");
        contactInfoDiv.insertBefore(card, contactInfoDiv.firstChild);
    }
}

function onMeetClick() {
    window.open("https://rebrand.ly/MahmoudCV", '_blank');
}

function currentDate() {
    const current = new Date();
    let monthName = current.toLocaleDateString('en-US', {
        month: "long",
    });

    let date = current.getDate();

    let dayName = current.toLocaleDateString('en-US', {
        weekday: "long",
    });

    var monthText = document.getElementById("month");
    monthText.innerHTML = monthName;

    var dayText = document.getElementById("date");
    dayText.innerHTML = date;

    var weekDayText = document.getElementById("day");
    weekDayText.innerText = dayName;
}