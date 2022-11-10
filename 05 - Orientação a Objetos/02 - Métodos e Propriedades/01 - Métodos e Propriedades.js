class Client {
    constructor(name, email, cpf, balance) {
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.balance = balance;
    }

    deposit(value) {
        this.balance += value;
    }

    showBalance() {
        console.log(this.balance);
    }
}

// The keyword "extends" extends all the attributes and methods of the Class after the "extends"
class SavingCustomer extends Client {
    constructor(name, email, cpf, balance, savingBalance) {
        // The "super" calls the constructor of the super class (in this case, the Client constructor)
        super(name, email, cpf, balance);

        this.savingBalance = savingBalance;
    }

    depositSaving(value) {
        this.savingBalance += value;
    }
}

let client = new SavingCustomer("Andy", "andy@gmail.com", "4234363", 100, 50);
console.log(client);

client.depositSaving(100);

console.log(client);