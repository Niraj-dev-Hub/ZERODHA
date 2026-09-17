const {model} = require('mongoose');

const {UserSchema} =require('../schema/UserSchema');

const UserModel = model('User', UserSchema);

module.exports = {UserModel};