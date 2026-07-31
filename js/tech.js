// Tech stack rendering
document.addEventListener("DOMContentLoaded", renderTechStack);

const TECH_STACK = [
    // Mobile Development
    { name: "Flutter", icon: "images/tech/flutter.svg", category: "mobile-tech" },
    { name: "Dart", icon: "images/tech/dart.svg", category: "mobile-tech" },

    // Databases
    { name: "Firebase", icon: "images/tech/firebase.svg", category: "database-tech" },
    { name: "Supabase", icon: "images/tech/supabase.svg", category: "database-tech" },

    // Networking
    { name: "REST APIs", icon: "images/tech/api.svg", category: "server-tech" },
    { name: "GraphQL", icon: "images/tech/graphql.svg", category: "server-tech" },

    // State Management
    { name: "Bloc / Cubit", icon: "images/tech/bloc-svgrepo-com.svg", category: "state-tech" },
    { name: "Riverpod", icon: "images/tech/redux-svgrepo-com.svg", category: "state-tech" },

    // Local Storage
    { name: "SharedPreferences", icon: "images/tech/storage.svg", category: "storage-tech" },
    { name: "Hive", icon: "images/tech/hive.svg", category: "storage-tech" },

    // Testing
    { name: "Integration", icon: "images/tech/testing.svg", category: "testing-tech" },
    { name: "Widget", icon: "images/tech/testing.svg", category: "testing-tech" },
    { name: "Unit", icon: "images/tech/testing.svg", category: "testing-tech" },

    // CI/CD
    { name: "GitHub Actions", icon: "images/tech/github-actions.svg", category: "cicd-tech" },
    { name: "Fastlane", icon: "images/tech/fastlane.svg", category: "cicd-tech" },
    { name: "GitHub", icon: "images/tech/github-actions.svg", category: "cicd-tech" },
    { name: "Git", icon: "images/tech/git.svg", category: "cicd-tech" },
];

function renderTechStack() {
    TECH_STACK.forEach(function (tech) {
        const container = document.getElementById(tech.category);
        if (!container) return;

        const techDiv = document.createElement("div");
        techDiv.className = "tech";

        const icon = document.createElement("img");
        icon.className = "tech-icon";
        icon.src = tech.icon;
        icon.alt = tech.name;

        const label = document.createElement("span");
        label.className = "tech-label";
        label.textContent = tech.name;

        techDiv.appendChild(icon);
        techDiv.appendChild(label);
        container.appendChild(techDiv);
    });
}
