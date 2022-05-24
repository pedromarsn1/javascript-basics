//arays
let array = ["string", 1, true];
console.log(array);

//guarda vários tipos de dados
let outroArray = ["omg", 1, [array1], [array2, [array3, [array4]]], [array5]];
console.log(outroArray[0]);

//manipulando arrays
array.forEach(function (item, index) {
  console.log(index, item);
});

outroArray.push([]);
console.log(outroArray);

array.pop();
console.log(array);

//objetos
var xicara = {
  cor: "azul",
  tamanho: "p",
  tipo: "Porcelana",
};
console.log(xicara.cor);


