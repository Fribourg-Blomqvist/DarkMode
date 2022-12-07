//je selectionne et je stock

//div switch
const switchBox = document.querySelector('.switch');
console.log(switchBox);
//div btn
const btn = document.querySelector('.btn');
console.log(btn);
// l'icone
const icone = document.querySelector('i');
console.log(icone);
//div container
const container = document.querySelector('.container');
console.log(container);
// titre
const titre = document.querySelector('h1');
console.log(titre);

switchBox.addEventListener('click',function(){
console.log('div cliqué');
 // Je déplace le cercle
btn.classList.toggle('btn-change');
// Je déplace l'icône
icone.classList.toggle('icone-change');
//je change l'icone
icone.classList.toggle('fa-sun');
    // La DIV switch change de couleur de fond
switchBox.classList.toggle('switch-change');
 // La DIV container change de couleur de fond
container.classList.toggle('container-change');

// titre.innerText = "LIGHT MODE"; Mon erreure

if(titre.innerText === "DARK MODE"){
    titre.innerText = "LIGHT MODE";
}else{
    titre.innerText = "DARK MODE";
}

});


