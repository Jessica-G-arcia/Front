const pessoa = {
    nome: "Jéssica",
    idade: 31,
    saudacao: function () {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
};

console.log(pessoa.nome);
console.log(pessoa.saudacao());