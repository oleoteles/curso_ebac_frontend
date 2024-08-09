function Computador(tipo) {
    this.tipo = tipo;
}

function PC(tipo, marca, modelo, anoModelo, anoFabricacao) {
    this.marca = marca;
    this.modelo = modelo;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;

    Computador.call(this, tipo);
}

// function Origem(localDeFabricacao) {
//     this.localDeFabricacao = localDeFabricacao;

//     PC.call(this, tipo, marca, modelo, anoModelo, anoFabricacao);
// }

const computador1 = new Computador("notebook");
const pc1 = new PC("notebook", "Aspire", "Acer", "2021", "2021");
// const origem1 = new Origem("Taiwan")

console.log(computador1);
console.log(pc1);
// console.log(origem1)