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

// activate budget items
const parameters = new URLSearchParams(location.search);

function activateProduct(parameter) {
  const element = document.getElementById(parameter);
  if (element) {
    element.checked = true;
  }
}

parameters.forEach(activateProduct);

// Common questions
const questions = document.querySelectorAll(".questions button");

function activateQuestion(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const answer = document.getElementById(controls);

  answer.classList.toggle("active");
  const active = answer.classList.contains("active");
  question.setAttribute("aria-expended", active);
}

function eventQuestions(question) {
  question.addEventListener("click", activateQuestion);
}

questions.forEach(eventQuestions);
