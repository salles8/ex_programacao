fetch("http://127.0.0.1:5500/10.json").then(async function(res) {
  const itemListElement = await res.json();
  var elem = '';
  for (var i = 0; i < itemListElement.length; i++){
    elem += '<article>';
    elem += `<img class="img-responsive" src='${itemListElement[i].image}' />`;
  //   elem += `${itemListElement[i].url}`;
  if(itemListElement[i].discount > 0){
    elem += `<div class="discount">${itemListElement[i].discount}%</div>`;
  }
  elem += `<p class="porte">${itemListElement[i].porte}</p>`;
  elem += `<p class="name">${itemListElement[i].name}</p>`;
  elem += `<p class="autor">${itemListElement[i].autor}</p>`;
  elem += `<p class="preco">${(itemListElement[i].preco.toString().replace('.',','))}€</p>`;
    // elem += `<div class="estrelas">${showStars(itemListElement[i].estrelas)}</div>`;
    if (parseInt(itemListElement[i].estrelas)>0){
    elem += `<div class="estrelas">${showStars(itemListElement[i].estrelas)}</div>`;
    }
    if (parseInt(itemListElement[i].avaliadores)>0){
        elem += `<p class="avaliadores">&nbsp(${itemListElement[i].avaliadores})</p>`;
    }

    // elem += `<div class="estrelas">${showStars(itemListElement[i].estrelas)}<span class="avaliadores">&nbsp(${hideAvaliadores(itemListElement[i].avaliadores)})</span></div>`;
    // elem += `<p class="avaliadores">&nbsp(${itemListElement[i].avaliadores})</p>`;
    // elem += `<class="avaliadores">(${itemListElement[i].avaliadores})</p>`;
    elem += '</article>';
  }
  document.getElementById("suggestions").innerHTML = elem;
})
fetch("http://127.0.0.1:5500/10b.json").then(async function(res) {
  const itemListElement2 = await res.json();
  var elem2 = '';
  for (var i = 0; i < itemListElement2.length; i++){
    elem2 += '<article>';
    elem2 += `<img class="img-responsive" src='${itemListElement2[i].image}' />`;
    //   elem += `${itemListElement2[i].url}`;
    elem2 += `<div class="discount">${itemListElement2[i].discount}</div>`;
    elem2 += `<p class="porte">${itemListElement2[i].porte}</p>`;
    elem2 += `<p class="name">${itemListElement2[i].name}</p>`;
    elem2 += `<p class="autor">${itemListElement2[i].autor}</p>`;
    elem2 += `<p class="preco">${(itemListElement2[i].preco.toString().replace('.',','))}€</p>`;
    // elem += `<div class="estrelas">${showStars(itemListElement[i].estrelas)}</div>`;
    if (parseInt(itemListElement2[i].estrelas)>0){
    elem2 += `<div class="estrelas">${showStars(itemListElement2[i].estrelas)}</div>`;
    }
    if (parseInt(itemListElement2[i].avaliadores)>0){
        elem2 += `<p class="avaliadores">&nbsp(${itemListElement2[i].avaliadores})</p>`;
    }
    elem2 += '</article>';
  }
  document.getElementById("suggestions2").innerHTML = elem2;
})

fetch("http://127.0.0.1:5500/10c.json").then(async function(res) {
  const itemListElement3 = await res.json();
  var elem3 = '';
  for (var i = 0; i < itemListElement3.length; i++){
    elem3 += '<article>';
    elem3 += `<img class="img-responsive" src='${itemListElement3[i].image}' />`;
    elem3 += `<div class="discount">${itemListElement3[i].discount}</div>`;
    elem3 += `<p class="porte">${itemListElement3[i].porte}</p>`;
    elem3 += `<p class="preco">${(itemListElement3[i].preco.toString().replace('.',','))}€</p>`;
    if (parseInt(itemListElement3[i].estrelas)>0){
    elem3 += `<div class="estrelas">${showStars(itemListElement3[i].estrelas)}</div>`;
    }
    if (parseInt(itemListElement3[i].avaliadores)>0){
        elem3 += `<p class="avaliadores">&nbsp(${itemListElement3[i].avaliadores})</p>`;
    }
    elem3 += '</article>';
  }
  document.getElementById("suggestions3").innerHTML = elem3;
})


function myToggleMenu() {
  var element = document.getElementById("navMenu");
  element.classList.toggle("hidden");
}

function showStars(stars){
  let nEstrelas =  parseInt(stars);
  let nEstrelasVazias = 5 - parseInt(stars);
  const imgEstrela = `<img src='./img/star-filled.png' />`;
  const imgEstrelaEmpty = `<img src='./img/star-empty.png' />`;

  var listaEstrelas = ``;
  
  if (nEstrelas > 0 && nEstrelas<= 5){
    listaEstrelas = imgEstrela.repeat(nEstrelas);
    listaEstrelas += imgEstrelaEmpty.repeat(nEstrelasVazias);
  } 
    return listaEstrelas;
  }




  

  // function eurToDol(valor) {
  //   var dollar = valor*5;
  //   return dollar + '$';
  // }