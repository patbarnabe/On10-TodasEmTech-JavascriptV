// 1.a. fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo script.js
// [] usar o método fetch() para buscar o arquivo meme.jpg
// [] usar método .then() para transformar o dado recebido
// [] apresentar <img>

const mostraImagem = fetch("./meme.jpg");

mostraImagem.then(r => r.blob())
.then(body =>{
    const blobUrl = URL.createObjectURL(body);
    const imagemDom = document.getElementById('imagem');
    imagemDom.src = blobUrl;
})

mostraImagem(); 