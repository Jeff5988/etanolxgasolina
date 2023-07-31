// alert('JS carregado');

// Selecionando um elemento do HTML e guardando ele em uma variável
var btn = document.querySelector('#btn');
var etanol = document.querySelector('#etanol');
var gasolina = document.querySelector('#gasolina');
var msgResult = document.querySelector('.result');
var msgCombustivel = document.querySelector('#msgCombustivel');

// Criando a função de calcularCombustível

function calcularCombustivel(){
    
    // console.log(etanol.value);
    // console.log(gasolina.value);
    // Se o valor do etanol e o valor da gasolina forem diferentes de vazio
    if (etanol.value != '' && gasolina.value != '') {

        msgResult.style.visibility = 'visible';
        
        // Calculo => etanol / gasolina
        // se o resultado for menor ou igual a 0.7 abasteça com etanol
        // senão, abasteça com gasolina
        
        var resultado = etanol.value / gasolina.value;

        alert(resultado);

        if(resultado <= 0.7){
            //alert('Abasteça com Etanol'); 
            msgCombustivel.innerHTML = 'Etanol';  
        }
        else{
            //alert('Abasteça com Gasolina');  
            msgCombustivel.innerHTML = 'Gasolina'; 
        }

    }
    
    // senão
    else{
        alert('Preença os campos!');
    }
}

// Monitorando o btn
// Quando o clique ocorrer, a função calcularCombustivel será acionada
btn.addEventListener('click', calcularCombustivel);