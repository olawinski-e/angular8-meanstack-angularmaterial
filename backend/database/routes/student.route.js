const express = require("express");
const app = express();
const StudentRoute = express.Router();

//Student model
let Student = require("../model/student");

//Add Student
studentRoute.route("/add-student").post((req, res, next) => {
  Student.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//Get all students
studentRoute.route("/").get((req, res) => {
  Student.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
