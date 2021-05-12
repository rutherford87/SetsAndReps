const express = require("express");
const logger = require("morgan");


const PORT = 3000;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))

//mongoose.connect("mongodb://localhost/workout")

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.get('/stats', (req, res) => res.sendFile(path.join(__dirname, './public/stats.html')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
app.get('/exercise', (req, res) => res.sendFile(path.join(__dirname, './public/exercise.html')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

app.listen(PORT, () => {
    console.log('App is running on port ${PORT}!');
});