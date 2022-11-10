function Client(name, email, age, balance) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.balance = balance;

    this.deposit = function(value) {
        this.balance += value;
    }
}

// The keyword "new" calls the constructor function named "Client", and creates a new instance of the object "Client"
let client1 = new Client("Volax", "volax@gmail.com", 22, 1000);
console.log(client1);

// The "client1.__proto__" contains the constructor of the object "Client"
// The "client1.__proto__.__proto__" is the prototype of the object "Object"