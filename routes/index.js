const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

//router.get("/movies", (req, res, next) => res.render( "movies"));

router.get("/movies", (req, res) => {
  Movie.find()
    .then((response) => {
      console.log(response);
      res.render("movies.hbs", { response });
    })
    .catch((error) => console.log(error));
});

//destructuracion = const {_id} = req.params

router.get("/details/:id", (req, res) => {
  const id = req.params.id;
  Movie.findById(id)
    .then((response) => {
      console.log(response);
      res.render("details.hbs", response);
    })
    .catch((error) => console.log(error));
});

module.exports = router;
