// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let mat=[];
  for(const prop in objeto){mat.push([prop, objeto[prop]])}
  return mat;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let mat=[];
  let obj={};

  for(let i=0;i<string.length;i++){
    mat.push(string[i])
  }

  mat.sort();
  console.log(mat);

  while(mat.length>0){
    let aux=mat.filter(element=>element===mat[0]);
    obj[mat[0]]=aux.length;
    mat=mat.filter(element=>element!==mat[0]);
  }
  
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let str="",min="", may="",otro="";
  for(let i=0;i<s.length;i++){
    if(s[i]===s[i].toLowerCase()){
      min=min+s[i];
    }
    else if(s[i]===s[i].toUpperCase()){
      may=may+s[i];
    }
    else{
      otro=otro+s[i];
    }
  }

  return may+min+otro;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  let array=str.split(" ");

  for (let i = 0; i<array.length; i++) {
    let rev="";
    for(let j=0;j<array[i].length;j++){
      rev=rev+array[i][array[i].length-1-j];
    }
    array[i]=rev;
  }

  return array.join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let str=numero.toString();
  let rev="";

  for(let i=0;i<str.length;i++){
    rev=rev+str[str.length-1-i];
  }

  return numero==rev? "Es capicua" : "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  return cadena.replace(/a|b|c/ig,"");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort(function(a,b){return a.length-b.length});
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  let inter=[];
  inter=arreglo1.filter(element=>{
    let flag=false;
    arreglo2.forEach(function(element2){
      flag= flag||(element2===element);
    });
    return flag;
  });

  return inter.sort();

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

