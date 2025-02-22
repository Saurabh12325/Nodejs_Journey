const express = require("express"); // Import Express
const app = express(); // Create an Express application

app.get("/", (req, res) => {
    res.send("Welcome to the home page"); // Send response
});
app.get("/about", (req, res) => {
    res.send("Welcome to the about page"); // Send response
});
app.get("/course", (req, res) => {
    res.send("Welcome to the course page"); // Send response
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
