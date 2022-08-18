function insert(num){

    var numero = document.getElementById('resultado').innerHTML;

    document.getElementById('resultado').innerHTML = numero + num;
}
function clean(){
    document.getElementById('resultado').innerHTML = "";
}
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1);
}
function calcular(){
    var resultado = parseFloat(document.getElementById('resultado').innerHTML);
    var soma = 0; 
    if(resultado > 0 && Number. isInteger(resultado)){
        for (let index = 1; index < resultado; index++) {
        
           let x ;
           x = index%3
           let y ;
           y = index%5


            if (x == 0 || y == 0 ) {
                
             soma = soma + index;            
            }

        }
    }
    else{
        alert("Por favor confirar se o numero digitado é um numero inteiro e positivo");
        
    }
    document.getElementById('resultado').innerHTML = eval(soma);
}