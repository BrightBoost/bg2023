let express = require("express");
let cors = require("cors");
let fs = require("fs");

let app = express();

// Create application/x-www-form-urlencoded parser
app.use(express.urlencoded({ extended: false }));

// Parse incoming requests as JSON
app.use(express.json());

// Enable incoming requests from any origin
app.use(cors());

// Serves the public folder as static files
// Not currently being used as no public directory exists
app.use(express.static("public"));

///////////////////////////////////////////////////////////////////////
//   API ENDPOINTS 

app.get('/', function (req, res) {
    res.send('Welcome to the Stay Organized API. Check out the endpoints at /api/todos to get started!')
})

app.get("/api/todos", function (req, res) {
    console.log("Got a GET request for all todos");

    let data = fs.readFileSync(__dirname + "/data/" + "todos.json", "utf8");
    data = JSON.parse(data);

    console.log("Returned data is: ");
    console.log(data);
    res.end(JSON.stringify(data));
});

app.get("/api/todos/:id", function (req, res) {
    let id = req.params.id;
    console.log("Got a GET request for todo #" + id);
    let data = fs.readFileSync(__dirname + "/data/" + "todos.json", "utf8");
    data = JSON.parse(data);

    // find todo w/ matching id
    let match = data.find(t => t.id == id);

    console.log("Returned data is: ");
    console.log(match);
    res.end(JSON.stringify(match));
});

app.get("/api/todos/byuser/:id", function (req, res) {
    let id = req.params.id;
    console.log("Got a GET request for todos for userid " + id);

    let data = fs.readFileSync(__dirname + "/data/" + "todos.json", "utf8");
    data = JSON.parse(data);

    // find user w/ matching userid
    let matching = data.filter(t => t.userid == id);

    console.log("Returned data is: ");
    console.log(matching);
    res.end(JSON.stringify(matching));
});

app.get("/api/categories", function (req, res) {
    console.log("Got a GET request for all categories");

    let data = fs.readFileSync(__dirname + "/data/" + "categories.json", "utf8");
    data = JSON.parse(data);

    console.log("Returned data is: ");
    console.log(data);
    res.end(JSON.stringify(data));
});

app.get("/api/users", function (req, res) {
    console.log("Got a GET request for all users");

    let data = fs.readFileSync(__dirname + "/data/" + "users.json", "utf8");
    data = JSON.parse(data);

    // create a list of all user accounts but exclude passwords
    let usersWithoutPasswords = [];
    for (let i = 0; i < data.length; i++) {
        let aUser = { id: data[i].id, name: data[i].name, username: data[i].username };
        usersWithoutPasswords.push(aUser);
    }

    console.log("Returned all users (without passwords): ");
    console.log(usersWithoutPasswords);
    res.end(JSON.stringify(usersWithoutPasswords));
});

app.get("/api/username_available/:username", function (req, res) {
    let username = req.params.username;
    console.log("Checking to see if username " + username + " is available");

    let data = fs.readFileSync(__dirname + "/data/" + "users.json", "utf8");
    data = JSON.parse(data);

    // find user w/ matching username
    let matchingUser = data.find(u => u.username.toLowerCase() == username.toLowerCase());

    // if found return NO (username not avail); otherwise return YES
    let message;
    if (matchingUser != null) {
        message = "NO";
    }
    else {
        message = "YES";
    }

    console.log("Returned message is: ");
    console.log(message);

    // IMPORTANT:  returning a string, not JSON
    res.end(message);
});

app.get("/api/users/:username", function (req, res) {
    let username = req.params.username;
    console.log("Got a GET request for user with username " + username);

    let data = fs.readFileSync(__dirname + "/data/" + "users.json", "utf8");
    data = JSON.parse(data);

    // find user w/ matching username
    let match = data.find(u => u.username.toLowerCase() == username.toLowerCase());
    console.log("Returned user is: ");
    console.log(match);
    res.end(JSON.stringify(match));
});

app.post("/api/todos", function (req, res) {
    console.log("Got a POST request to add a todo");
    console.log("BODY -------->" + JSON.stringify(req.body));

    let data = fs.readFileSync(__dirname + "/data/" + "todos.json", "utf8");
    data = JSON.parse(data);

    // create todo item from data in request body
    let item = {
        id: data.length + 1,
        userid: req.body.userid,
        category: req.body.category,
        description: req.body.description,
        deadline: req.body.deadline,
        priority: req.body.priority,
        completed: false
    };
    console.log("New todo: ");
    console.log(item);

    // add todo to list and then re-save data
    data.push(item);
    fs.writeFileSync(__dirname + "/data/" + "todos.json", JSON.stringify(data));

    console.log("New todo saved!");
    res.status(200).send();
});

app.post("/api/users", function (req, res) {
    console.log("Got a POST request to add a user");
    console.log("BODY -------->" + JSON.stringify(req.body));

    let data = fs.readFileSync(__dirname + "/data/" + "users.json", "utf8");
    data = JSON.parse(data);

    // check for duplicate username
    let matchingUser = data.find(u => u.username.toLowerCase() == req.body.username.toLowerCase());
    if (matchingUser != null) {
        // username already exists
        console.log("ERROR: username already exists!");
        res.status(403).send();   // forbidden
        return;
    }

    // create user from data in request body
    let user = {
        id: data.length + 1,
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    };

    console.log("New user: ");
    console.log(user);

    // add user to list and then re-save data
    data.push(user);
    fs.writeFileSync(__dirname + "/data/" + "users.json", JSON.stringify(data));

    console.log("New user saved!");
    res.status(200).send();
});

// rough draft, not tested
app.put("/api/todos", function (req, res) {
   console.log("Got a PUT request for ToDos");
   // get all the todos

   let data = fs.readFileSync(__dirname + "/data/" + "todos.json", "utf8");
   data = JSON.parse(data);

   // find the one that the put request is for
   let putTodo = data.find(todo => todo.id == req.body.id);

   if(!putTodo) {
    res.status(404).send();
   }

   // alter that todo
   if(req.body.category) {
    putTodo.category = req.body.category;
   }

   if(req.body.completed != undefined) {
    putTodo.completed = req.body.completed;
   }

   // do this for all the properties of a todo

   // save the new list to the json file
   fs.writeFileSync(__dirname + "/data/" + "todos.json", JSON.stringify(data));

   // end the response
   res.send("ToDos PUT");
})
 
// rough draft, not tested
app.delete("/api/todos/:id", function (req, res) {
   console.log("Got a DELETE request for ToDos");
   let toBeDeletedId = req.params.id;
   // get all the todos
   let data = fs.readFileSync(__dirname + "/data/" + "todos.json", "utf8");
   data = JSON.parse(data);

   // find the index of the one that the delete request is for
   let todoIndex = data.findIndex(todo => todo.id == toBeDeletedId);

   // delete that todo from the list
   if(todoIndex != -1) {
    data.splice(todoIndex, 1);
   }

   // save the new list with one todo less to the json file
   fs.writeFileSync(__dirname + "/data/" + "todos.json", JSON.stringify(data));

   // end the response
   res.send("ToDos DELETE");
})




let server = app.listen(8081, function () {
    let port = server.address().port;
    console.log("App listening at port %s", port);
});
