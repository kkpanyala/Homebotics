if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
        offset: 200,
    });
});

function scrollToTabs(event) {
    document.querySelector('.section-wrapper').scrollIntoView({ behavior: 'smooth' });
}

if (!localStorage.getItem("dscShown")) {
    document.getElementById("disclaimer").style.display = "block";
}

// Close button logic
document.getElementById("closeDsc").onclick = function () {
    document.getElementById("disclaimer").style.display = "none";
    localStorage.setItem("dscShown", "true");
};