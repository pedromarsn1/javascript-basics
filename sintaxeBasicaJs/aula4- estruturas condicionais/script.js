//condicionais
var jogador1 = 0;
var jogador2 = 0;

if (jogador1 <= -1 || jogador2 <= -1) {
  console.log("Jogadores inválidos");
} else {
  if (jogador1 > 0) {
    console.log(" jogador 1 Marcou ponto");
  } else if (jogador2 > 0) {
    console.log("jogador 2 marcou ponto");
  } else {
    console.log("Nenhum dos dois marcou ponto");
  }
}
