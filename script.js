document.addEventListener('DOMContentLoaded', function() {
    var viewTeaserListBtn = document.getElementById('viewTeaserListBtn');
    if (viewTeaserListBtn) {
        viewTeaserListBtn.addEventListener('click', function() {
            window.location.href = 'teaser-list.html';
        });
    }
});
const templates = {
    boilermaker: {
        jobTitle: "Experienced Boilermaker",
        location: "Perth, WA",
        tab1Title: "About",
        tab1Content: "We're seeking a skilled Boilermaker to join our team...",
        // Add other fields as needed
    },
    electrician: {
        jobTitle: "Qualified Electrician",
        location: "Sydney, NSW",
        tab1Title: "About",
        tab1Content: "Join our electrical team for exciting projects...",
        // Add other fields as needed
    },
    carpenter: {
        jobTitle: "Skilled Carpenter",
        location: "Melbourne, VIC",
        tab1Title: "About",
        tab1Content: "We need an experienced Carpenter for various construction projects...",
        // Add other fields as needed
    }
};

function loadTemplate(templateName) {
    const template = templates[templateName];
    if (template) {
        document.getElementById('jobTitle').value = template.jobTitle;
        document.getElementById('location').value = template.location;
        document.getElementById('tab1Title').value = template.tab1Title;
        document.getElementById('tab1Content').value = template.tab1Content;
        // Set other fields as needed
    }
}
