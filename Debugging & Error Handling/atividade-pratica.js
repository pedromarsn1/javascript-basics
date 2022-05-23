function arrayNum(arr, num) {
  try {
    if (!arr && !num) {
      throw new ReferenceError("Envie todos os parâmetros");
    }

    if (typeof arr !== "object") {
      throw new TypeError("array precisa ser tipo object");
    }

    if (typeof num !== "number") {
      throw new TypeError("numero precisa ser to tipo number");
    }

    if (arr.length !== num) throw new RangeError("Tamanho inválido");

    return arr;
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("refence error");
      throw (e.name, e.stack);
    } else if (e instanceof TypeError) {
      console.log("erro de tipo");
      throw (e.name, e.stack);
    } else if (e instanceof RangeError) {
      console.log("range error");
      throw (e.name, e.stack);
    } else {
      console.log("unknown error");
      throw (e.name, e.stack);
    }
  }
}

console.log(arrayNum());
