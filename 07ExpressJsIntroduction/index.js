const express = require("express"); // Import Express
const app = express(); // Create an Express application

app.get("/", (req, res) => {

    res.send(`Welcome to the home page 
        <a href= "/about">go to about page</a>
        `); // Send response
});
app.get("/about", (req, res) => {
    res.send(`
        <h1>Welcome to the about page</h1>
        <input type = 'text', placeholder = 'name user'value="${req.query.name}" />
        <button>click me </button>
         <a href= "/">go to home page</a>
        
        `); // Send response
});
app.get("/course", (req, res) => {
    res.send(
        [
            {"name": "saurabh",
                "course": "btech"},
                {"name": "saurabh",
                    "course": "btech"}
        ]
    ); // Send response
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
