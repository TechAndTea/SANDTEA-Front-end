// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        let target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// FAQ Collapsible Sections
document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const parent = question.parentElement;
            const answer = parent.querySelector(".faq-answer");

            if (parent.classList.contains("active")) {
                // Collapse smoothly
                answer.style.maxHeight = answer.scrollHeight + "px"; // Set current height
                setTimeout(() => {
                    answer.style.maxHeight = "0px";
                }, 10);
                parent.classList.remove("active");
            } else {
                // Expand smoothly
                parent.classList.add("active");
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});


// Contact Form Validation
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let subject = document.getElementById("subject").value;
            let message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || subject === "" || message === "") {
                formMessage.textContent = "Please fill in all fields.";
                formMessage.style.color = "red";
                formMessage.classList.remove("hidden");
                return;
            }

            // Simple email validation
            let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(email)) {
                formMessage.textContent = "Please enter a valid email.";
                formMessage.style.color = "red";
                formMessage.classList.remove("hidden");
                return;
            }

            // Success Message
            formMessage.textContent = "Message sent successfully!";
            formMessage.style.color = "green";
            formMessage.classList.remove("hidden");

            // Clear Form After Submission
            setTimeout(() => {
                form.reset();
                formMessage.classList.add("hidden");
            }, 3000);
        });
    }
});

// Smooth Scroll for Navigation (Only Internal Links)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function(e) {
        let targetId = this.getAttribute("href");
        if (targetId.startsWith("#")) {
            e.preventDefault();
            let targetElement = document.getElementById(targetId.substring(1));
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        }
    });
});

// Image Hover Animation
const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.classList.add("hovered");
    });

    item.addEventListener("mouseleave", () => {
        item.classList.remove("hovered");
    });
});