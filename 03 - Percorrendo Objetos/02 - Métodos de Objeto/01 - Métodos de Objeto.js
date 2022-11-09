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

// Return the object properties
let clientProperties = Object.keys(client);
console.log(clientProperties);

function receive() {
    if(clientProperties.includes("dependents")) {
        console.log("There is dependents");
    }
}

receive();

let values = Object.values(client);
console.log(values);

let entries = Object.entries(client);
console.log(entries);