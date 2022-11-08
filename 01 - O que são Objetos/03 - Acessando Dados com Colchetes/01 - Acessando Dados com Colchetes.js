let client = {
    name: "Volax",
    age: 22,
    cpf: "5234234",
    email: "volax@gmail.com"
};

let keys = ["name", "age", "cpf", "email"];

// To use a specific property of an object, use the "[ ]" where inside will be the name of the property you want to access
keys.forEach(key => console.log(client[key]));

// If the property there isn't in the object, the return is "undefined"
console.log(client["propertie"]); // undefined