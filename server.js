const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const Data = require("./data");
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== "production"; //true false
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler(); //part of next config
const cors = require('cors');

// const db = mongoose.connect("mongodb+srv://andresbuzzio:metadesign@cluster0-ylu2x.gcp.mongodb.net/test?retryWrites=true&w=majority");

nextApp.prepare().then(() => {
  // express code here
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  const router = express.Router();

  //routes
  app.get("*", (req, res) => {
    return handle(req, res); // for all the react stuff
  });

const mongoose = require('mongoose')

// this is our MongoDB database
const dbRoute =
"mongodb+srv://andresbuzzio:metadesign@cluster0-ylu2x.gcp.mongodb.net/test?retryWrites=true&w=majority";

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// this is our get method
  // this method fetches all available data in our database
  router.get("/getData", (req, res) => {
    Data.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
  });

  // this is our create methid
  // this method adds new data in our database
  router.post("/putData", (req, res) => {
    let data = new Data({
      id: req.body.id,
      name: req.body.name,
      email: req.body.email
    });

    data.save(err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    });
  });

  // append /api for our http requests
  // LAST AND MOST IMPORTANT!
  app.use("/api", router);


  app.listen(PORT, err => {
    if (err) throw err;
    console.log(`ready at http://localhost:${PORT}`);
  });
});


