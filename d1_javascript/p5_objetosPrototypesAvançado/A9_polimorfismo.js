function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor){
    // verificando se a saldo
    if (this.saldo < valor){
        console.log(`saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};


function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}


ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;


ContaCorrente.prototype.sacar = function (valor){
    // verificando se a saldo
    if (valor > (this.saldo + this.limite)){
        console.log(`saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};


function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}


ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;


Conta.prototype.depositar = function (valor){
    this.saldo += valor;
    this.verSaldo();
};


Conta.prototype.verSaldo = function (){
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
};


const conta1 = new Conta(11, 22, 10);
// conta1.depositar(11);
// conta1.depositar(58);
// conta1.sacar(24);
// conta1.sacar(60);
const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);

console.log();

const cp = new ContaPoupanca(11, 22, 0);
cp.depositar(10);
cp.sacar(110);
cp.sacar(1);