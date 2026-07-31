document.addEventListener("DOMContentLoaded", function () {
    mapProjectsData();
});

const GRADIENT_PALETTES = [
    ["#667eea", "#764ba2"],
    ["#f093fb", "#f5576c"],
    ["#4facfe", "#00f2fe"],
    ["#43e97b", "#38f9d7"],
    ["#fa709a", "#fee140"],
    ["#a18cd1", "#fbc2eb"],
];

function getInitials(title) {
    return title
        .split(" ")
        .map((word) => word[0])
        .join("")
        .substring(0, 2)
        .toUpperCase();
}

function getGradientByIndex(index) {
    const palette = GRADIENT_PALETTES[index % GRADIENT_PALETTES.length];
    return `linear-gradient(135deg, ${palette[0]}, ${palette[1]})`;
}

function mapProjectsData() {
    let projects = [
        {
            title: "Car Register",
            image: "",
            type: "Client Project",
            desc: "Manage and organize vehicle registration numbers",
            labels: [
                {
                    title: "GitHub",
                    link: "https://github.com/Korya0/car_register",
                },
                {
                    title: "Client Review",
                    link: "https://mostaql.com/u/Korya/reviews/9091624",
                },
            ],
        },
        {
            title: "BookFlick",
            image: "",
            type: "Open Source",
            desc: "Discover, explore, and save your favorite books",
            labels: [
                {
                    title: "GitHub",
                    link: "https://github.com/Korya0/BookFlick",
                },
                {
                    title: "Demo",
                    link: "https://www.youtube.com/shorts/2SgHiY1CKmE",
                },
            ],
        },
        {
            title: "Sana",
            image: "",
            type: "Open Source Product",
            desc: "Your all-in-one daily Islamic companion",
            labels: [
                {
                    title: "GitHub",
                    link: "https://github.com/Korya0/Sana",
                },
                {
                    title: "Web App",
                    link: "https://sana0.vercel.app/",
                },
                {
                    title: "Google Play",
                    link: "https://play.google.com/store/apps/details?id=com.sana.muslim.app",
                },
            ],
        },
        {
            title: "Imposter",
            image: "",
            type: "Open Source Product",
            desc: "A social deduction party game with interactive multiplayer gameplay",
            labels: [
                {
                    title: "GitHub",
                    link: "https://github.com/Korya0/imposter",
                },
                {
                    title: "Web App",
                    link: "https://imposter-psi-rouge.vercel.app/",
                },
            ],
        },
        {
            title: "Hadana Zakia",
            image: "",
            type: "Product",
            desc: "Smart nursery management app connecting parents with nurseries",
            labels: [
                {
                    title: "App Store",
                    link: "https://apps.apple.com/us/app/%D8%A7%D9%84%D8%AD%D8%B6%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%B0%D9%83%D9%8A%D8%A9/id6769857559",
                },
                {
                    title: "Google Play",
                    link: "https://play.google.com/store/apps/details?id=com.hadanazakia.app&hl=ar",
                },
            ],
        },
        {
            title: "ICO Stories",
            image: "",
            type: "Client Project",
            desc: "Interactive Arabic educational stories app for children",
            labels: [
                {
                    title: "GitHub",
                    link: "https://github.com/Korya0/ico_story_app",
                },
                {
                    title: "Client Review",
                    link: "https://mostaql.com/u/Korya/reviews/9118016",
                },
            ],
        },
    ];

    var projectsDiv = document.getElementById("projects");
    projectsDiv.innerHTML = "";

    for (var i = 0; i < projects.length; i++) {
        var project = projects[i];
        var title = project.title;
        var type = project.type;
        var image = project.image;
        var desc = project.desc || "";

        var card = document.createElement("div");
        card.className = "project-card";

        var imageDiv = document.createElement("div");
        imageDiv.className = "p-image";

        var projectLabel = document.createElement("div");
        projectLabel.className = "label p-type";
        projectLabel.innerHTML = type;

        imageDiv.appendChild(projectLabel);

        if (image && image !== "") {
            var projectImg = document.createElement("img");
            projectImg.className = "p-image-bg";
            projectImg.src = image;
            projectImg.alt = title;
            projectImg.onerror = function () {
                this.style.display = "none";
                var parent = this.parentNode;
                parent.style.background = getGradientByIndex(i);
                parent.style.display = "flex";
                parent.style.alignItems = "center";
                parent.style.justifyContent = "center";
                var initialsEl = document.createElement("span");
                initialsEl.className = "p-image-initials";
                initialsEl.innerHTML = getInitials(title);
                parent.appendChild(initialsEl);
            };
            imageDiv.appendChild(projectImg);
        } else {
            // Gradient placeholder with initials
            imageDiv.style.background = getGradientByIndex(i);
            imageDiv.style.display = "flex";
            imageDiv.style.alignItems = "center";
            imageDiv.style.justifyContent = "center";

            var initials = document.createElement("span");
            initials.className = "p-image-initials";
            initials.innerHTML = getInitials(title);
            imageDiv.appendChild(initials);
        }

        var projectName = document.createElement("p");
        projectName.className = "body1 p-title";
        projectName.innerHTML = title;

        var projectDesc = document.createElement("p");
        projectDesc.className = "p-desc";
        projectDesc.innerHTML = desc;

        var labels = document.createElement("div");
        labels.className = "p-labels";

        for (var j = 0; j < project.labels.length; j++) {
            var labelTitle = project.labels[j]["title"];
            var link = project.labels[j]["link"];

            var label = document.createElement("a");
            label.className = "p-label";
            var labelIcon = document.createElement("i");

            if (labelTitle === "App" || labelTitle === "App Store") {
                labelIcon.className = "p-label-icon fa fa-apple";
            } else if (labelTitle === "Play" || labelTitle === "Google Play") {
                labelIcon.className = "p-label-icon fa fa-google";
            } else if (
                labelTitle === "Web" ||
                labelTitle === "Web App"
            ) {
                labelIcon.className = "p-label-icon fa fa-globe";
            } else if (labelTitle === "YouTube" || labelTitle === "Demo") {
                labelIcon.className = "p-label-icon fa fa-youtube-play";
            } else if (labelTitle === "GitHub") {
                labelIcon.className = "p-label-icon fa fa-github";
            } else if (labelTitle === "Package") {
                labelIcon.className = "p-label-icon material-icons";
                labelIcon.innerHTML = "widgets";
                labelIcon.style.fontSize = "16px";
            } else if (labelTitle === "Docs") {
                labelIcon.className = "p-label-icon fa fa-book";
            } else if (labelTitle === "Client Review") {
                labelIcon.className = "p-label-icon fa fa-star";
            }

            var labelText = document.createElement("span");
            labelText.className = "label p-label-text";
            labelText.innerHTML = labelTitle;

            label.href = link;
            label.target = "_blank";

            label.appendChild(labelIcon);
            label.appendChild(labelText);

            labels.appendChild(label);
        }

        card.appendChild(imageDiv);
        card.appendChild(projectName);
        if (desc) {
            card.appendChild(projectDesc);
        }
        card.appendChild(labels);

        projectsDiv.appendChild(card);
    }
}
