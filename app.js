function renderizarResultados(resultados) {
    let html = "";
    resultados.forEach(resultado => {
      html += `
        <div class="item-resultado">
          <img src="${resultado.imagem}" alt="${resultado.titulo}">
          <h2><a href="${resultado.link}" target="_blank">${resultado.titulo}</a></h2>
          <p class="descricao">${resultado.descricao}</p>
        </div>
      `;
    });
    // ... resto do código
  }

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
        section.innerHTML = "Campo de pesquisa vazio."
        return
    }
    

    campoPesquisa = campoPesquisa.toLowerCase();
    
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase().replace(/\s+/g, ''); // replace(/\s+/g, '') Remove todos os espaços em branco
        descricao = dado.descricao.toLowerCase().replace(/\s+/g, '');
        tags = dado.tags.toLowerCase().replace(/\s+/g, '');
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Melhor composição e build</a>
            </div>
            `;
        } 
     }

     if (!resultados){
        resultados = "Nada foi encontrado"
     }
    
     section.innerHTML = resultados
    }

