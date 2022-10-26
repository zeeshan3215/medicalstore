const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const Medicine= new Schema({
     name: {
        type: String,
        require:true
    },
     deskno: {
        type: Number,
        require:true
    },
     quantity: {
        type: Number,
        require:true
    },
    image_url: {
        type: String
    },
    is_deleted: {
        type: Boolean,
        default: false
    }
});

Medicine.plugin(mongoosePaginate);

module.exports = mongoose.model("medicine", Medicine);