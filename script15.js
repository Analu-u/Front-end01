// Selecionando os elementos 
const thumbnails = document.querySelector('.thumbnails');
const mainImage = document.querySelector('main-image img');

// Aqui vamos comparar e o objetivo clicado é uma imagem - === (IGUAL) e o IMG que estar em maiúscula
thumbinails.addEdventListener('click', (event) =>
{
    if (event.target.tagName === 'IMG') {const newSrc = event.target.src; mainImage.src = newSrc;}
});