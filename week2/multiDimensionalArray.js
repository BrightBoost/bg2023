let rooms = [
    ["Amy", "Cameron", "Iman", "Lovro"],
    ["Alastair", "Amber", "Tom", "Zoe"],
    ["Lewis", "Louisa", "Sophie"]
];


rooms
    .forEach(
        room => room
        .forEach(person => console.log(person))
    );