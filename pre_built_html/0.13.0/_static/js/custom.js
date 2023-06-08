
// highlights which version of the morningstar-data documentation is being presented
window.onload = (event) => {
    const versionTags = document.querySelectorAll(".version-tag");
    // reset the current tag
    versionTags.forEach(function (versionTag) {
        versionTag.classList.remove('current-tag');
    });

    // highlight the current tag
    for (let i = 0; i < versionTags.length; i++) {
        if (versionTags[i].href === window.location.href) {
            versionTags[i].classList.add('current-tag');
            break;
        }
    }
}