import mongoose from "mongoose";

export const PostSchema = new mongoose.Schema({
    //Schema fields
    authors: Array<mongoose.Schema.Types.ObjectId>,
    title: String,
    references: Array<mongoose.Schema.Types.ObjectId>
}, {
    versionKey: false,
    timestamps: { 
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    }
})

export const PostDAO = mongoose.model("Post", PostSchema, "Post")
