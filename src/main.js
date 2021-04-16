/*import { example } from './data.js';*/
import data from './data/lol/lol.js';

/*innerHTML: propiedad DOM que establece o devuelve el contenido HTML interno) de un elemento.*/
/*createElement: método crea un nodo de elemento con el nombre especificado. Después de crear el elemento, utilice el elemento.appendChild() o elemento.insertBefore() método para insertarlo en el documento.
/*appendChild: método DOM anexa un nodo como el último elemento secundario de un nodo.Agrega nvo elemento a una lista*/
/*template: etiqueta se utiliza como contenedor para contener algo de contenido HTML oculto cuando se carga web. El contenido interior se puede representar más adelante con un JS. Puede usar la etiqueta si tiene algún código HTML que desea usar una y otra vez, pero no hasta que lo solicite. Para ello sin la etiqueta, debe crear el código HTML con JavaScript para evitar que el explorador represente el código.<template><template>*/
/*forEach metodo que llama a una f(x) una vez para cada elemento de una matriz en orden*/

let pruebaData = data.data; //muestra la data de los campeones en consola*/

let dataNueva = Object.values(pruebaData);  /*.values devuelve las propiedades de los campeones*/ 
/*console.log(dataNueva)*/

dataNueva.forEach(e => console.log(e.name, e.img)); //obtengo nombre e img de los campeones

let myBttn= document.addEventListener("click" (e.name, e.img));

function myBttn() {
  var btn = document.createElement("button");  // para crear boton
  btn.innerHTML = "Akali";
  document.body.appendChild(btn);
}






function campeon () {    /*el valor de esta variable no se lee*/
  let text= " ";
  let e;
  
  for (let e in dataNueva) {
    let nombreImg = dataNueva.forEach;
    /*let botonReset= document.getElementById("root"); botonReset.innerHTML = nombreImg;*/
  
    
    console.log(campeon);
  }
}



//console.log(example, data);
