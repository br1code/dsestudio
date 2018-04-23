const express               = require("express"),
    bodyParser              = require("body-parser"),
    methodOverride          = require("method-override"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose"),
    expressSession          = require("express-session"),
    middleware              = require("./extras/middleware"),
    User                    = require("./models/user");

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

// Passport configuration
const sessionConfig = {
    secret: "the most encrypted secret in the world",
    resave: false,
    saveUninitialized: false
};

app.use(expressSession(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Custom middleware to provide currentUser and flash messages to all routes
app.use(middleware.currentUser);

// Routes configuration
app.use(indexRoutes);
app.use(authRoutes);
app.use(categoryRoutes);
app.use(postRoutes);
app.use(teacherRoutes);

// Handling missed/wrong page
app.get("*", (req, res) => {
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
});

