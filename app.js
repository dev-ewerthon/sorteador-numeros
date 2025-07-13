function sortear(){

    // Utilizamos o .getElementById para acessar e manipular elementos pelo seu atributo ID
    // Utilizamos o parseInt() para estipular como parâmetro o recebimento de um número inteiro
    // Utilizamos o .value quando queremos recuperar o valor que recebemos em um campo de texto

    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    /*alert (`Quantidade: ${quantidade}`);
    alert (`Do número: ${de}`);
    alert (`Até o número: ${ate}`);*/

    let sorteados = [];
    let numero;
    
    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio (de, ate);

        // Utilizamos o loop while para repetir um bloco de código enquanto uma condição específica é verdadeira
        // includes devolve um buleano

        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio (de, ate);
        }

        sorteados.push(numero);
    }
    
    //alert (sorteados);

    // Utilizamos o .innerHTML quando precisamos manipular o conteúdo HTML interno de um elemento permitindo inserir tags HTML, elementos e formatação mais complexa

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`

    alterarStatusBotao ();
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarStatusBotao();
}