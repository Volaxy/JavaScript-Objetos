let clients = [
    {
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
    },
    {
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
                name: "July",
                type: "Mother",
                age: 20
            }
        ],

        balance: 200,

        deposit: function(value) {
            this.balance += value;
        }
    }
];

// The "..." spreads the array values in other array
let dependents = [...clients[0].dependents, ...clients[1].dependents];
console.log(dependents);

// The "console.table()" log the data in the table format
console.table(dependents);