function Client(name, email, age, balance) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.balance = balance;

    this.deposit = function(value) {
        this.balance += value;
    }
}

let volax = new Client("Volax", "volax@gmail.com", 22, 1000);
console.log(volax, "\n");

function SavingAccount(name, email, age, balance, savingBalance) {
    // The "call()" function, pull the properties of the object on which it is called, to inside the constructor function of another object
    Client.call(this, name, email, age, balance);
    
    this.savingBalance = savingBalance;
}

let jax = new SavingAccount("jax", "jax@gmail.com", 38, 1500, 250);
console.log(jax);

// Enter "prototype" to access the __proto__ of the object to set properties and methods
SavingAccount.prototype.depositSaving = function(value) {
    this.savingBalance += value;
};

jax.depositSaving(50);

console.log(jax);