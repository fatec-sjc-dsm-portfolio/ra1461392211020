const toggleBtn = document.getElementById("toggle-theme");
const logoImg = document.getElementById("logo-img");
const gitIcon = document.getElementById("git-icon");
const linkedinIcon = document.getElementById("linkedin-icon");
const emailIcon = document.getElementById("email-icon");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

  if (document.body.classList.contains("dark")){
    toggleBtn.textContent = "☀️"
    logoImg.src = "assets/logo-light.png"
    gitIcon.src = "assets/github-icon-dark.png"
    linkedinIcon.src = "assets/linkedin-icon-dark.png"
    emailIcon.src = "assets/email-icon-dark.png"

  } else{
    toggleBtn.textContent = "🌙"
    logoImg.src = "assets/logo-dark.png"
    gitIcon.src = "assets/github-icon-light.png"
    linkedinIcon.src = "assets/linkedin-icon-light.png"
    emailIcon.src = "assets/email-icon-light.png"
  }

});

//PROJETOS
  const projetos = [
    {
      img: "assets/api1.jpg",
      alt: "API 1: Service Desk",
      titulo: "API 1: Service Desk",
      descricao: "Aplicação para prestar assessoria para solucionar problemas integrado no ambiente de tecnologia da informação",
      link: "https://github.com/MariMiks/API-DSM-ServiceDesk"
    },
    {
      img: "assets/api2.png",
      alt: "API 2: Sistema HERMEZ",
      titulo: "API 2: Sistema HERMEZ",
      descricao: "Gerenciamento de Chamados de Serviços.",
      link: "https://github.com/MariMiks/API_2-Hermez"
    },
    {
      img: "assets/api3.png",
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
  projetos.forEach((proj, index) => {
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