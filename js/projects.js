document.addEventListener("DOMContentLoaded", function () {
    mapProjectsData();
});

function mapProjectsData() {
    let projects = [
        {
            "title": "AppFlight",
            "image": "images/projects/appflight.png",
            "type": "Product",
            "labels": [
                {
                    "title": "Web",
                    "link": "https://www.app-flight.com/"
                },
                {
                    "title": "Play",
                    "link": "https://play.google.com/store/apps/details?id=dev.mhmz.app_flight"
                },
                {
                    "title": "Docs",
                    "link": "https://www.app-flight.com/docs"
                }
            ]
        },
        {
            "title": "Sastaticket.pk",
            "image": "images/projects/sastaticket.png",
            "type": "Product",
            "labels": [
                {
                    "title": "App",
                    "link": "https://apps.apple.com/in/app/sastaticket-flight-hotels/id1564441908"
                },
                {
                    "title": "Play",
                    "link": "https://play.google.com/store/apps/details?id=com.pk.sastaticket&hl=en&gl=US"
                },
                {
                    "title": "Web",
                    "link": "https://www.sastaticket.pk/"
                }
            ]
        },
        {
            "title": "Eja Rides",
            "image": "images/projects/eja.png",
            "type": "Product",
            "labels": [
                {
                    "title": "Web",
                    "link": "https://ejaapp.com/en"
                },
                {
                    "title": "App",
                    "link": "https://ejaapp.com/en"
                },
                {
                    "title": "Play",
                    "link": "https://ejaapp.com/en"
                },

            ]
        },
        {
            "title": "Awesome Snackbar Content",
            "image": "images/projects/snackbar.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "GitHub",
                    "link": "https://github.com/mhmzdev/awesome_snackbar_content"
                },
                {
                    "title": "Package",
                    "link": "https://pub.dev/packages/awesome_snackbar_content"
                }
            ]
        },
        {
            "title": "The Holy Qur'an",
            "image": "images/projects/quran.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Play",
                    "link": "https://play.google.com/store/apps/details?id=com.hmz.al_quran"
                },
                {
                    "title": "Web",
                    "link": "https://mhmzdev.github.io/quran/"
                },
                {
                    "title": "GitHub",
                    "link": "https://github.com/mhmzdev/the-holy-quran-app"
                }
            ]
        },
        {
            "title": "Figma to Flutter MCP",
            "image": "images/projects/figma-mcp.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "GitHub",
                    "link": "https://github.com/mhmzdev/figma-flutter-mcp"
                },
                {
                    "title": "YouTube",
                    "link": "https://www.youtube.com/live/d7qrvytOxSA?si=7Kizeaked3qWEMZt"
                },
            ]
        },
        {
            "title": "Dreamstale - AI Dream Journal",
            "image": "images/projects/dreamstale.png",
            "type": "Project",
            "labels": [
                {
                    "title": "Play",
                    "link": "https://play.google.com/store/apps/details?id=com.mhmzdev.dreamstale"
                }
            ]
        },
        {
            "title": "Lensfolio - AI Driven Job Hunt",
            "image": "images/projects/lensfolio_banner.png",
            "type": "Project",
            "labels": [
                {
                    "title": "GitHub",
                    "link": "https://github.com/mhmzdev/lensfolio_mobile_app",
                },
                {
                    "title": "Play",
                    "link": "https://play.google.com/store/apps/details?id=dev.mhmz.lensfolio"
                },
            ]
        },
    ];

    for (var i = 0; i < projects.length; i++) {
        var project = projects[i];
        var title = project.title;
        var type = project.type;
        var image = project.image;

        var card = document.createElement('div');
        card.className = "project-card";

        var imageDiv = document.createElement('div');
        imageDiv.className = "p-image";
        var projectLabel = document.createElement("div");
        projectLabel.className = "label p-type";
        projectLabel.innerHTML = type;

        var projectImg = document.createElement("img");
        projectImg.className = "p-image-bg";
        projectImg.src = image;
        projectImg.alt = title;

        imageDiv.appendChild(projectLabel);
        imageDiv.appendChild(projectImg);

        var projectName = document.createElement("p");
        projectName.className = "body1 p-title";
        projectName.innerHTML = title;

        var labels = document.createElement("div");
        labels.className = "p-labels";

        for (var j = 0; j < project.labels.length; j++) {
            var title = project.labels[j]["title"];
            var link = project.labels[j]["link"];

            var label = document.createElement('a');
            label.className = "p-label";
            var labelIcon = document.createElement("i");

            if (title == "App") {
                labelIcon.className = "p-label-icon fa fa-apple";
            } else if (title == "Play") {
                labelIcon.className = "p-label-icon fa fa-google";
            } else if (title == "Web") {
                labelIcon.className = "p-label-icon fa fa-globe";
            } else if (title == "YouTube") {
                labelIcon.className = "p-label-icon fa fa-youtube-play";
            } else if (title == "GitHub") {
                labelIcon.className = "p-label-icon fa fa-github";
            } else if (title == "Package") {
                labelIcon.className = "p-label-icon material-icons";
                labelIcon.innerHTML = "widgets";
                labelIcon.style.fontSize = "16px";
            } else if (title == "Docs") {
                labelIcon.className = "p-label-icon fa fa-book";
            }

            var labelText = document.createElement("span");
            labelText.className = "label p-label-text";
            labelText.innerHTML = title;

            label.href = link;
            label.target = "_blank";

            label.appendChild(labelIcon);
            label.appendChild(labelText);

            labels.appendChild(label);
        }


        card.appendChild(imageDiv);
        card.appendChild(projectName);
        card.appendChild(labels);

        var projectsDiv = document.getElementById("projects");
        projectsDiv.appendChild(card);
    }
}