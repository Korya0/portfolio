document.addEventListener("DOMContentLoaded", function () {
    mapTechData();
});

function mapTechData() {
    let tech = [
        {
            "name": "Flutter",
            "icon": "images/tech/flutter.svg",
            "type": "mobile-tech"
        },
        {
            "name": "Dart",
            "icon": "images/tech/dart.svg",
            "type": "mobile-tech"
        },
        {
            "name": "REST APIs",
            "icon": "images/tech/api.svg",
            "type": "server-tech"
        },
        {
            "name": "Firebase",
            "icon": "images/tech/firebase.svg",
            "type": "database-tech"
        },
        {
            "name": "GitHub",
            "icon": "images/tech/github.svg",
            "type": "vc-tech"
        },
        {
            "name": "Figma",
            "icon": "images/tech/figma.svg",
            "type": "design-tech"
        }
    ];

    for (var i = 0; i < tech.length; i++) {
        var techDiv = document.createElement("div");
        techDiv.className = "tech";

        if (tech[i]["icon"].startsWith("fa ")) {
            var iconEl = document.createElement("i");
            iconEl.className = tech[i]["icon"] + " tech-icon";
            techDiv.appendChild(iconEl);
        } else {
            var techIconImg = document.createElement("img");
            techIconImg.className = "tech-icon";
            techIconImg.src = tech[i]["icon"];
            techIconImg.alt = tech[i]["name"];
            techDiv.appendChild(techIconImg);
        }

        var techName = document.createElement("span");
        techName.className = "tech-label";
        techName.innerHTML = tech[i]["name"];
        techDiv.appendChild(techName);

        var relatedDiv = document.getElementById(tech[i]["type"]);
        if (relatedDiv) {
            relatedDiv.appendChild(techDiv);
        }
    }
}
