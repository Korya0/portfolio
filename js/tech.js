document.addEventListener("DOMContentLoaded", function () {
    mapTechData();
});

function mapTechData() {
    let tech = [
        // Mobile Development (Longest → Shortest)
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

        // Networking (Longest → Shortest)
        {
            "name": "REST APIs",
            "icon": "images/tech/api.svg",
            "type": "server-tech"
        },
        {
            "name": "GraphQL",
            "icon": "images/tech/graphql.svg",
            "type": "server-tech"
        },

        // Databases (Longest → Shortest)
        {
            "name": "Firebase",
            "icon": "images/tech/firebase.svg",
            "type": "database-tech"
        },
        {
            "name": "Supabase",
            "icon": "images/tech/supabase.svg",
            "type": "database-tech"
        },

        // State Management (Longest → Shortest)
        {
            "name": "Bloc / Cubit",
            "icon": "images/tech/bloc-svgrepo-com.svg",
            "type": "state-tech"
        },
        {
            "name": "Riverpod",
            "icon": "images/tech/redux-svgrepo-com.svg",
            "type": "state-tech"
        },

        // Local Storage (Longest → Shortest)
        {
            "name": "SharedPreferences",
            "icon": "images/tech/storage.svg",
            "type": "storage-tech"
        },
        {
            "name": "Hive",
            "icon": "images/tech/hive.svg",
            "type": "storage-tech"
        },

        // Testing (Longest → Shortest)
        {
            "name": "Integration",
            "icon": "images/tech/testing.svg",
            "type": "testing-tech"
        },
        {
            "name": "Widget",
            "icon": "images/tech/testing.svg",
            "type": "testing-tech"
        },
        {
            "name": "Unit",
            "icon": "images/tech/testing.svg",
            "type": "testing-tech"
        },

        // CI/CD (Longest → Shortest)
        {
            "name": "GitHub Actions",
            "icon": "images/tech/github-actions.svg",
            "type": "cicd-tech"
        },
        {
            "name": "Fastlane",
            "icon": "images/tech/fastlane.svg",
            "type": "cicd-tech"
        },
        {
            "name": "GitHub",
            "icon": "images/tech/github-actions.svg",
            "type": "cicd-tech"
        },
        {
            "name": "Git",
            "icon": "images/tech/git.svg",
            "type": "cicd-tech"
        },

        // Design & Tools
        {
            "name": "Figma",
            "icon": "images/tech/figma.svg",
            "type": "design-tech"
        },
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
