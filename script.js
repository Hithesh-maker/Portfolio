document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check Local Storage for theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        body.classList.add("light-mode");
    }

    updateThemeButton();

    // Theme Toggle Button
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");
        localStorage.setItem("theme", body.classList.contains("light-mode") ? "light" : "dark");
        updateThemeButton();
    });

    // Update Theme Button Text
    function updateThemeButton() {
        themeToggle.textContent = body.classList.contains("light-mode") ? "🌙 Dark Mode" : "☀️ Light Mode";
    }

    // Smooth Scroll Function
    window.scrollToSection = function (id) {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Contact Form Submission
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("📩 Your message has been sent successfully!");
            contactForm.reset();
        });
    }

    // Add animations on scroll
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        },
        { threshold: 0.1 }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });

    // Back to Top Button
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("visible");
        } else {
            backToTopButton.classList.remove("visible");
        }
    });

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Hide Loader
    window.addEventListener("load", function () {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    });
});
