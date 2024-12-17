alert('boas vindas ao jogo do numreo secreto');// gera uma mensagemque indica a inicialização do jogo
// let numeroSecreto = 3;// espaço na memoria para armazernar uma informação
let numeroSecreto = parseInt(Math.random()*30+1)
console.log(numeroSecreto);//mostra no console do navegador
let chute  //variavel de armazenamento
let tentativas = 1; 

while(chute!=numeroSecreto){ // estrutura de repetção comerciaal 
  chute  = prompt('escolha um numero entre 1 e 30');
  if (numeroSecreto == chute) {
    break;
}
  else {
   if(numeroSecreto > chute){
      alert(`o numero é maior que ${chute}`);
    }
    else{
     alert(`o numero é menor que ${chute}`);
    }
}
 tentativas++;
}
let pt= tentativas > 1 ?'tantativas':'tentativa'
alert(`você acertou o numero secreto ${numeroSecreto} com ${tentativas} ${pt}`);


