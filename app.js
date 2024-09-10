function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let sect = document.getElementById("resultados-pesquisa");
  
    let campoDePesquisa = document.getElementById
    ("campoDePesquisa").value
    // Se campoDePesquisa for uma string vazia:
    if (!campoDePesquisa) {
      sect.innerHTML = "<p>Digite o nome da abertura desejada.</p>"
      return 
    }
    
    campoDePesquisa = campoDePesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    // Interage no for abaixo, para a pesquisa funcionar em letras minusculas
    let result = "";
    let titulo = "";
    let descricao = "";
   
    // Itera sobre cada dado da lista de dados
    // dado.titulo.includes("") - Se tirulo inclui campo de pesquisa...
    for (let dado of dados) { 
        titulo = dado.titulo.toLowerCase()
        descricao = dado.titulo.toLowerCase()
        if (titulo.includes(campoDePesquisa) || descricao.includes(campoDePesquisa)) {
                // Constrói o HTML para cada item do resultado da pesquisa
          result += `
        <div class="item-resultado">
          <h2>Abertura:</h2>
          <li class="descricao-ttl">${dado.titulo}</li>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Exemplo</a>
               </div> `;
        }

      
    }
    if (!result) {
        result = "<p>Não encontrado.</p>"
    }
    // Atribui o HTML gerado para a seção de resultados
    sect.innerHTML = result;
  }
