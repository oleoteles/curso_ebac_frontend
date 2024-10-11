function multiplicaNum(num1: number, num2: number): number {
    return num1 * num2
}

class Pessoa {
    nome: string;

    constructor(nome: string) {
        this.nome = nome
    }

    dizOla(): string {
        return `Olá ${this.nome}`
    }
}
