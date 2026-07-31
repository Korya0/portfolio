// Projects rendering
document.addEventListener("DOMContentLoaded", renderProjects);

const GRADIENT_PALETTES = [
    ["#667eea", "#764ba2"],
    ["#f093fb", "#f5576c"],
    ["#4facfe", "#00f2fe"],
    ["#43e97b", "#38f9d7"],
    ["#fa709a", "#fee140"],
    ["#a18cd1", "#fbc2eb"],
];

const LABEL_ICONS = {
    "App Store": { type: "image", src: "images/svgs/app-store.svg" },
    "Google Play": { type: "image", src: "images/svgs/google-play.svg" },
    "Web App": "fa fa-globe",
    "Demo": "fa fa-youtube-play",
    "GitHub": "fa fa-github",
    "Client Review": "fa fa-star",
};

const PROJECTS = [
    {
        title: "Imposter",
        image: "images/projects/imposter.png",
        type: "Open Source Product",
        desc: "A social deduction party game with interactive multiplayer gameplay",
        labels: [
            { title: "GitHub", link: "https://github.com/Korya0/imposter" },
            { title: "Web App", link: "https://imposter-psi-rouge.vercel.app/" },
        ],
    },
    {
        title: "Hadana Zakia",
        image: "images/projects/hadana-zakia.png",
        type: "Product",
        desc: "Smart nursery management app connecting parents with nurseries",
        labels: [
            { title: "App Store", link: "https://apps.apple.com/us/app/%D8%A7%D9%84%D8%AD%D8%B6%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%B0%D9%83%D9%8A%D8%A9/id6769857559" },
            { title: "Google Play", link: "https://play.google.com/store/apps/details?id=com.hadanazakia.app&hl=ar" },
        ],
    },
    {
        title: "Sana",
        image: "images/projects/sana.jpg",
        type: "Open Source Product",
        desc: "Your all-in-one daily Islamic companion",
        labels: [
            { title: "GitHub", link: "https://github.com/Korya0/Sana" },
            { title: "Web App", link: "https://sana0.vercel.app/" },
            { title: "Google Play", link: "https://play.google.com/store/apps/details?id=com.sana.muslim.app" },
        ],
    },
    {
        title: "Car Register",
        image: "images/projects/car-register.jpg",
        type: "Client Project",
        desc: "Manage and organize vehicle registration numbers",
        labels: [
            { title: "GitHub", link: "https://github.com/Korya0/car_register" },
            { title: "Client Review", link: "https://mostaql.com/u/Korya/reviews/9091624" },
        ],
    },
    {
        title: "BookFlick",
        image: "images/projects/bookflick.jpg",
        type: "Open Source",
        desc: "Discover, explore, and save your favorite books",
        labels: [
            { title: "GitHub", link: "https://github.com/Korya0/BookFlick" },
            { title: "Demo", link: "https://www.youtube.com/shorts/2SgHiY1CKmE" },
        ],
    },
    {
        title: "ICO Stories",
        image: "images/projects/ico-stories.jpg",
        type: "Client Project",
        desc: "Interactive Arabic educational stories app for children",
        labels: [
            { title: "GitHub", link: "https://github.com/Korya0/ico_story_app" },
            { title: "Client Review", link: "https://mostaql.com/u/Korya/reviews/9118016" },
        ],
    },
];

function renderProjects() {
    const container = document.getElementById("projects");
    container.innerHTML = "";

    PROJECTS.forEach(function (project, index) {
        container.appendChild(createProjectCard(project, index));
    });
}

function createProjectCard(project, index) {
    const card = document.createElement("div");
    card.className = "project-card";

    card.appendChild(createProjectImage(project, index));
    card.appendChild(createProjectTitle(project.title));

    if (project.desc) {
        card.appendChild(createProjectDescription(project.desc));
    }

    card.appendChild(createProjectLabels(project.labels));
    return card;
}

function createProjectImage(project, index) {
    const imageDiv = document.createElement("div");
    imageDiv.className = "p-image";

    const typeLabel = document.createElement("div");
    typeLabel.className = "label p-type";
    typeLabel.textContent = project.type;
    imageDiv.appendChild(typeLabel);

    if (project.image) {
        const image = document.createElement("img");
        image.className = "p-image-bg";
        image.src = project.image;
        image.alt = project.title;
        image.onerror = function () {
            image.remove();
            showInitialsFallback(imageDiv, project.title, index);
        };
        imageDiv.appendChild(image);
    } else {
        showInitialsFallback(imageDiv, project.title, index);
    }

    return imageDiv;
}

function showInitialsFallback(imageDiv, title, index) {
    imageDiv.style.background = getGradientByIndex(index);
    imageDiv.style.display = "flex";
    imageDiv.style.alignItems = "center";
    imageDiv.style.justifyContent = "center";

    const initials = document.createElement("span");
    initials.className = "p-image-initials";
    initials.textContent = getInitials(title);
    imageDiv.appendChild(initials);
}

function createProjectTitle(title) {
    const titleElement = document.createElement("p");
    titleElement.className = "body1 p-title";
    titleElement.textContent = title;
    return titleElement;
}

function createProjectDescription(desc) {
    const descElement = document.createElement("p");
    descElement.className = "p-desc";
    descElement.textContent = desc;
    return descElement;
}

function createProjectLabels(labels) {
    const labelsDiv = document.createElement("div");
    labelsDiv.className = "p-labels";

    labels.forEach(function (label) {
        const link = document.createElement("a");
        link.className = "p-label";
        link.href = label.link;
        link.target = "_blank";

        link.appendChild(createLabelIcon(label.title));

        const labelText = document.createElement("span");
        labelText.className = "label p-label-text";
        labelText.textContent = label.title;
        link.appendChild(labelText);

        labelsDiv.appendChild(link);
    });

    return labelsDiv;
}

function createLabelIcon(labelTitle) {
    const iconConfig = LABEL_ICONS[labelTitle];
    if (!iconConfig) return document.createElement("i");

    if (iconConfig.type === "image") {
        const image = document.createElement("img");
        image.className = "p-label-icon p-label-svg";
        image.src = iconConfig.src;
        image.alt = labelTitle;
        return image;
    }

    const icon = document.createElement("i");
    icon.className = "p-label-icon " + iconConfig;
    return icon;
}

function getInitials(title) {
    return title
        .split(" ")
        .map(function (word) { return word[0]; })
        .join("")
        .substring(0, 2)
        .toUpperCase();
}

function getGradientByIndex(index) {
    const palette = GRADIENT_PALETTES[index % GRADIENT_PALETTES.length];
    return "linear-gradient(135deg, " + palette[0] + ", " + palette[1] + ")";
}
