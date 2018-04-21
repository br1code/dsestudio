const express               = require("express"),
    bodyParser              = require("body-parser"),
    methodOverride          = require("method-override");

const app = express();

const port = process.env.PORT || 3000;

// Express configuration
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));


// Routes
const indexRoutes           = require("./routes/index"),
    postsRoutes             = require("./routes/posts"),
    noticiasRoutes          = require("./routes/noticias"),
    materiasRoutes          = require("./routes/materias"),
    alumnosRoutes           = require("./routes/alumnos");


app.use(indexRoutes);
app.use(postsRoutes);
app.use(noticiasRoutes);
app.use(materiasRoutes);
app.use(alumnosRoutes);


// Handling missed/wrong page
app.get("*", (req, res) => {
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
});

