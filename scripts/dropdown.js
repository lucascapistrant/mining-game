const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click", () => {
        toggleDropDown(dropdown);
    });
})

function toggleDropDown(dropdown) {
    if(dropdown.classList.contains('open')) {
        dropdown.classList.remove('open');
    } else {
        dropdown.classList.add('open');
    }
}