const toggleBtn = document.getElementById("toggle-theme");
const logoImg = document.getElementById("logo-img");
const gitIcon = document.getElementById("git-icon");
const linkedinIcon = document.getElementById("linkedin-icon");
const emailIcon = document.getElementById("email-icon");

// Carrega preferência salva
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.checked = true;
  logoImg.src = "assets/logo-light.png";
  gitIcon.src = "assets/github-icon-dark.png";
  linkedinIcon.src = "assets/linkedin-icon-dark.png";
  emailIcon.src = "assets/email-icon-dark.png";
}

// Evento do toggle
toggleBtn.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    logoImg.src = "assets/logo-light.png";
    gitIcon.src = "assets/github-icon-dark.png";
    linkedinIcon.src = "assets/linkedin-icon-dark.png";
    emailIcon.src = "assets/email-icon-dark.png";
    localStorage.setItem("theme", "dark");
  } else {
    logoImg.src = "assets/logo-dark.png";
    gitIcon.src = "assets/github-icon-light.png";
    linkedinIcon.src = "assets/linkedin-icon-light.png";
    emailIcon.src = "assets/email-icon-light.png";
    localStorage.setItem("theme", "light");
  }
});


//PROJETOS
  const projetosDestaque = [
    {
      img: "./assets/api6.png",
      alt: "API 6: Clara",
      titulo: "API 6: Clara",
      descricao: "Sistema de busca semântica, a partir da dataset fornecido pelo cliente Dom Rock, capaz de interpretar e responder perguntas dos usuários por meio de um agente de inteligência artificial integrado ao chat interativo. Além disso, deverá ter a funcionalidade de enviar um boletim, baseado no modelo fornecido pelo cliente, gerado pela ia com os dados de um dado período do dataset diretamente a um email.",
      link: "https://github.com/MariMiks/API_6"
    },
    {
      img: "./assets/api5.jpg",
      alt: "API 5: Omni",
      titulo: "API 5: Omni",
      descricao: "Plataforma que possibilite a criação e gerenciamento de agentes de Inteligência Artificial",
      link: "https://github.com/MariMiks/API_5"
    },
    {
      img: "./assets/api3.png",
      alt: "API 3: CTRL A",
      titulo: "API 3: CTRL A",
      descricao: "Aplicação para manuseio dos ativos de uma empresa.",
      link: "https://github.com/MariMiks/API3-CtrlA"
    }
  ];

  const carousel = document.getElementById("carousel");
  const dotsContainer = document.getElementById("carousel-dots");
  const template = document.getElementById("card-template");

  let currentIndex = 0;

  // Renderiza os cards
  projetosDestaque.forEach((proj, index) => {
    const card = template.content.cloneNode(true);
    card.querySelector("img").src = proj.img;
    card.querySelector("img").alt = proj.alt;
    card.querySelector("h3").textContent = proj.titulo;
    card.querySelector("p").textContent = proj.descricao;
    card.querySelector("a").href = proj.link;
    carousel.appendChild(card);

    // Cria bolinha de navegação
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  });

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    document.querySelectorAll(".dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }