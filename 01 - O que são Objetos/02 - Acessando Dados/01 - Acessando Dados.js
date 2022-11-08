let client = {
    name: "Volax",
    age: 22,
    cpf: "5234234",
    email: "volax@gmail.com"
};

// To use the property of an object, use the notation of ".", where after the dot is written the name of the property
console.log(`My name is ${client.name} and I have ${client.age} years old. My CPF is ${client.cpf.substring(0, 3)}`);