const toggleBtn = document.getElementById("toggle-theme");
const logoImg = document.getElementById("logo-img");
const gitIcon = document.getElementById("git-icon");
const linkedinIcon = document.getElementById("linkedin-icon");
const emailIcon = document.getElementById("email-icon");

// Carrega preferência salva
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.checked = true;
  logoImg.src = "../../assets/logo-light.png";
  gitIcon.src = "../../assets/github-icon-dark.png";
  linkedinIcon.src = "../../assets/linkedin-icon-dark.png";
  emailIcon.src = "../../assets/email-icon-dark.png";
}

// Evento do toggle
toggleBtn.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    logoImg.src = "../../assets/logo-light.png";
    gitIcon.src = "../../assets/github-icon-dark.png";
    linkedinIcon.src = "../../assets/linkedin-icon-dark.png";
    emailIcon.src = "../../assets/email-icon-dark.png";
    localStorage.setItem("theme", "dark");
  } else {
    logoImg.src = "../../assets/logo-dark.png";
    gitIcon.src = "../../assets/github-icon-light.png";
    linkedinIcon.src = "../../assets/linkedin-icon-light.png";
    emailIcon.src = "../../assets/email-icon-light.png";
    localStorage.setItem("theme", "light");
  }
});


