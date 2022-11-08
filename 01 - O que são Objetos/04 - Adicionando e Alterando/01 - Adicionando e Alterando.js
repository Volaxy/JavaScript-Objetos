let client = {
    name: "Volax",
    age: 22,
    cpf: "5234234",
    email: "volax@gmail.com"
};

console.log(client);

// If the property dosen't exists, she will be created
client.phone = "(27) 91111-1111";
console.log(client);

client.phone = "(27) 99999-9999";
console.log(client);