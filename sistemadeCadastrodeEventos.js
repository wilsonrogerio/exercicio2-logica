// Exercicio da atividade online 2 - sistema de cadastro para eventos

let data = "05/08/2022" //data do evento deve ser posterior a data atual
let idade = 18 //idade deve ser maior que 18
let participantes = 99 //numero de participantes tem que ser inferior a 100

    
if (data > "04/08/2022") {
    if (idade >= 18) {
       if (participantes <=99) {
        console.log("cadstro realizado com sucesso")
       } else {
        console.log("cadastro invalido numero de participantes esgotados")
       }
    }else {
        console.log ("cadastro invalido idade precisa ser maior que 18")
    }
}else {
    console.log ("data invalida")
}