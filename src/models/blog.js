import { Schema, model } from "mongoose"

const blogSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String
    }
},
{
   timestamps: true 
});


export const Blog = new model("Blog", blogSchema);