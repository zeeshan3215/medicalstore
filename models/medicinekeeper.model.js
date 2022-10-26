const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const User = new Schema({
    id: {
        type: Number,
        unique: true,
        sparse:true
    },
     name: {
        type: String
    },
     email: {
        type: String,
        unique: true,
        require:true

    },
     password: {
        type: String,
        require:true
    },
    role: {
        type: String
    },
    department: {
        type: String
    },
    designation: {
        type: String
    },
    avatar: {
        type: String
    },
    avatar_ext: {
        type: String
    },
  
    is_deleted: {
        type: Number,
        default: 0
    }
});

User.plugin(mongoosePaginate);

User.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.password;
    return obj;
   }
// User.index({'$**': 'text'});

module.exports = mongoose.model("medicinekeeper", User);


