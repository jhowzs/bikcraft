// activate menu links
const links = document.querySelectorAll(".header-menu a");

function activateLink(link) {
  const url = window.location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("activate");
  }
}

links.forEach(activateLink);
