//map tem entradas com chave e valor (é uma coleçao de Arrays)

const myMap = new Map();

myMap.set('Apple', "Fruit");
myMap.get()

//Map VS Objeto

//-> MAP
//Maps podem ter chaves de qualquer tipo
//Possuem lengthsão mais fáceis de iterar 
//Utilizado quando o valor das chaves é desconhecido
//Os valores tem o mesmo tipo

//Coleção Set
//estruturas que armazenam valores unicos (nunca se repetem)
const MySet = new Set();

MySet.add(1)
MySet.add(8)

MySet.has(1)
MySet.delete(1)

//SET VS ARRAY
//possui valores unicos
//ao invés de length usa-se size p poder descobrir a quantidade de caractéres
//não possui metodos como map, filter, reduce