const { Collection } = require("mongoose");
var db = require("./db");

const stuSchema = new db.mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    mark: {
      type: Number,
      required: true,
    },
  },
  { collection: "student" }
);

let stuModel = db.mongoose.model("stuModel", stuSchema);

module.exports = { stuModel };
