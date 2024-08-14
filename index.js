const substituicoes = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
};

const criptografias = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

function onDescriptografar() {
    let texto = document.querySelector('.main-text-area').value;
    
    for (const codificado in substituicoes) {
        texto = texto.split(codificado).join(substituicoes[codificado]);
    }
    
    atualizarResultado(texto);
}

function onCriptografar() {
    let texto = document.querySelector('.main-text-area').value;
    
    for (const original in criptografias) {
        texto = texto.split(original).join(criptografias[original]);
    }
    
    atualizarResultado(texto);
}

function atualizarResultado(texto) {
    const resultDiv = document.querySelector('.result');
    
    if (texto.trim() === '') {
        resultDiv.innerHTML = `
            <h1>Nenhuma mensagem encontrada</h1>
            <p>Digite um texto que você deseja criptografar ou descriptografar</p>
        `;
    } else {
        resultDiv.innerHTML = `
            <h1>Resultado:</h1>
            <p>${texto}</p>
        `;
    }
}

