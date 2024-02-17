import mongoose from "mongoose";

/**
 * @openapi
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       properties:
 *         title: 
 *           type: string
 *           required: true
 *         references:
 *           type: array
 *           required: true
 *           items:
 *             type: object
 *         authors:
 *           type: array
 *           required: true
 *           items:
 *             type: string
 */
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
