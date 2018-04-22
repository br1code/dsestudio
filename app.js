const express               = require("express"),
    bodyParser              = require("body-parser"),
    methodOverride          = require("method-override"),
    mongoose                = require("mongoose");

// Routes
const indexRoutes           = require("./routes/index"),
    authRoutes              = require("./routes/auth"),
    categoryRoutes          = require("./routes/category"),
    postRoutes              = require("./routes/post"),
    teacherRoutes           = require("./routes/teacher");

const app = express();

const port = process.env.PORT || 3000;


// CONFIG ---------------------------------------------------------

// Mongoose configuration
mongoose.connect("mongodb://localhost/dsestudio");

// Express configuration
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

// Routes configuration
app.use(indexRoutes);
app.use(authRoutes);
app.use(categoryRoutes);
app.use(postRoutes);
app.use(categoryRoutes);
app.use(teacherRoutes);

// Handling missed/wrong page
app.get("*", (req, res) => {
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
});

