// ---------------- TOGGLE
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


(() => {
  // LISTA DE PROJETOS
  const projetos = [
    {
      categoria: "web",
      tipo: "Web",
      destaque: false,
      img: "../../assets/api1.jpg",
      titulo: "2021-1 API - Service Desk",
      descricao: "Projeto do primeiro semestre de Desenvolvimento de Software Multiplataforma da FATEC que curso atualmente. Consiste em um interface que presta assessoria para solucionar problemas integrado no ambiente de tecnologia da informação.",
      tags: ["HTML", "CSS", "JavaScript", "Python", "Bootstrap", "MySQL", "SQLAlchemy", "Trello", "Git"],
      link: "https://github.com/MariMiks/API-DSM-ServiceDesk",
      atuacao: "Primeiro projeto semestral com um grupo novo. Primeiro contato que tive com a estrutura SCRUM e metodologia ágeis para o desenvolvimento de aplicações. Primeira experiência exercendo a posição de Product Owner (PO). Foram vários primeiros desafios, mas que me ajudaram a entender e melhorar o meu desenvolvimento pessoal e técnico."
    },
    {
      categoria: "web",
      tipo: "Web",
      destaque: false,
      img: "../../assets/api2.png",
      titulo: "2023-02 API Hermez",
      descricao: "Projeto do segundo semestre de Desenvolivimento de Software Multiplataforma da FATEC que curso atualmente. Consiste em desenvolver um sistema de Gerenciamento de Chamados de Serviços. Este sistema deve ser capaz de fornecer informações sobre disponibilização de funcionalidades de planejamento, de acompanhar e controlar atendimentos de chamados de serviços, além de criar e exibir relatórios analíticos",
      tags: ["HTML", "CSS", "JavaScript", "MySQL", "NodeJS", "React", "Jira", "Git"],
      link: "https://github.com/MariMiks/API_2-Hermez",
      atuacao: "Focada no time de desenvolvimento no backend e banco de dados do projeto."
    },
    {
      categoria: "web",
      tipo: "Web",
      destaque: true,
      img: "../../assets/api3.png",
      titulo: "2024-01 API CtrlA",
      descricao: "Em conjunto com a Youtan realizamos uma aplicação web que visa facilitar o manuseio dos ativos tangíveis e intangíveis de uma empresa, sendo acompanhar quem atualmente possui o ativo, manutenções do ativo e relatórios com insights relevantes para um administrador do sistema.",
      tags: ["TypeSCript", "Java", "Spring", "PostgresSQL", "Supabase", "Figma", "Jira", "Git"],
      link: "https://github.com/MariMiks/API3-CtrlA",
      atuacao: "Neste semestre houve uma grande mudança na estrutura do grupo de alunos que participo, tivemos a saída de alguns e a integração de outros, isto com certeza impactou no nosso progresso. Ao primeiro momento estávamos todos tentando nos adaptar e se conhecer, com isso sugeri em vários momentos durante o planejamento para tentarmos levantar pontos positivos e negativos de experências passadas dos dois grupos e compactar estas ideias. Como estávamos preocupados e bem ansiosos de como seria o nosso desempenho, na primeira sprint tivemos uma entrega bem satisfatória. Porém na segunta e terceira sprint, descobrimos que habilidades técnicas não tínhamos grandes problemas mas sim em soft skills. Com esta observação, procuramos conversar em cada sprint review para melhorarmos, nestas reuniões me expressei com todos os pontos que havia observado e assim tentando também desenvolver individualmente uma melhor confiança na equipe e não centralizar as tarefas. Com muito esforço e resiliência conseguimos na quarta sprint obter uma entrega bem satisfatória e uma melhora bem significativa referente as outras entregas."
    },
    {
      categoria: "web",
      tipo: "Web",
      destaque: true,
      img: "../../assets/api4.jpg",
      titulo: "2024-02 API Sistema de Coleta de Dados de Estações Meteorológicas",
      descricao: "Em conjunto com a TecSus realizamos uma aplicação web que visa a coleta de dados de sensores (direção e velocidade do vento, índice pluviométrico, umidade, temperatura e pressão), tratá‑los e exibi‑los em um portal com dashboards e relatórios. Geração de alertas: ferramenta de monitoramento ambiental para lidar com desastres naturais. Recurso didático: a demonstração dos conceitos matemáticos usados nos cálculos dos parâmetros.",
      tags: ["TypeSCript", "Java", "Spring", "C++", "PostgresSQL", "Supabase", "Figma", "Taiga", "Git", "DevOps"],
      link: "https://github.com/MariMiks/API_4",
      atuacao: ""
    },
    {
      categoria: "mobile",
      tipo: "Mobile",
      destaque: true,
      img: "../../assets/api5.jpg",
      titulo: "2025-01 API Omni",
      descricao: "Plataforma que possibilite a criação e gerenciamento de agentes de Inteligência Artificial focados em atendimento interno. Esses agentes serão personalizados para responder questionamentos específicos, enquanto um sistema de permissões garante que cada usuário só tenha acesso aos agentes autorizados. Além disso, o projeto envolve a integração com um banco de dados na nuvem para armazenar o histórico de interações e a criação de um aplicativo móvel que facilite a comunicação via chat, entregando respostas rápidas e precisas às dúvidas dos usuários.",
      tags: ["Python", "React Native", "Swagger", "PostgresSQL", "Supabase", "AWS", "Figma", "Shortcut", "Git"],
      link: "https://github.com/MariMiks/API_5",
      atuacao: ""
    },
    {
      categoria: "web",
      tipo: "Web",
      destaque: true,
      img: "../../assets/api6.png",
      titulo: "2025-02 API Clara",
      descricao: "Sistema de busca semântica, a partir da dataset fornecido pelo cliente Dom Rock, capaz de interpretar e responder perguntas dos usuários por meio de um agente de inteligência artificial integrado ao chat interativo. Além disso, deverá ter a funcionalidade de enviar um boletim, baseado no modelo fornecido pelo cliente, gerado pela ia com os dados de um dado período do dataset diretamente a um email.",
      tags: ["Python", "Flutter", "Swagger", "PostgresSQL", "Supabase", "AWS", "Figma", "Shortcut", "Git"],
      link: "https://github.com/MariMiks/API_6",
      atuacao: ""
    }
  ];

  // ELEMENTOS
  const grid = document.getElementById("grid");
  const template = document.getElementById("card-template");

  if (!grid || !template) return;

  // RENDERIZAÇÃO DE CARDS
  projetos.forEach((proj, index) => {
    const clone = template.content.cloneNode(true);
    const card = clone.querySelector(".projeto-card");

    card.dataset.category = proj.categoria;
    card.dataset.index = index;

    clone.querySelector(".projeto-img").src = proj.img;
    clone.querySelector(".projeto-img").alt = proj.titulo;

    clone.querySelector("h3").textContent = proj.titulo;
    clone.querySelector(".descricao").textContent = proj.descricao;

    clone.querySelector(".tipo").textContent = proj.tipo;
    const tipoSpan = clone.querySelector(".tipo");
    tipoSpan.classList.add("tipo-" + proj.tipo.toLowerCase());

    if (!proj.destaque) {
      clone.querySelector(".destaque").classList.add("hide");
    }

    // TAGS
    const tagContainer = clone.querySelector(".tags");
    proj.tags.forEach(tag => {
      const span = document.createElement("span");
      span.textContent = tag;
      tagContainer.appendChild(span);
    });

    // LINK
    clone.querySelector(".btn-codigo").href = proj.link;

    // EVENTO PARA ABRIR MODAL
    card.addEventListener("click", () => abrirModal(index));

    grid.appendChild(clone);
  });

  // MODAL
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitulo = document.getElementById("modal-titulo");
  const modalDescricao = document.getElementById("modal-descricao");
  const modalTags = document.getElementById("modal-tags");
  const modalLink = document.getElementById("modal-link");
  const modalAtuacao = document.getElementById("modal-atuacao");

  const fechar = document.getElementById("modal-close");
  fechar.addEventListener("click", () => modal.style.display = "none");

  function abrirModal(index) {
    const p = projetos[index];

    modalImg.src = p.img;
    modalTitulo.textContent = p.titulo;
    modalDescricao.textContent = p.descricao;
    modalLink.href = p.link;
    modalAtuacao.textContent = p.atuacao;

    modalTags.innerHTML = "";
    p.tags.forEach(t => {
      const s = document.createElement("span");
      s.textContent = t;
      modalTags.appendChild(s);
    });

    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
  }

  // FECHAR AO CLICAR FORA
  window.onclick = e => {
    if (e.target === modal) modal.style.display = "none";
  };

})();



// FILTRO POR CATEGORIA
const filtros = document.querySelectorAll(".filtro");
const cards = document.querySelectorAll(".projeto-card");

filtros.forEach(btn => {
    btn.addEventListener("click", () => {
        filtros.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filtro = btn.getAttribute("data-filter");

        cards.forEach(card => {
            const categoria = card.getAttribute("data-category");

            if (filtro === "todos" || categoria === filtro) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// BUSCA
document.getElementById("searchInput").addEventListener("input", function () {
    const termo = this.value.toLowerCase();

    cards.forEach(card => {
        let texto = card.innerText.toLowerCase();
        card.style.display = texto.includes(termo) ? "block" : "none";
    });
});
