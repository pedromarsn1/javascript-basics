//Objeto Error
//aceita message, filename e lineNumber 
//filename e linenumbe rpodem não ser compatíveis com alguns tipos de navegador é sempre bom verificar a documentação do seu browser 
const MeuErro = new Error("Mensagem iválida")
//posso botar o nome do erro.
MeuErro.name = "Invalid Message"

//posso colocar a pilha(onde está localizado)
MeuErro.stack

throw(MeuErro);

