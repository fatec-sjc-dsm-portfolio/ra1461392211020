// ---------- TOGGLE  ---------------
const toggleBtn = document.getElementById("toggle-theme");
const logoImg = document.getElementById("logo-img");

// Carrega preferência salva
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.checked = true;
  logoImg.src = "../../assets/logo-light.png";
}

// Evento do toggle
toggleBtn.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    logoImg.src = "../../assets/logo-light.png";
    localStorage.setItem("theme", "dark");
  } else {
    logoImg.src = "../../assets/logo-dark.png";
    localStorage.setItem("theme", "light");
  }
});


// ---------- TEXTOS EM BADGE ---------------
const conteudo = document.querySelector('.conteudo');
    const textos = {
        Eu: `
            Sou uma pessoa focada, organizada e motivada por aprender continuamente. No trabalho, gosto de clareza, estrutura e desafios que realmente gerem impacto. Tenho facilidade em entender processos, identificar melhorias e transformar necessidades em soluções práticas.
            Ao mesmo tempo, valorizo leveza e autenticidade tanto na forma como me comunico quanto na forma como colaboro. Acredito em ambientes onde as pessoas se sintam à vontade para trocar ideias, aprender juntas e construir resultados de maneira consistente. Gosto de unir lógica e empatia: criar soluções eficientes sem perder a sensibilidade humana que existe por trás de cada processo, ferramenta ou decisão.
        `,
        ForaTrabalho: `
            Quando não estou mergulhada em projetos, geralmente estou assistindo séries,
            tocando piano, lendo algo novo, ouvindo músicas variadas ou saindo com meus amigos
            e com meu namorado. Gosto de momentos simples que recarregam minha energia e mantêm
            minha criatividade viva.
        `,
        musica: `
            A música sempre esteve presente na minha rotina. Não tenho um estilo favorito sigo muito
            o clima do momento. Ultimamente, o novo álbum do The Neighbourhood tem sido minha trilha sonora.
            Também costumo tocar piano para relaxar e organizar as ideias.
        `,
        profissional: `
            Gosto de resolver problemas, estruturar processos, organizar ideias e colaborar com pessoas.
            Sou centrada e comprometida, mas também trago leveza e bom humor ao ambiente de trabalho,
            porque acredito que isso faz tudo fluir melhor. Formada em Desenvolvimento de Software Multiplataforma (DSM)
            pela FATEC prof. Jessen Vidal - São José dos Campos. Trabalho atualmente na Ericsson no setor de Compras e busco unir meus conhecimentos
            em desenvolvimento de software para otimizar processos internos e criar soluções digitais eficientes
            para minha área. Já naveguei por algumas áreas mas mesmo na minha formação como técnica em mecânica tinha tecnologia envolvida.
            Tecnologia sempre estando presente independente do local que atuo.
        `,
        valor: `
            Busco evoluir continuamente como profissional e como pessoa. Acredito no equilíbrio entre foco
            e leveza, responsabilidade e autenticidade. Quero criar, aprender, contribuir e crescer. 
            Sem deixar de aproveitar a jornada.
        `
    };

    // Adiciona os eventos de clique em cada badge
    document.querySelectorAll('.badge').forEach(badge => {
        badge.addEventListener('click', () => {
            const id = badge.id;
            conteudo.innerHTML = textos[id];

            // opcional: destacar badge ativo
            document.querySelectorAll('.badge').forEach(b => b.classList.remove('ativo'));
            badge.classList.add('ativo');
        });
    });