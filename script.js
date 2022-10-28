//Este é o código javascript do projeto, para este projeto eu vou precisar dos seguintes requisitos:

//1 - Criar um contador e alimentar o mesmo com a quantidade de minutos.
//Declarando as variáveis
let horas = 00;
let minutos = 00;
let segundos = 00;
let litros = 00;

//Criando a função sleep, para determinar os intervalos de repetição
function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}
//Criando a função segundo para atualizar a varival sempre que o contador chegar a 60 milesimos de segundos
async function contar_segundos(){
  while (true){
      document.querySelector("#segundos").innerText = segundos
      await sleep(1 * 1000);
      if(segundos == 60){
        segundos = 0
      }
      else{
        segundos += 1
      }
  }
}
//Criando a função minutos para atualizar a varival sempre que o contador chegar a 60 segundos
async function contar_minutos(){
  while (true){
      document.querySelector("#minutos").innerText = minutos
      await sleep(1 * 60000);
      if(minutos == 60){
        minutos = 0
      }
      else{
        minutos += 1
      }
  }
}
//Criando a função horas para atualizar a varival sempre que o contador chegar a 60 minutos
async function contar_horas(){
  while (true){
      document.querySelector("#horas").innerText = horas
      await sleep(1 * 600000);
      if(horas == 60){
        horas = 0
      }
      else{
        horas += 1
      }
  }
}
//2 - Buscar uma formula para calcular a quantidade de litros de água desperdiçados no Brasil por minutos/segundos.
//Criando uma função para atualizar o valor de litros a cada segundo.
async function contar_litros(){
    while (true){
    document.querySelector("#litros").innerText = parseFloat(litros).toFixed(3);
    await sleep(1 * 1000);
    litros += 0.00181;
    }
}

//Inicializando as funções
contar_horas();
contar_minutos();
contar_segundos();
contar_litros();

//3 - Modificar em tempo real através de CSS a quantidade de água sendo desperdiçada.



