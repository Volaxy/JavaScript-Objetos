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

    deposit: function(value) {
        this.balance += value;
    }
};

let keys = [];
let values = [];

// The "for in" loops through the object keys
for(let key in client) {
    keys.push(key);
    values.push(client[key]);
}

console.log(keys);
console.log(values);