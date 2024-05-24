const availableKeywords = [
  '(BSB) Aeroporto Internacional de Brasília / Presidente Juscelino Kubitschek - Brasília - DF',
  '(CGH) Aeroporto de São Paulo / Congonhas - São Paulo - SP',
  '(GIG) Aeroporto Internacional do Rio de Janeiro / Galeão-Antônio Carlos Jobim - Rio de Janeiro - RJ',
  '(SSA) Aeroporto Internacional de Salvador / Deputado Luís Eduardo Magalhães - Salvador - BA',
  '(FLN) Aeroporto Internacional de Florianópolis / Hercílio Luz - Florianópolis - SC',
  '(POA) Aeroporto Internacional de Porto Alegre / Salgado Filho - Porto Alegre - RS',
  '(VCP) Aeroporto Internacional de Viracopos / Campinas - Campinas - SP',
  '(REC) Aeroporto Internacional do Recife/ Guararapes – Gilberto Freyre - Recife - PE',
  '(CWB) Aeroporto Internacional de Curitiba / Afonso Pena - Curitiba - PR',
  '(BEL) Aeroporto Internacional de Belém / Val de Cans - Belém - PA',
  '(VIX) Aeroporto de Vitória – Eurico de Aguiar Salles - Vitória - ES',
  '(SDU) Aeroporto Santos Dumont - Rio de Janeiro - RJ',
  '(CGB) Aeroporto Internacional de Cuiabá / Marechal Rondon - Cuiabá - MT',
  '(CGR) Aeroporto Internacional de Campo Grande - Campo Grande - MS',
  '(FOR) Aeroporto Internacional de Fortaleza / Pinto Martins - Fortaleza - CE',
  '(MCP) Aeroporto Internacional de Macapá - Macapá - AP',
  '(MGF) Aeroporto Regional de Maringá / Silvio Name Júnior - Maringá - PR',
  '(GYN) Aeroporto de Goiânia / Santa Genoveva - Goiânia - GO',
  '(NVT) Aeroporto Internacional de Navegantes / Ministro Victor Konder - Navegantes - SC',
  '(MAO) Aeroporto Internacional de Manaus / Eduardo Gomes - Manaus - AM',
  '(NAT) Aeroporto Internacional de Natal / Augusto Severo - Natal - RN',
  '(BPS) Aeroporto Internacional de Porto Seguro - Porto Seguro - BA',
  '(MCZ) Aeroporto de Maceió / Zumbi dos Palmares - Maceió - AL',
  '(PMW) Aeroporto de Palmas/Brigadeiro Lysias Rodrigues - Palmas - TO',
  '(SLZ) Aeroporto Internacional de São Luís / Marechal Cunha Machado - São Luís - MA',
  '(GRU) Aeroporto Internacional de São Paulo/Guarulhos-Governador André Franco Montoro - Guarulhos - SP',
  '(LDB) Aeroporto de Londrina / Governador José Richa - Londrina - PR',
  '(PVH) Aeroporto Internacional de Porto Velho / Governador Jorge Teixeira de Oliveira - Porto Velho - RO',
  '(RBR) Aeroporto Internacional de Rio Branco / Plácido de Castro - Rio Branco - AC',
  '(JOI) Aeroporto de Joinville / Lauro Carneiro de Loyola - Joinville - SC',
  '(UDI) Aeroporto de Uberlândia / Ten. Cel. Av. César Bombonato - Uberlândia - MG',
  '(CXJ) Aeroporto Regional de Caxias do Sul / Hugo Cantergiani - Caxias do Sul - RS',
  '(IGU) Aeroporto Internacional de Foz do Iguaçu - Foz do Iguaçu - PR',
  '(THE) Aeroporto de Teresina – Senador Petrônio Portella - Teresina - PI',
  '(AJU) Aeroporto Internacional de Aracaju / Santa Maria - Aracaju - SE',
  '(JPA) Aeroporto Internacional de João Pessoa / Presidente Castro Pinto - João Pessoa - PB',
  '(PNZ) Aeroporto de Petrolina / Senador Nilo Coelho - Petrolina - PE',
  '(CNF) Aeroporto Internacional de Minas Gerais / Confins – Tancredo Neves - Confins - MG',
  '(BVB) Aeroporto Internacional de Boa Vista / Atlas Brasil Cantanhede - Boa Vista - RR',
  '(CPV) Aeroporto de Campina Grande / Presidente João Suassuna - Campina Grande - PB',
  '(STM) Aeroporto de Santarém / Maestro Wilson Fonseca - Santarém - PA',
  '(IOS) Aeroporto de Ilhéus/Bahia-Jorge Amado - Ilhéus - BA',
  '(JDO) Aeroporto de Juazeiro do Norte – Orlando Bezerra - Juazeiro do Norte - CE',
  '(IMP) Aeroporto de Imperatriz – Prefeito Renato Moreira - Imperatriz - MA',
  '(XAP) Aeroporto de Chapecó – Serafim Enoss Bertaso - Chapecó - SC',
  '(MAB) Aeroporto de Marabá - Marabá - PA',
  '(CZS) Aeroporto Internacional de Cruzeiro do Sul - Cruzeiro do Sul - AC',
  '(PPB) Aeroporto Estadual de Presidente Prudente - Presidente Prudente - SP',
  '(CFB) Aeroporto Internacional de Cabo Frio - Cabo Frio - RJ',
  '(FEN) Aeroporto de Fernando de Noronha - Fernando de Noronha - PE',
  '(JTC) Aeroporto Estadual de Bauru/Arealva - Bauru - SP',
  '(MOC) Aeroporto de Montes Claros/Mário Ribeiro - Montes Claros - MG'  
];

const availableKeywordsB = [
  '(BSB) Aeroporto Internacional de Brasília / Presidente Juscelino Kubitschek - Brasília - DF',
  '(CGH) Aeroporto de São Paulo / Congonhas - São Paulo - SP',
  '(GIG) Aeroporto Internacional do Rio de Janeiro / Galeão-Antônio Carlos Jobim - Rio de Janeiro - RJ',
  '(SSA) Aeroporto Internacional de Salvador / Deputado Luís Eduardo Magalhães - Salvador - BA',
  '(FLN) Aeroporto Internacional de Florianópolis / Hercílio Luz - Florianópolis - SC',
  '(POA) Aeroporto Internacional de Porto Alegre / Salgado Filho - Porto Alegre - RS',
  '(VCP) Aeroporto Internacional de Viracopos / Campinas - Campinas - SP',
  '(REC) Aeroporto Internacional do Recife/ Guararapes – Gilberto Freyre - Recife - PE',
  '(CWB) Aeroporto Internacional de Curitiba / Afonso Pena - Curitiba - PR',
  '(BEL) Aeroporto Internacional de Belém / Val de Cans - Belém - PA',
  '(VIX) Aeroporto de Vitória – Eurico de Aguiar Salles - Vitória - ES',
  '(SDU) Aeroporto Santos Dumont - Rio de Janeiro - RJ',
  '(CGB) Aeroporto Internacional de Cuiabá / Marechal Rondon - Cuiabá - MT',
  '(CGR) Aeroporto Internacional de Campo Grande - Campo Grande - MS',
  '(FOR) Aeroporto Internacional de Fortaleza / Pinto Martins - Fortaleza - CE',
  '(MCP) Aeroporto Internacional de Macapá - Macapá - AP',
  '(MGF) Aeroporto Regional de Maringá / Silvio Name Júnior - Maringá - PR',
  '(GYN) Aeroporto de Goiânia / Santa Genoveva - Goiânia - GO',
  '(NVT) Aeroporto Internacional de Navegantes / Ministro Victor Konder - Navegantes - SC',
  '(MAO) Aeroporto Internacional de Manaus / Eduardo Gomes - Manaus - AM',
  '(NAT) Aeroporto Internacional de Natal / Augusto Severo - Natal - RN',
  '(BPS) Aeroporto Internacional de Porto Seguro - Porto Seguro - BA',
  '(MCZ) Aeroporto de Maceió / Zumbi dos Palmares - Maceió - AL',
  '(PMW) Aeroporto de Palmas/Brigadeiro Lysias Rodrigues - Palmas - TO',
  '(SLZ) Aeroporto Internacional de São Luís / Marechal Cunha Machado - São Luís - MA',
  '(GRU) Aeroporto Internacional de São Paulo/Guarulhos-Governador André Franco Montoro - Guarulhos - SP',
  '(LDB) Aeroporto de Londrina / Governador José Richa - Londrina - PR',
  '(PVH) Aeroporto Internacional de Porto Velho / Governador Jorge Teixeira de Oliveira - Porto Velho - RO',
  '(RBR) Aeroporto Internacional de Rio Branco / Plácido de Castro - Rio Branco - AC',
  '(JOI) Aeroporto de Joinville / Lauro Carneiro de Loyola - Joinville - SC',
  '(UDI) Aeroporto de Uberlândia / Ten. Cel. Av. César Bombonato - Uberlândia - MG',
  '(CXJ) Aeroporto Regional de Caxias do Sul / Hugo Cantergiani - Caxias do Sul - RS',
  '(IGU) Aeroporto Internacional de Foz do Iguaçu - Foz do Iguaçu - PR',
  '(THE) Aeroporto de Teresina – Senador Petrônio Portella - Teresina - PI',
  '(AJU) Aeroporto Internacional de Aracaju / Santa Maria - Aracaju - SE',
  '(JPA) Aeroporto Internacional de João Pessoa / Presidente Castro Pinto - João Pessoa - PB',
  '(PNZ) Aeroporto de Petrolina / Senador Nilo Coelho - Petrolina - PE',
  '(CNF) Aeroporto Internacional de Minas Gerais / Confins – Tancredo Neves - Confins - MG',
  '(BVB) Aeroporto Internacional de Boa Vista / Atlas Brasil Cantanhede - Boa Vista - RR',
  '(CPV) Aeroporto de Campina Grande / Presidente João Suassuna - Campina Grande - PB',
  '(STM) Aeroporto de Santarém / Maestro Wilson Fonseca - Santarém - PA',
  '(IOS) Aeroporto de Ilhéus/Bahia-Jorge Amado - Ilhéus - BA',
  '(JDO) Aeroporto de Juazeiro do Norte – Orlando Bezerra - Juazeiro do Norte - CE',
  '(IMP) Aeroporto de Imperatriz – Prefeito Renato Moreira - Imperatriz - MA',
  '(XAP) Aeroporto de Chapecó – Serafim Enoss Bertaso - Chapecó - SC',
  '(MAB) Aeroporto de Marabá - Marabá - PA',
  '(CZS) Aeroporto Internacional de Cruzeiro do Sul - Cruzeiro do Sul - AC',
  '(PPB) Aeroporto Estadual de Presidente Prudente - Presidente Prudente - SP',
  '(CFB) Aeroporto Internacional de Cabo Frio - Cabo Frio - RJ',
  '(FEN) Aeroporto de Fernando de Noronha - Fernando de Noronha - PE',
  '(JTC) Aeroporto Estadual de Bauru/Arealva - Bauru - SP',
  '(MOC) Aeroporto de Montes Claros/Mário Ribeiro - Montes Claros - MG'  
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
const inputBoxes = document.querySelectorAll(".search-input input");

inputBoxes.forEach(inputBox => {
  inputBox.addEventListener("input", function() {
    // Se algo for digitado, exiba o result-box
    const resultBox = this.parentElement.querySelector(".result-box");
    resultBox.style.display = "flex";
  });
});
inputBoxes.forEach(inputBox => {
  inputBox.addEventListener("input", function() {
    // Se algo for digitado, exiba o result-box
    let input = inputBox.value.trim(); // Remove espaços em branco do início e do fim
    if (input.length) {
      resultsBox.style.display = "flex";
    } else {
      resultsBox.style.display = "none";
    }
  });
});
inputBox.addEventListener("input", function() {
  let result = [];
  let input = inputBox.value.trim(); // Remove espaços em branco do início e do fim
  if (input.length) {
    result = availableKeywords.filter((keyboard) => {
      return keyboard.toLowerCase().includes(input.toLowerCase());
    });
    display(result); // Mostra os resultados filtrados
  } else {
    hideResults(); // Oculta os resultados se não houver entrada
  }
});
function display(result) {
  if (result.length === 0) {
    resultsBox.innerHTML = "<p style='padding: 5px; margin:0;'>Não encontrado</p>";
  } else {
    const content = result.map((list) => {
      return "<li onclick=selectInput(this) style='padding:5px;'>" + list + "</li>";
    });
    resultsBox.innerHTML = "<ul style='padding: 0; margin:0;'>" + content.join('') + "</ul>";
  }
}
function selectInput(list) {
  inputBox.value = list.innerHTML;
  hideResults(); // Oculta os resultados após selecionar um item
}
function hideResults() {
  resultsBox.innerHTML = '';
  resultsBox.style.display = "none"; // Limpa os resultados
}



// DESTINO



const resultsBoxB = document.querySelector(".result-box-b");
const inputBoxB = document.getElementById("input-box-b");
const inputBoxesB = document.querySelectorAll(".search-input-b input");

// Adicione um evento de digitação para cada campo de entrada
inputBoxesB.forEach(inputBoxB => {
  inputBoxB.addEventListener("input", function() {
    // Se algo for digitado, exiba o result-box
    const resultBoxB = this.parentElement.querySelector(".result-box-b");
    resultBoxB.style.display = "flex";
  });
});
inputBoxesB.forEach(inputBoxB => {
  inputBoxB.addEventListener("input", function() {
    // Se algo for digitado, exiba o result-box
    let inputB = inputBoxB.value.trim(); // Remove espaços em branco do início e do fim
    if (inputB.length) {
      resultsBoxB.style.display = "flex";
    } else {
      resultsBoxB.style.display = "none";
    }
  });
});
// Adiciona um evento de foco ao campo de entrada
inputBoxB.addEventListener("input", function() {
  let resultB = [];
  let inputB = inputBoxB.value.trim(); // Remove espaços em branco do início e do fim
  if (inputB.length) {
    resultB = availableKeywordsB.filter((keyboard) => {
      return keyboard.toLowerCase().includes(inputB.toLowerCase());
    });
    displayB(resultB); 
  } else {
    hideResultsB(); 
  }
});
function displayB(resultB) {
  if (resultB.length === 0) {
    resultsBoxB.innerHTML = "<p style='padding: 5px; margin:0;'>Não encontrado</p>";
  } else {
    const content = resultB.map((listB) => {
      return "<li onclick=selectInputB(this) style='padding:5px;'>" + listB + "</li>";
    });
    resultsBoxB.innerHTML = "<ul style='padding: 0; margin:0;'>" + content.join('') + "</ul>";
  }
}
function selectInputB(listB) {
  inputBoxB.value = listB.innerHTML;
  hideResultsB(); 
}
function hideResultsB() {
  resultsBoxB.innerHTML = '';
  resultsBoxB.style.display = "none"; 
}
