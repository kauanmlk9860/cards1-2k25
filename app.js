'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const disciplinas = [
        { nome: 'Insta', icon: 'insta.png', cor: 'yellow' },
        { nome: 'Tik Tok', icon: 'tiktok.png', cor: 'tomato' },
        { nome: 'Web', icon: 'web.png', cor: 'blue' },
        { nome: 'Youtube', icon: 'youtube.png', cor: 'pink' }
    ];
    const produtos = [
        { nome: 'Tenis Book 1', camiseta: 'dbook.webp', descrição: 'Basquete', preço: 'R$:790,00' },
        { nome: 'Geek Freak 6', camiseta: 'giannis.webp', descrição: 'Basquete', preço: 'R$:900,00' },
        { nome: 'Kevin Durant 17', camiseta: 'kd17.webp', descrição: 'Basquete', preço: 'R$:1200,00' },
        { nome: 'Kyrie Confetti', camiseta: 'kyrie.webp', descrição: 'Basquete', preço: 'R$:500,00' },
        { nome: 'Lebron 21', camiseta: 'lebron21.webp', descrição: 'Basquete', preço: 'R$:850,00' }
    ];

    function criarMenu(disciplina) {
        const novoItem = document.createElement('li');
        novoItem.classList.add('menu-item');
        novoItem.style.setProperty('--cor-hover', disciplina.cor);

        const novaImagem = document.createElement('img');
        novaImagem.src = `./img/${disciplina.icon}`;
        novaImagem.alt = disciplina.nome;

        const novoSpan = document.createElement('span');
        novoSpan.textContent = disciplina.nome;

        novoItem.appendChild(novaImagem);
        novoItem.appendChild(novoSpan);
        document.getElementById('menu').appendChild(novoItem);
    }
    disciplinas.forEach(criarMenu);

    const cardsContainer = document.getElementById("cards-container");

    produtos.forEach(produto => {
        const card = document.createElement("div");
        card.classList.add("card");

        const corTopo = document.createElement('div');
        corTopo.classList.add('cor-topo');
        card.appendChild(corTopo);

        const nome = document.createElement("h3");
        nome.textContent = produto.nome;
        card.appendChild(nome);

        const descrição = document.createElement("p");
        descrição.textContent = produto.descrição;
        card.appendChild(descrição);

        const imagem = document.createElement("img");
        imagem.src = `./img/${produto.camiseta}`;
        imagem.alt = produto.nome;
        card.appendChild(imagem);

        const preco = document.createElement("p");
        preco.classList.add("preco");
        preco.textContent = produto.preço;
        card.appendChild(preco);

        const tamanhos = document.createElement("div");
        tamanhos.classList.add("tamanhos");

        ["40", "42", "45"].forEach(tamanho => {
            const botaoTamanho = document.createElement("button");
            botaoTamanho.textContent = tamanho;
            botaoTamanho.classList.add("botao-tamanho");
            botaoTamanho.addEventListener("click", () => {
                botaoTamanho.classList.toggle("selected");
            });
            tamanhos.appendChild(botaoTamanho);
        });

        card.appendChild(tamanhos);

        const botaoComprar = document.createElement("button");
        botaoComprar.classList.add("comprar");
        botaoComprar.textContent = "Add to Cart";
        botaoComprar.addEventListener("click", () => {
            card.classList.add("added-to-cart");
            setTimeout(() => card.classList.remove("added-to-cart"), 500);
        });
        card.appendChild(botaoComprar);

        card.addEventListener("mouseenter", () => {
            card.classList.add("hovered");
        });
        card.addEventListener("mouseleave", () => {
            card.classList.remove("hovered");
        });

        cardsContainer.appendChild(card);
    });
});
