// Conexão com elementos HTML
//Encapsulando os elementos em uma variavel

//filtro de pesquisa
const filtter = document.getElementById('filter');
//formulario para add item
const form = document.getElementById('addForm');
//Lista para receber novos items
const list = document.getElementById('items');

filtter.addEventListener('keyup',filtrarItem);

form.addEventListener('submit',addItem);

list.addEventListener('click',removerItem);

function filtrarItem(evento){
//console.log(evento.target.value);
  let txt = evento.target.value.toLowerCase();
  //Buscar todos so itens li
  let itens = document.getElementsByTagName('li');

  //converter para um Array o objeto itens
  Array.from(itens).forEach( function (item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(txt) != -1){
        item.style.display = 'block';
    }else{
        item.style.display = 'none';
    }
    });
};
function addItem(evento){
    evento.preventDefault();
    /*1 criar li
      2 Atribuir classe
      3 Inserir valor
      4 criar btn e colocar classe
      5 inserir texto*/
      
      const li = document.createElement('li');
      li.className = 'list-group-item';
      // receber o valor do campo imput
      const textoItem = document.getElementById('item').value;
      li.appendChild(document.createTextNode(textoItem));

      const btn = document.createElement('button')

      btn.className = 'btn btn-danger btn-sm float-end delete'
      btn.appendChild(document.createTextNode('X'));

      li.appendChild(btn);

      //Adicionar o li a lista
      list.appendChild(li);
      //resetar o formulario
      form.reset();

};
function removerItem(evento){
   // alert('você clicou em min')/
   
   if(evento.target.classList.contains('delete'));
   //selecionando o pai do elemento clicado
   let li = evento.target.parentElement;
   list.removeChild(li); // removeu o elemento da lista
};


