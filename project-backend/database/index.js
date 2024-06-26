const mongoose = require("mongoose");

mongoose.connect("mongodb://admin:admin@127.0.0.1:27017/project")
    .then(() => console.log("Connected to MongoDB"))
    .catch(e =>console.log(e));