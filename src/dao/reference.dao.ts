import mongoose from "mongoose";

export const ReferenceSchema = new mongoose.Schema({
    // Schema fields
    type: String,
    title: String,
    authors: Array<String>
}, {
    // Schema config
    versionKey: false,
    timestamps: { 
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    }
})

export const ReferenceDAO = mongoose.model("Reference", ReferenceSchema, "Reference")
