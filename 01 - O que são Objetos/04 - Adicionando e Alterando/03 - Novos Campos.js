const person = {
    name: "Bruce Banner",
    birthdate: "25/01/1980",
    IDCard: "997776-X",
    email: "profbanner@email.com",
    phone: "+552877776666",
    city: "Cachoeiro de Itapemirim",
    state: "ES"
}

/**
 * Using the representation of the person object, we were asked to add the social security and cpf fields in
 * string format. In addition, when the person's information is displayed in a report, only the first
 * 4 digits of the CPF and identity card should appear.
 */

person.cpf = "12345678900";
person.socialInsurance = "342";

console.log(`Person Information:
    Name: ${person.name}
    CPF: ${person.cpf.substring(0, 4)}
    ID Card: ${person.IDCard.substring(0, 4)}`);