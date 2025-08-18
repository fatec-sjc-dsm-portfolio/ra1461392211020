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
      img: "assets/projeto1.png",
      alt: "Projeto 1",
      titulo: "Sistema de Pedidos",
      descricao: "Aplicação para controle de pedidos com dashboard interativo.",
      link: "https://github.com/seuusuario/projeto1"
    },
    {
      img: "assets/projeto2.png",
      alt: "Projeto 2",
      titulo: "Previsão de Vendas",
      descricao: "Modelo com Prophet para previsão de vendas mensais.",
      link: "https://github.com/seuusuario/projeto2"
    },
    {
      img: "assets/projeto3.png",
      alt: "Projeto 3",
      titulo: "Automação no Excel",
      descricao: "Script em Python para integração com SharePoint.",
      link: "https://github.com/seuusuario/projeto3"
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