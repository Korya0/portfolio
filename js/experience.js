document.addEventListener("DOMContentLoaded", function () {
    mapExperienceData();
});


function mapExperienceData() {

    let exp = [
        {
            "org": "Freelance",
            "position": "Flutter Developer",
            "duration": "Aug 2025 – Present",
            "technologies": [
                "Flutter",
                "Dart",
                "Clean Architecture",
                "Cubit / BLoC",
                "Supabase",
                "Firebase",
                "REST APIs",
                "Hive",
                "Git",
                "GitHub",
                "Unit Testing",
                "Widget Testing",
                "GitHub Actions"
            ],
            "details": [
                "Developed and delivered production-ready Flutter applications for freelance clients.",
                "Built scalable applications using Clean Architecture and feature-based project structure.",
                "Integrated REST APIs and backend services using Firebase and Supabase.",
                "Implemented local caching and offline support to improve user experience.",
                "Built responsive and adaptive user interfaces for Android, iOS and Web.",
                "Developed reusable components and modular features for maintainable codebases.",
                "Worked closely with clients to understand requirements and deliver tailored solutions.",
                "Maintained projects using Git, GitHub and collaborative development workflows.",
                "Applied testing practices including Unit Testing and Widget Testing.",
                "Optimized application performance, state management and overall user experience."
            ]
        },
        {
            "org": "NTI",
            "position": "Flutter Developer Intern",
            "duration": "May 2025",
            "technologies": [
                "Flutter",
                "Firebase",
                "REST APIs",
                "Cubit",
                "Git",
                "Team Collaboration"
            ],
            "details": [
                "Completed an intensive Flutter internship with a full score (100/100).",
                "Built production-style Flutter applications following industry best practices.",
                "Integrated Firebase services and REST APIs into mobile applications.",
                "Applied state management and Clean Architecture concepts in real projects.",
                "Collaborated with mentors and teammates using Git and GitHub workflows.",
                "Focused on writing clean, maintainable and reusable code."
            ]
        }
    ];

    var timeline = document.getElementById("exp-timeline");

    for (var i = 0; i < exp.length; i++) {
        // timeline-item wrapper
        var item = document.createElement("div");
        item.className = "timeline-item";

        // dot on the line
        var dot = document.createElement("div");
        dot.className = "timeline-dot";

        // card
        var expCard = document.createElement("div");
        expCard.className = "exp-card";

        var expMetaDiv = document.createElement("div");
        expMetaDiv.className = "exp-meta";

        var orgName = document.createElement("h2");
        orgName.className = "heading2 exp-org";
        orgName.innerHTML = exp[i]["org"];

        var position = document.createElement("span");
        position.className = "label exp-position";
        position.innerHTML = exp[i]["position"];

        var session = document.createElement("p");
        session.className = "body2 exp-session";
        session.innerHTML = exp[i]["duration"];

        var technologiesPills = document.createElement("div");
        technologiesPills.className = "exp-tech-pills";

        for (var k = 0; k < exp[i]["technologies"].length; k++) {
            var pill = document.createElement("span");
            pill.className = "exp-tech-pill";
            pill.innerHTML = exp[i]["technologies"][k];
            technologiesPills.appendChild(pill);
        }

        expMetaDiv.appendChild(orgName);
        expMetaDiv.appendChild(position);
        expMetaDiv.appendChild(session);

        // header row: meta left, pills right
        var cardHeader = document.createElement("div");
        cardHeader.className = "exp-card-header";
        cardHeader.appendChild(expMetaDiv);
        cardHeader.appendChild(technologiesPills);
        expCard.appendChild(cardHeader);

        var detailsList = document.createElement("ul");
        detailsList.className = "exp-detail";

        for (var k = 0; k < exp[i]["details"].length; k++) {
            var detail = document.createElement("li");
            detail.className = "body2 exp-detail-item";
            detail.innerHTML = exp[i]["details"][k];
            detailsList.appendChild(detail);
        }

        expCard.appendChild(detailsList);
        item.appendChild(dot);
        item.appendChild(expCard);
        timeline.appendChild(item);
    }
}