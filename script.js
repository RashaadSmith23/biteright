//------------------ Copyright code  ----------------- //
document.getElementById("year").textContent = new Date().getFullYear();

//------------------ MenuBtn Code  ----------------- //
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", function (event) {
    sidebar.classList.toggle("show");
    event.stopPropagation(); // Prevents the click from immediately closing the sidebar
});

// Close sidebar when clicking outside of it
document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
        sidebar.classList.remove("show");
    }
});

//------------------ MenuBtn Code  ----------------- //
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior

        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop, 
                behavior: 'smooth' // Enables smooth scrolling
            });
        }

        // Close the sidebar after clicking a link
        document.getElementById("sidebar").classList.remove("show");
    });
});

//------------------ MenuBtn Code  ----------------- //
const topButton = document.getElementById("topButton");

        window.onscroll = function () {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                topButton.style.display = "block";
            } else {
                topButton.style.display = "none";
            }
        };

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }