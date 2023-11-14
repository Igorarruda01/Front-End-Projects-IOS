//buscar  os elementos

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const slides = document.querySelectorAll('.slide');

//configuração do auto-play
const auto = true;
//intervalo de transição
const intervalo = 4000;

let slideInterval;

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

function nextSlide() {
   // alert('proximo')

   const atual = document.querySelector('.atual');
   //remover a classe atual do elemento
   atual.classList.remove('atual');

   //verificar se existe um proximo elemento
   if (atual.nextElementSibling) {
    atual.nextElementSibling.classList.add('atual')
   } else {
    slides[0].classList.add('atual');
   }
}


function prevSlide() {
   // alert('anterior')
   const atual = document.querySelector('.atual');

   atual.classList.remove('atual');

   if (atual.previousElementSibling) {
     atual.previousElementSibling.classList.add('atual');

   } else {
    slides[slides.length -1].classList.add('atual');
   }


}

//controle do autoplay

if (auto) {
    //ativa a função slide nextSlide() a cada tempo de intervalo
    slideInterval = setInterval(nextSlide, intervalo)
}


