document.addEventListener('DOMContentLoaded', function() {
    var viewTeaserListBtn = document.getElementById('viewTeaserListBtn');
    if (viewTeaserListBtn) {
        viewTeaserListBtn.addEventListener('click', function() {
            window.location.href = 'teaser-list.html';
        });
    }
});
