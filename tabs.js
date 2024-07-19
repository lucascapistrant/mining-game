const tablinks = document.querySelectorAll(".tablink");
tablinks.forEach(link => {
    link.addEventListener("click", () => {openTab(link, link.dataset.tabtype)});
})
openTab(tablinks[0], tablinks[0].dataset.tabtype)


function openTab(link, linkName) {
    const tabcontent = document.querySelectorAll(".tabcontent");

    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(linkName).style.display = "flex";
    link.className += " active";
  }