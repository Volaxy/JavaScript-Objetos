// Class name starts with capital letter in CamelCase pattern
class Client {
    constructor(name, email, cpf, balance) {
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.balance = balance;
    }

    // The function declaration does not need the keyword "function" followed by the function name
    deposit(value) {
        this.balance += value;
    }

    showBalance() {
        console.log(this.balance);
    }
}

let andy = new Client("Andy", "andy@gmail", "234234234", 100);
console.log(andy);
andy.showBalance();