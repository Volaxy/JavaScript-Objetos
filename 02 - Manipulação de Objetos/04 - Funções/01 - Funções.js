let client = {
    name: "Volax",
    age: 22,
    cpf: "5234234",
    email: "volax@gmail.com",

    phones: [
        "344523443",
        "4654645654"
    ],

    dependents: [
        {
            name: "Frak",
            type: "brother",
            age: 5
        },
        {
            name: "Volx",
            type: "brother",
            age: 10
        },
    ],

    balance: 200,

    // To defines a function inside a object, the NAME is puted, followed by the ":" and the keyword "function"
    // The function is associated with the object itself
    deposit: function(value) {
        this.balance += value;
    }
};

console.log(client.balance);
client.deposit(50);
console.log(client.balance);