document.addEventListener("DOMContentLoaded", function () {
    mapExperienceData();
});


function mapExperienceData() {

    let exp = [
        {
            "org": "Sastaticket.pk",
            "position": "Senior Software Engineer I",
            "duration": "Jan 2022 - Present",
            "technologies": [
                "AI Engineering",
                "AI Agents",
                "Context Engineering",
                "Harness Engineering",
                "LLMs",
                "Automation",
                "R&D",
                "Flutter",
                "Dart",
                "GitHub Actions",
                "Fintech - Payments"
            ],
            "details": [
                "Leading AI engineering initiatives — building agents and automated workflows that plug into engineering repos and processes across teams",
                "Practicing context and harness engineering to make AI reliable in real codebases: designing prompts, tools, guardrails and evaluation loops around LLMs",
                "Driving R&D on emerging AI tooling and turning promising experiments into workflows the wider engineering org can adopt",
                "Automating repetitive engineering work — code reviews, refactors, docs and repo maintenance — to raise team velocity and quality",
                "Building and shipping features in a large-scale Flutter fintech app with flutter_bloc and provider for local and global state",
                "Integrated payment gateways and REST APIs, with local packages for shared components and a clean API architecture",
                "Maintaining a layered architecture (application → domain → data) for strong encapsulation and abstraction across a huge code base",
                "Set up GitHub Actions CI/CD and worked across multiple env flavors (dev, qa, stage, prod)",
                "Applied concepts like ACL (Application Constant Lookup) to manage features safely in the live app",
                "Worked in Agile sprints within Squad team structures, using Jira and Mural for planning",
                "Helped conduct interviews and grow the engineering team."
            ]
        },
        {
            "org": "Dexplat | PK",
            "position": "Co-Founder & Technical Lead",
            "duration": "May 2022 - Present",
            "technologies": [
                "UI/UX Design",
                "Mobile app development",
                "Web development",
                "SQA & Testing",
                "Project Management",
                "MVP Development",
                "Rapid Prototyping",
                "Agile Methodology",
            ],
            "details": [
                "Started this venture of mine 2 years ago with a vision of providing best services and opportunities to the youth of Pakistan",
                "Working as co-founder and managing the role of technical lead at Dexplat Technologies",
                "Team management and handling the development of the products",
                "Providing services to various clients across the globe in various niches",
                "Specialized in Flutter and Dart for app development",
                "Handling the backend and frontend of the products",
                "Developing and maintaining the products with the best practices",
                "Following the agile methodology for the development of the products",
                "Rapid development and Rapid testing process to handle MVPs and their quick releases",
                "Handling the team of developers and providing them with the best practices",
                "Handling the client communication and providing them with optimal solutions possible",
            ]
        },
        {
            "org": "Donation App | UK",
            "position": "Consultant & Software Engineer",
            "duration": "Aug 2021 - Aug 2022",
            "technologies": [
                "Flutter/Dart",
                "GitHub Actions",
                "Firebase",
                "Stripe/PayPal",
                "REST APIs",
                "Cloud functions",
                "Node.js",
                "Express.js",
            ],
            "details": [
                "Developed first MVP for android application",
                "Upgraded MVP to latest flutter SDK as the MVP was developed in flutter 1.x.x",
                "Currently handling the BETA version for the mobile app using flutter (android/iOS) both",
                "Written cloud functions on firebase to handling some of the backend logic that needs to be separated from mobile application layer",
                "Developed web application using flutter for registrations of charities and marketing purposes",
                "Add stripe and paypal as payment gateways",
                "Followed bloc architecture and state management for scalable application",
                "Currently handling keen operations for penetration testing",
                "Implemented caching techniques for better UX",
            ]
        },
        {
            "org": "Eja Rides | Albania",
            "position": "Consultant & Lead Mobile Developer",
            "duration": "Sep 2022 - Jan 2023",
            "technologies": [
                "Flutter",
                "Dart",
                "GitHub Actions",
                "Firebase",
                "Fintech - Payments",
                "REST APIs",
                "GraphQL",
            ],
            "details": [
                "Upgraded the application to complete new UI and UX",
                "Uplifted the mobile apps architecture for better performance and better code structure",
                "Integrated REST and GraphQL structures of APIs for various purposes",
                "Added Monri payment gateway for testing purposes as this was commonly used in Albania and nearest regions",
                "Consulted for better UI and UX for new design for both the mobile apps",
                "Handled code-sharing concept as there were two mobile apps involved i.e. Driver and Rider app",
                "Keen discussion with stakeholders on how to improve the product overall",
                "Helped hiring and taking interviews for increasing the team count",
            ]
        },
        {
            "org": "ZOffers | India",
            "position": "Consultant mobile app",
            "duration": "Jul 2022 - Aug 2022",
            "technologies": [
                "Flutter",
                "Dart",
                "Firebase",
                "Bit-Bucket",
                "Fintech - Payments",
                "REST APIs",
            ],
            "details": [
                "Consultation for mobile team and interns for writing better code",
                "Better ways of handling complex code base and improve architecture",
                "Reviewing PRs of the mobile team",
                "Overall consulation for mobile app development",
            ]
        },
        {
            "org": "Sastaticket.pk",
            "position": "SWE Intern",
            "duration": "Oct 2021 - Jan 2022",
            "technologies": [
                "Flutter",
                "Dart",
                "Supabase",
                "Firebase"
            ],
            "details": [
                "Learned state management concepts like Bloc, futter bloc and provider",
                "Worked with layered architecture",
                "Integrated Supabase in flutter app",
                "Used external packages for managing form input concepts - flutter_form_builder",
                "Learned GitHub (Version Controlling) with a team, concepts like maintaining PRs, branches etc.",
                "Improved concepts of reusable components"
            ]
        },
        {
            "org": "Storius | Hong Kong",
            "position": "Flutter/Dart Intern",
            "duration": "Nov 2020 - Jan 2021",
            "technologies": [
                "Flutter",
                "Dart",
                "App script",
                "Google maps"
            ],
            "details": [
                "Developed first BETA version of storius app",
                "Integrated Google sheets with App scripts that act as SQL database",
                "Managed two different source of data into the app to overcome the place of Firebase",
                "Learned and implemented MVC architecture for production level of application",
                "Integrated Google maps, live markers and interaction of users with it",
                "Added audio players on Google maps posted by users",
                "Enhanced UX of beta version till 3rd revision",
                "Helped in expanding team of developers with various resources"
            ]
        },
        {
            "org": "Multi TeleSoft | PK",
            "position": "Lead Flutter Developer",
            "duration": "Feb 2020 - Apr 2020",
            "technologies": [
                "Flutter",
                "Dart",
                "Google maps",
                "SMS integration",
                "Live locations",
                "Firebase auth",
                "Firebase real-time"
            ],
            "details": [
                "Learned real-time location alerts using firebase real-time db",
                "Integrated Google Maps",
                "Firebase authentication via phone number",
                "MVC architecture based application",
                "Deployment on play store"
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