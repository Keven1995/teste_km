
//KM RODADOS
function calculaKm(kmAntes, kmDepois){
 const kmRodados =  kmDepois - kmAntes;
 return kmRodados;
}
// criei essa função para tirar a diferença da quilometragem rodada. 


const kmRodados = calculaKm(15555, 15590); // aqui estou chamando a função e colocando valores para serem mostrados a diferença
console.log("Você rodou", kmRodados,"km hoje"); // aqui será mostrado a diferença e junto disso uma mensagem. 


//GASOLINA
function calculaGasolina(valorGasolina, dinheiroAbastecido){ // função para calcular o valor de litros de gfasolina de acordo com o dinheiro gasto
    const valorContaGasolina = dinheiroAbastecido / valorGasolina;
    return valorContaGasolina;
}

const valorContaGasolina = calculaGasolina(5.65, 60); //chamei a função
console.log("você colocou", valorContaGasolina.toFixed(2), "de litros para rodar na cidade!"); // resultado junto com uma mensagem


