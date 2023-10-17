// Dados temporários para a lista de usuários
const vacinas = [
];

//Função próximo para liberar o cadastro da vacina do paciente x
function proximo(){
    //Definição de Variaveis
    const CPF = document.getElementById("CPF").value;
    const nome = document.getElementById("Nome").value;
    const dataNasc = document.getElementById("dataNascimento").value;

    //Verifica se os inputs CPF, NOME E DATA NASCIMENTO não está vázio
    if (CPF !== "" && nome !== "" && dataNasc !== "") {
        //Definindo Visibilidade
        document.getElementById("inputsVacina").style.display = "block";
        document.getElementById("inputsPessoa").style.display = "none";
        document.getElementById("buttonProximo").style.display = "none";
        document.getElementById("buttonCadastro").style.display = "block";
    }
}

//Função para salvar o cadastro
function salvarCadastro() {
    //Definição de Variaveis
    const CPF = document.getElementById("CPF").value;
    const nome = document.getElementById("Nome").value;
    const dataNasc = document.getElementById("dataNascimento").value;
    const nomeVacina = document.getElementById("NomeVacina").value;
    const dataVacina = document.getElementById("dataVacina").value;
    const dataVacinaObj = new Date(dataVacina);
    const dataReforcoObj = new Date(dataVacinaObj);
    const dataNascObj = new Date(dataNasc);

    //Definindo a Data Reforço após 30 dias da Data de Vacina
    dataReforcoObj.setDate(dataReforcoObj.getDate() + 30);

    //Formatação Data de Reforço
    const dia = String(dataReforcoObj.getUTCDate()).padStart(2, '0');
    const mes = String(dataReforcoObj.getUTCMonth() + 1).padStart(2, '0');
    const ano = dataReforcoObj.getUTCFullYear();
    const dataReforcoFormatada = `${dia}/${mes}/${ano}`;

    //Formatação Data de Vacina
    const dia1 = String(dataVacinaObj.getUTCDate()).padStart(2, '0');
    const mes1 = String(dataVacinaObj.getUTCMonth() + 1).padStart(2, '0'); 
    const ano1 = dataVacinaObj.getUTCFullYear();
    const dataVacinaFormatada = `${dia1}/${mes1}/${ano1}`;

    //Formatação Data de Nascimento
    const dia2 = String(dataNascObj.getUTCDate()).padStart(2, '0');
    const mes2 = String(dataNascObj.getUTCMonth() + 1).padStart(2, '0');
    const ano2 = dataNascObj.getUTCFullYear();
    const dataNascFormatada = `${dia2}/${mes2}/${ano2}`;

    //Definindo Visibilidade
    document.getElementById("inputsVacina").style.display = "none";
    document.getElementById("inputsPessoa").style.display = "block";
    document.getElementById("buttonProximo").style.display = "block";
    document.getElementById("buttonCadastro").style.display = "none";


    // Adicionar o novo cadastro à lista de usuários
    vacinas.push({ CPF, nome, dataNasc: dataNascFormatada, nomeVacina, dataVacina: dataVacinaFormatada, dataReforco: dataReforcoFormatada});

    // Limpar o formulário
    document.getElementById("formCadastro").reset();

    // Mensagem de confirmação
    alert("Cadastro realizado com sucesso!");
    console.log(vacinas);

    // Atualize a lista de vagas na tela
    listarVacinas();
}

//Função para limpar o formulário e voltar para a visibilidade apenas do paciente
function limparForm(){
    document.getElementById("inputsVacina").style.display = "none";
    document.getElementById("inputsPessoa").style.display = "block";
    document.getElementById("buttonProximo").style.display = "block";
    document.getElementById("buttonCadastro").style.display = "none";
}


// Função para exibir as vagas na tela de listagem
function listarVacinas() {
    //Pegando o p
    const vacinaList = document.getElementById("acompanhamento");
    vacinaList.innerHTML = "";
    vacinas.forEach(vacina => {
        //Criando a div separada para cada paciente
        const divItem = document.createElement("div");
        divItem.classList.add("vacina-item");
        
        //Novo style
        divItem.style.backgroundColor = "#fff";
        divItem.style.border = "solid 1px #000";
        divItem.style.borderRadius = "10px";
        divItem.style.padding = "20px";
        divItem.style.margin = "20px";
        //----
        
        //Criando a lista
        const listItem = document.createElement("li");
        listItem.innerHTML = `CPF: ${vacina.CPF}<br>Nome: ${vacina.nome}<br>Data de Nascimento: ${vacina.dataNasc}<br>Nome da Vacina: ${vacina.nomeVacina}<br>Data de Vacina: ${vacina.dataVacina}<br>Data de Reforço: ${vacina.dataReforco}`;
        
        //Adicionando a div e a lista Vacina
        divItem.appendChild(listItem);
        vacinaList.appendChild(divItem);
        
        //Habilitando a quebra de linha para o textContent
        const lines = listItem.innerHTML.split('<br>');
        listItem.innerHTML = '';
        lines.forEach(line => {
        const paragraph = document.createElement('p');
         paragraph.innerHTML = line;
        listItem.appendChild(paragraph);
});
    });


}
