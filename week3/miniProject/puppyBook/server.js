let express = require("express");
let fs = require("fs");
let cors = require("cors");

let app = express();
app.use(cors());

// Create application/x-www-form-urlencoded parser
let urlencodedParser = express.urlencoded({ extended: false });

// Need the next line to accept JSON bodies
app.use(express.json());

////////////////////////////////////////////////////////////
// API endpoints

// GET all puppies
app.get("/api/puppies", function (req, res) {
    console.log("LOG: Got a GET request for all puppies");

    let data = fs.readFileSync(__dirname + "/data/" + "puppies.json", "utf8");
    data = JSON.parse(data);

    // LOG returned data
    console.log("LOG: Returned puppies -> ");
    console.log(data);

    res.end(JSON.stringify(data));
});

// GET one puppy by id
app.get("/api/puppies/:id", function (req, res) {
    let id = req.params.id;
    console.log("LOG: Got a GET request for puppy " + id);

    let data = fs.readFileSync(__dirname + "/data/" + "puppies.json", "utf8");
    data = JSON.parse(data);

    // Find the puppy
    let match = data.find(p => p.id == id);

    // If puppy not found
    if (match == undefined) {
        console.log("LOG: **NOT FOUND**: puppy " + id + " does not exist!");
        res.status(404).send();   // not found
        return;
    }

    // LOG returned data
    console.log("LOG: Returned puppy -> ");
    console.log(match);

    res.end(JSON.stringify(match));
});

// POST a puppy to be added
app.post("/api/puppies", urlencodedParser, function (req, res) {
    console.log("LOG: Got a POST request to add a puppy");
    console.log("LOG: Message body ------->");
    console.log(JSON.stringify(req.body));

    // If not all puppy data passed, reject the request
    if (!req.body.name || !req.body.breed || !req.body.age) {
        console.log("LOG: **MISSING DATA**: one or more puppy properties missing");
        res.status(400).send();   // can't process due to 1 or more missing properties
        return;
    }

    let data = fs.readFileSync(__dirname + "/data/" + "puppies.json", "utf8");
    data = JSON.parse(data);

    // Get the id of this new puppy
    let nextIdData = fs.readFileSync(__dirname + "/data/" + "next-ids.json", "utf8");
    nextIdData = JSON.parse(nextIdData);

    let nextPuppyId = nextIdData.nextPuppyId;

    nextIdData.nextPuppyId++;
    fs.writeFileSync(__dirname + "/data/" + "next-ids.json", JSON.stringify(nextIdData));

    // Create the puppy with new id 
    let puppy = {
        id: nextPuppyId,
        name: req.body.name,
        breed: req.body.breed,
        age: req.body.age
    };

    data.push(puppy);
    fs.writeFileSync(__dirname + "/data/" + "puppies.json", JSON.stringify(data));

    // LOG data for tracing
    console.log("LOG: New puppy added is -> ");
    console.log(puppy);

    res.status(201).json(puppy);
});

// PUT to update a puppy
// app.put("/api/puppies/:id", function (req, res) {
   

//     res.status(200).send();
// });

// DELETE a specific puppy
// app.delete("/api/puppies/:id", function (req, res) {
    
//     res.status(200).send();
// });

/////////////////////////////////////////////////////
// Start the server

app.use(express.static("public"));

let server = app.listen(8081, function () {
    let port = server.address().port;
    console.log("LOG: App listening at port %s", port);
});
