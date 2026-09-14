const {model} = require('mongoose');

const {PositionSchema} =require('../schema/PositionSchema');

const PositionModel = model('Position',PositionSchema);

module.exports = {PositionModel};