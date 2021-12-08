mongoose = require("mongoose");

const Address = new mongoose.Schema({
    street:{type:String},
    streetnumber:{type:Number},
    homenumber:{type:Number}
});

const TeacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: Address,
  email: {type: String, required:true}
});

module.exports = mongoose.model('Teacher',TeacherSchema);