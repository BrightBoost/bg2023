let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];

// ID equal to 187
let academyMember = academyMembers.find(a => a.memID == 187);
console.log("Name of the member with ID 187 is ", academyMember.name);

// at least three films
let academyMembersAtLeast3Films = academyMembers.filter(a => a.films.length >= 3);
console.log("3 or more:", academyMembersAtLeast3Films);

// name that starts with bob
let bobs = academyMembers.filter(a => a.name.toLowerCase().startsWith("bob"));
console.log("Bobs:", bobs);

// members in a film that starts with A
let membersFilmA = academyMembers
    .filter(a => a.films
        .find(
            f => f.startsWith("A")
        )
    );
console.log("A film: ", membersFilmA);

// just print names
bobs.forEach(b => console.log(b.name));