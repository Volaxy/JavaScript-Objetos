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
    ]
};

console.log(client.dependents[0]);
console.log(client.dependents[1]);