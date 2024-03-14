const form =  document.getElementById("form");

function compararValores () {

    var campoA = document.getElementById('numero-a').value;
    var campoB = document.getElementById('numero-b').value;

    campoA = parseFloat(campoA);
    campoB = parseFloat(campoB);

    if (!isNaN(campoA) && !isNaN(campoB)){
        if(campoB > campoA){
            alert('Formulário válido: o valor de B é maior que o valor de A');
        } else {
            alert('Formulário inválido: o valor de B deve ser maior que o de A');
        }
        return campoB > campoA;
    } else {
        alert('Digite valores válidos nos campos');
        return false;
    }
}
