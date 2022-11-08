let client = {
    name: "Volax",
    age: 22,
    cpf: "5234234",
    email: "volax@gmail.com",

    phones: [
        "344523443",
        "4654645654"
    ],

    dependent: {
        name: "Frak",
        type: "brother",
        age: 5
    }
};

console.log(client);

client.dependent.name = "Volaxy";

console.log(client);