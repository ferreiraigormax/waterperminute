//Este é o código javascript do projeto, para este projeto eu vou precisar dos seguintes requisitos:
//1 - Conseguir capturar o relógio do usuário, para pegar os minutos e segundos do mesmo.
//2 - Buscar uma formula para calcular a quantidade de litros de água desperdiçados no Brasil por minutos/segundos.
//3 - Modificar em tempo real através de CSS a quantidade de água sendo desperdiçada.

var minuto = 0
var segundo = 0

while (segundo < 100){
    segundo += 1
    document.querySelector('#segundo').innerHTML = segundo
    if (segundo === 60){
        minuto += 1
        document.querySelector('#minuto').innerHTML = minuto
    }
    else{
    }

}
