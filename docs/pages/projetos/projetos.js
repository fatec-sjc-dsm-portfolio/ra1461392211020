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
      atuacao: "Minha primeira experiência em um projeto acadêmico de desenvolvimento e também meu primeiro contato com metodologias ágeis. Atuei como Product Owner, aprendendo a organizar demandas, acompanhar o time e transformar necessidades do cliente em funcionalidades claras. Além disso, foi meu primeiro contato com várias tecnologias usadas no projeto, o que me desafiou bastante tecnicamente. Mesmo com tantas novidades ao mesmo tempo, consegui conduzir o grupo, organizar prioridades e manter as entregas alinhadas ao objetivo do sistema."
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
      atuacao: "Fiz parte exclusivamente do Dev Team, atuando principalmente no Front-end, mas contribuindo também no Back-end e um pouco na camada de dados. Esse projeto foi importante para o meu crescimento, pois trabalhei com um time completamente diferente do semestre anterior. Isso me ajudou a desenvolver tanto habilidades técnicas quanto pessoais, aprendendo a me adaptar a novos perfis, ritmos e formas de colaboração."
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
      atuacao: "O semestre começou com uma grande mudança no time, com entrada e saída de integrantes, o que impactou bastante nossa adaptação e ritmo. Sugeri discussões sobre experiências anteriores para alinharmos expectativas e estruturarmos boas práticas desde o início. Apesar da ansiedade coletiva, conseguimos uma primeira entrega forte, mas percebemos nas sprints seguintes que nossos desafios eram mais de comunicação e soft skills do que técnicos. A cada sprint review, compartilhei meus pontos de observação e ajudei o time a se reorganizar, fortalecendo confiança e distribuindo responsabilidades sem centralização. Com esforço e resiliência, conquistamos uma última sprint muito mais sólida e consistente, mostrando nossa evolução em grupo."
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
      atuacao: "Voltei a atuar como Product Owner, desta vez de forma muito mais tranquila e estruturada. Consegui organizar bem as tarefas do time e manter o fluxo de trabalho claro. Além do papel de PO, também contribuí como desenvolvedora front-end e permaneci como uma espécie de backup geral, auxiliando os demais times sempre que precisavam. Este projeto também marcou meu primeiro contato com DevOps — fui responsável pela documentação e integração dos processos, o que foi uma experiência nova e extremamente enriquecedora."
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
      atuacao: "Este foi um dos projetos mais conceitualmente desafiadores, principalmente pela complexidade da ideia apresentada pelo cliente. Fiquei focada na funcionalidade do chat, trabalhando no tratamento das respostas, integração e refinamento do comportamento da aplicação. Foi um desenvolvimento sensível, que exigiu bastante cuidado com detalhes. Apesar dos desafios, o resultado final ficou muito intuitivo e agradável de usar, com uma experiência fluida para o usuário."
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
      atuacao: "Atuei no Dev Team, contribuindo principalmente no Back-end, onde fui responsável pela funcionalidade de envio automático de relatórios, desde as rotas até a sincronização para envio por e-mail. No Front-end, trabalhei na responsividade e na padronização visual das páginas, garantindo consistência e boa experiência. Também fui responsável por toda a parte de segurança, configurando regras de acesso e garantindo que páginas administrativas não fossem exibidas para usuários comuns."
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
