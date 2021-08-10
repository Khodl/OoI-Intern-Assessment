const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Login
const login = new Schema({
    datetime: Date,
    madeBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
});

const Login = mongoose.model("Login", login);

module.exports = Login;