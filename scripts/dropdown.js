const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const heading = dropdown.querySelector('.dropdown__heading');
    heading.addEventListener("click", (event) => {
        if (event.target.tagName === 'BUTTON' || event.target.tagName === 'P') return;
        toggleDropDown(dropdown);
    });
})

function toggleDropDown(dropdown) {
    const heading = dropdown.querySelector('.dropdown__heading');
    const headingText = heading.childNodes[0].textContent.trim().split(' ');

    if (dropdown.classList.contains('open')) {
        dropdown.classList.remove('open');
        headingText[0] = 'Show';
    } else {
        dropdown.classList.add('open');
        headingText[0] = 'Hide';
    }

    heading.childNodes[0].textContent = headingText.join(' ') + ' ';
}
