// Experience timeline rendering
document.addEventListener("DOMContentLoaded", renderExperience);

const EXPERIENCE = [
    {
        org: "Freelance",
        position: "Flutter Developer",
        duration: "Aug 2025 – Present",
        link: "https://mostaql.com/u/Korya/reviews",
        linkLabel: "View Profile",
        technologies: [
            "Flutter", "Dart", "Clean Architecture", "Cubit / BLoC", "Supabase",
            "Firebase", "REST APIs", "Hive", "Git", "GitHub", "Unit Testing",
            "Widget Testing", "GitHub Actions",
        ],
        details: [
            "Developed and delivered production-ready Flutter applications for freelance clients.",
            "Built scalable applications using Clean Architecture and feature-based project structure.",
            "Integrated REST APIs and backend services using Firebase and Supabase.",
            "Implemented local caching and offline support to improve user experience.",
            "Built responsive and adaptive user interfaces for Android, iOS and Web.",
            "Developed reusable components and modular features for maintainable codebases.",
            "Worked closely with clients to understand requirements and deliver tailored solutions.",
            "Maintained projects using Git, GitHub and collaborative development workflows.",
            "Applied testing practices including Unit Testing and Widget Testing.",
            "Optimized application performance, state management and overall user experience.",
        ],
    },
    {
        org: "NTI",
        position: "Flutter Developer Intern",
        duration: "May 2025",
        link: "https://drive.google.com/file/d/1DiA9E64teOhpFkgzaA5GjxVm2P1-udQ-/view?usp=drive_link",
        linkLabel: "View Certificate",
        technologies: [
            "Flutter", "Firebase", "REST APIs", "Cubit", "Git", "Team Collaboration",
        ],
        details: [
            "Completed an intensive Flutter internship with a full score (100/100).",
            "Built production-style Flutter applications following industry best practices.",
            "Integrated Firebase services and REST APIs into mobile applications.",
            "Applied state management and Clean Architecture concepts in real projects.",
            "Collaborated with mentors and teammates using Git and GitHub workflows.",
            "Focused on writing clean, maintainable and reusable code.",
        ],
    },
];

function renderExperience() {
    const timeline = document.getElementById("exp-timeline");

    EXPERIENCE.forEach(function (job) {
        timeline.appendChild(createTimelineItem(job));
    });
}

function createTimelineItem(job) {
    const item = document.createElement("div");
    item.className = "timeline-item";

    const dot = document.createElement("div");
    dot.className = "timeline-dot";

    const card = document.createElement("div");
    card.className = "exp-card";
    card.appendChild(createCardHeader(job));
    card.appendChild(createDetailsList(job.details));

    item.appendChild(dot);
    item.appendChild(card);
    return item;
}

function createCardHeader(job) {
    const header = document.createElement("div");
    header.className = "exp-card-header";

    const meta = document.createElement("div");
    meta.className = "exp-meta";

    const orgName = createOrgName(job);
    const position = document.createElement("span");
    position.className = "label exp-position";
    position.textContent = job.position;

    const session = document.createElement("p");
    session.className = "body2 exp-session";
    session.textContent = job.duration;

    meta.appendChild(orgName);
    meta.appendChild(position);
    meta.appendChild(session);

    if (job.link) {
        meta.appendChild(createCertificateLink(job));
    }

    header.appendChild(meta);
    header.appendChild(createTechPills(job.technologies));
    return header;
}

function createOrgName(job) {
    // Plain text on purpose — the .exp-link button below already carries the link
    const orgName = document.createElement("h2");
    orgName.className = "heading2 exp-org";
    orgName.textContent = job.org;
    return orgName;
}

function createCertificateLink(job) {
    const link = document.createElement("a");
    link.className = "exp-link";
    link.href = job.link;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const icon = document.createElement("i");
    icon.className = "fa fa-external-link";
    icon.setAttribute("aria-hidden", "true");

    link.appendChild(icon);
    link.appendChild(document.createTextNode(job.linkLabel || "View Certificate"));
    return link;
}

function createTechPills(technologies) {
    const pills = document.createElement("div");
    pills.className = "exp-tech-pills";

    technologies.forEach(function (tech) {
        const pill = document.createElement("span");
        pill.className = "exp-tech-pill";
        pill.textContent = tech;
        pills.appendChild(pill);
    });

    return pills;
}

function createDetailsList(details) {
    const list = document.createElement("ul");
    list.className = "exp-detail";

    details.forEach(function (detail) {
        const item = document.createElement("li");
        item.className = "body2 exp-detail-item";
        item.textContent = detail;
        list.appendChild(item);
    });

    return list;
}
