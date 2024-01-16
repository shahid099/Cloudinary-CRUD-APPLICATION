import mongoose from "mongoose";
const postDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    imageurl: {
        type: String,
        required: true,
    },
});

const postData = mongoose.model('postData', postDataSchema);

export default postData;