fetch('home.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('home-content').innerHTML = html;
        dynamicNav();
        updateNav();
    })
    .catch(error => console.error('Error loading home.html:', error));
fetch('education.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('education-content').innerHTML = html;
    })
    .catch(error => console.error('Error loading education.html:', error));
fetch('techstack.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('tech-content').innerHTML = html;
    })
    .catch(error => console.error('Error loading techstack.html:', error));
fetch('contact.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('contact-content').innerHTML = html;
    })
    .catch(error => console.error('Error loading about.html:', error));
fetch('about.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('about-content').innerHTML = html;
    })
    .catch(error => console.error('Error loading about.html:', error));
fetch('projects.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('projects-content').innerHTML = html;
        initializeProjectSection();
    })
    .catch(error => console.error('Error loading projects.html:', error));

var projectDetails = [
    {
        text: `For my undergraduate final year project, we developed an Android-based, networked mobile application focused on promoting positivity and gratitude. The app functions as a miniature social media platform, enabling users to interact with friends and share daily reflections.`,
        tags: ["Java", "MySQL"]
    },
    {
        text: "For my honours project, I worked on developing an innovative sensory substitution system designed to assist visually impaired individuals in navigating their environment. The system aimed to convert visual information into auditory feedback, allowing users to better perceive depth, object colours, and the presence of people.",
        tags: ["Python"]
    },
    {
        text: "I built a Flutter-based Cash-Up Application to help my parents manage their small business more efficiently. This app streamlines the daily cash-up process, automates email reporting, and securely stores records for future reference.",
        tags: ["Flutter", "Dart"]
    },
    {
        text: "This is a minimalist, single-page advertisement website that I developed as part of my web development journey. This was my first time using Flask for the backend, and it marked one of the first websites I’ve built. The project focuses on modular design, reusable components, and API-driven content rendering.",
        tags: ["HTML", "CSS", "JavaScript", "Python", "Flask"]
    }
];

var imgPaths = {
    HTML: "html.png",
    CSS: "css.png",
    JavaScript: "js.png",
    Bootstrap: "bootstrapping.png",
    Razor: "razor.png",
    Flutter: "flutter.png",
    Dart: "dart.png",
    C: "c.png",
    Java: "java.png",
    Python: "python.png",
    Flask: "flask.png",
    Net: "aspnet.png",
    Microsoft: "mssql.png",
    MySQL: "mysql.png",
    PostgresSQL: "postgres.png"
}

var projectTextElement;
var projectTagsContainer;
var carousel;

function initializeProjectSection() {
    projectTextElement = document.getElementById("project-details");
    projectTagsContainer = document.getElementById("project-tags");
    carousel = document.getElementById("carouselExampleDark");

    // Enable swipe functionality
    let startX = 0;
    let endX = 0;

    carousel.addEventListener("touchstart", function (e) {
        startX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener("touchend", function (e) {
        endX = e.changedTouches[0].screenX;

        if (startX > endX) {
            // Swipe Left (next slide)
            $('#carouselExampleDark').carousel('next');
        }
        if (startX < endX) {
            // Swipe Right (previous slide)
            $('#carouselExampleDark').carousel('prev');
        }
    });

    var bootstrapCarousel = new bootstrap.Carousel(carousel);
    bootstrapCarousel.cycle();

    carousel.addEventListener("slid.bs.carousel", function (event) {
        var index = event.to;
        updateDetails(index);
    });

    var index = 0;
    updateDetails(index);
}

function updateDetails(index) {
    projectTextElement.textContent = projectDetails[index].text;

    projectTagsContainer.innerHTML = "";
    projectDetails[index].tags.forEach(tag => {
        var tagElement = document.createElement("span");
        tagElement.classList.add("tag");

        var imgElement = document.createElement("img");
        imgElement.src = "/images/" + imgPaths[getKey(tag)];
        imgElement.alt = tag;
        imgElement.classList.add("tag-icon");

        var textElement = document.createElement("span");
        textElement.textContent = " " + tag;

        tagElement.appendChild(imgElement);
        tagElement.appendChild(textElement);

        projectTagsContainer.appendChild(tagElement);
    });
}

function getKey(input) {
    let words = input.split(" ");
    words[0] = words[0].replace(/[.#]/g, "");
    return words;
}

function dynamicNav() {
    const navbar = document.getElementById("main-navbar");
    const homeSection = document.getElementById("home-content");

    const observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting) {
                navbar.classList.add("home-navbar");
            } else {
                navbar.classList.remove("home-navbar");
            }
        },
        { threshold: 0.5 }
    );

    observer.observe(homeSection);
}

function updateNav() {
    const navbar = document.getElementById("main-navbar");
    const homeSection = document.getElementById("home-content");

    const sections = [
        { id: 'home-content', navId: 'home-nav' },
        { id: 'about-content', navId: 'about-nav' },
        { id: 'education-content', navId: 'education-nav' },
        { id: 'projects-content', navId: 'projects-nav' },
        { id: 'contact-content', navId: 'contact-nav' }
    ];

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                const sectionId = entry.target.id;
                const navLink = document.getElementById(sections.find(s => s.id === sectionId).navId);

                if (entry.isIntersecting) {
                    navLink.classList.add("active");
                } else {
                    navLink.classList.remove("active");
                }
            });
        },
        { threshold: 0.5 }
    );

    sections.forEach(section => {
        observer.observe(document.getElementById(section.id));
    });
}