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
            "name": "HTML 5",
            "icon": "fa fa-html5",
            "type": "web-tech"
        },
        {
            "name": "CSS 3",
            "icon": "fa fa-css3",
            "type": "web-tech"
        },
        {
            "name": "Bootstrap",
            "icon": "fa fa-bootstrap",
            "type": "web-tech"
        },
        {
            "name": "Javascript",
            "icon": "fa fa-js",
            "type": "web-tech"
        },
        {
            "name": "Flask Restful",
            "icon": "fa fa-python",
            "type": "server-tech"
        },
        {
            "name": "Node.js",
            "icon": "fa fa-node",
            "type": "server-tech"
        },
        {
            "name": "Express.js",
            "icon": "fa fa-node",
            "type": "server-tech"
        },
        {
            "name": "REST APIs",
            "icon": "images/tech/api.svg",
            "type": "server-tech"
        },
        {
            "name": "Dart Frog",
            "icon": "images/tech/dart.svg",
            "type": "server-tech"
        },
        {
            "name": "Firebase",
            "icon": "images/tech/firebase.svg",
            "type": "database-tech"
        },
        {
            "name": "MongoDB",
            "icon": "fa fa-database",
            "type": "database-tech"
        },
        {
            "name": "Postgres SQL",
            "icon": "fa fa-database",
            "type": "database-tech"
        },
        {
            "name": "GitHub",
            "icon": "images/tech/github.svg",
            "type": "vc-tech"
        },
        {
            "name": "Jira",
            "icon": "fa fa-jira",
            "type": "vc-tech"
        },
        {
            "name": "Notion",
            "icon": "images/tech/notion.svg",
            "type": "vc-tech"
        },
        {
            "name": "Figma",
            "icon": "images/tech/figma.svg",
            "type": "design-tech"
        },
        {
            "name": "Adobe XD",
            "icon": "fa fa-adobe",
            "type": "design-tech"
        }
    ];

    for (var i = 0; i < tech.length; i++) {
        var techDiv = document.createElement("div");
        techDiv.className = "tech";

        if (tech[i]["icon"].startsWith("fa ")) {
            var iconEl = document.createElement("i");
            iconEl.className = tech[i]["icon"] + " tech-icon";
            if (tech[i]["name"] == "Node.js" || tech[i]["name"] == "Dart Frog") {
                iconEl.style.height = "25px";
            }
            techDiv.appendChild(iconEl);
        } else {
            var techIconImg = document.createElement("img");
            techIconImg.className = "tech-icon";
            if (tech[i]["name"] == "Node.js" || tech[i]["name"] == "Dart Frog") {
                techIconImg.style.height = "25px";
            }
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
