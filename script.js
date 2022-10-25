//Este é o código javascript do projeto, para este projeto eu vou precisar dos seguintes requisitos:

//1 - Criar um contador e alimentar o mesmo com a quantidade de minutos.
let minuto = 0;
let litros = 0;

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function contar_minuto(){
  while (true){
  minuto += 1
  document.querySelector("#minuto").innerText = minuto
  await sleep(1 * 1000);
  }
}
contar_minuto();

//2 - Buscar uma formula para calcular a quantidade de litros de água desperdiçados no Brasil por minutos/segundos.

async function contar_litros(){
    while (true){
    document.querySelector("#litros").innerText = litros
    await sleep(1 * 60000);
    litros += 10.06
    }
}
contar_litros();

//3 - Modificar em tempo real através de CSS a quantidade de água sendo desperdiçada.



