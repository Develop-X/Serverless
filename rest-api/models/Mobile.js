const mongoose = require("mongoose");
const MobileSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    note: String
});
module.exports = mongoose.model("Mobile", MobileSchema);
