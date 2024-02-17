import mongoose from "mongoose";

/**
 * @openapi
 * components:
 *   schemas:
 *     Author:
 *       type: object
 *       properties:
 *         name: 
 *           type: string
 *           required: true
 */
export const AuthorSchema = new mongoose.Schema({
    // Schema fields
    name: String
    
}, {
    // Schema config
    versionKey: false,
    timestamps: { 
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
    }
})

export const AuthorDAO = mongoose.model("Author", AuthorSchema, "Author")
