const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//define collection and schema
let Sudent = new Schema(
  {
    student_name: {
      type: String,
    },
    student_email: {
      type: String,
    },
    section: {
      type: String,
    },
    subjects: {
      type: Array,
    },
    genre: {
      type: String,
    },
    dob: {
      type: Date,
    },
  },
  {
    collection: "students",
  }
);

module.exports = mongoose.model("Student", Student);
