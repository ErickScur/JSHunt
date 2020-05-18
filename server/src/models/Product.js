const mongoose = require('mongoose');
const moongosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        require: true
    },
    description:{
        type:String,
        required:true
    },
    url:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});
ProductSchema.plugin(moongosePaginate);
mongoose.model('Product', ProductSchema);