////import data from './data/lol/lol.json';////
import champ from './data/lol/lol.js';

////Muestra la data de los campeones en consola////
let totalData = champ.data;                       
let dataChampions = Object.values(totalData);  ///para guardar los objetos y sus valores de la data, Object: son contenedores para valores
                                                   
const modal= document.createElement('div');   
modal.setAttribute('id', 'champ-modal');   ///"champ-modal" uno lo crea con setAtribute, se crea de etiquetas///

/////Muestra todos los campeones inicialmente/////
showChampions(dataChampions);                   /// se pueden crear f(x) en cualquier parte y se definen despues///

///Asignando funciones a botones(filtro por tipo)///
let buttonAssassin = document.getElementById('assassin');
buttonAssassin.addEventListener('click', () => {
  cleanScreenOfChampions();                      /// porque es funcion
  leakedChampions('Assassin');                    // se le pide que filtre los campeones asesinos
});

let buttonFighter = document.getElementById('fighter');  ///Luchadores
buttonFighter.addEventListener('click', () => {
  cleanScreenOfChampions();
  leakedChampions('Fighter');
});

let buttonMage = document.getElementById('mage');
buttonMage.addEventListener('click', () => {
  cleanScreenOfChampions();
  leakedChampions('Mage');
});

let buttonMarksman = document.getElementById('marksman');  ///Tiradores
buttonMarksman.addEventListener('click', () => {
  cleanScreenOfChampions();
  leakedChampions('Marksman');
});

let buttonSupport = document.getElementById('support');   ///Soportes
buttonSupport.addEventListener('click', () => {
  cleanScreenOfChampions();
  leakedChampions('Support');
});

let buttonTank = document.getElementById('tank');    ///tanques
buttonTank.addEventListener('click', () => {
  cleanScreenOfChampions();
  leakedChampions('Tank');
});

////Boton Reset/////
let buttonReset = document.getElementById('reset');
buttonReset.addEventListener('click', () => {
  viewDataNew();                               // muestra todos los campeones de nuevo una vez q esta filtrado
});

///funciones limpieza///
function cleanScreenOfChampions() {
  document.getElementById('root').innerHTML = '';  ///innerHTML le agrego naada; root es id de div///
}

///Funcion que muestra toda la data denuevo///
function viewDataNew() {
  cleanScreenOfChampions();
  showChampions(dataChampions);
}

////Función que muestra los Campeones////   
function showChampions(champions) {
  for (const obj of champions) {               ///recorre los valores de la data. obj: es la data misma///
    let pName = document.createElement('p');
    let divIcons = document.createElement('div');
    divIcons.setAttribute('class', 'champ-container');  //class es lo que quieres crear, nombre de class///
    
    pName.textContent = obj.name;

    //crear contenedor para nombre otro para img (divIcons) es una capsula dentro de otra//  
    let divRoot = document.getElementById('root');
    divIcons.appendChild(pName);                

    let img = document.createElement('img');
    img.setAttribute('class', 'img-container'); //agregar atributos del click. Filtrar para mostrar info///

    img.src = obj.img;

    divIcons.appendChild(img);
    divRoot.appendChild(divIcons);  ///hasta aqui tenemos mostrado img y nombres

    const closeModal= () => {
      divRoot.removeChild(modal);
    };

    divIcons.addEventListener("click", () => {
      let champInfo = `
                    <div class="div-container">
                      <button value="Cerrar divIcons" id="close-modal-button" />X</button>
                      <p class="title-modal"> ${obj.title}</p>
                      <img class="img-modal" src="${obj.splash}"/>
                      <p class="blurb-modal">${obj.blurb}</p> 
                    </div> `;

      modal.innerHTML = champInfo;
      divRoot.appendChild(modal)

      const button = document.getElementById("close-modal-button") ///se creo en 108 para cerrar pantalla///
      button.onclick = closeModal

    });
  }
}

////Función que filtra los Campeones y los muestra en pantalla////
function leakedChampions(tag) {
  let championsToShow = dataChampions.filter(lolData =>
    lolData.tags.includes(tag));    //tag es lo q quiero q filtre, hasta aqui se filtra
    showChampions(championsToShow);
}

////ordenarrrrr
const dataAZ = dataChampions.sort((a, b) => {
  if (a.name > b.name) {
    return 1;                      //retorma p+ a, b, c
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});

  const orderAZ = document.getElementById("selectOrder");  //id de bt ordenar
  orderAZ.addEventListener("change", () => {              /// change evento que cambie, 1° limpia luego ordene A-Z                 
    cleanScreenOfChampions();
    showChampions(dataAZ);
  });

  const orderZA = document.getElementById("selectOrder");
  orderZA.addEventListener("change", () => {
    cleanScreenOfChampions();
    showChampions(dataAZ.reverse()); ///inv si es metodo
  });
