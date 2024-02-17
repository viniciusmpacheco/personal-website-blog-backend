import mongoose from "mongoose";

/**
 * @openapi
 * components:
 *   schemas:
 *     Reference:
 *       type: object
 *       properties:
 *         type: 
 *           type: string
 *           required: true
 *         title:
 *           type: string
 *           required: true
 *         authors:
 *           type: array
 *           required: true
 *           items:
 *             type: string
 */
export const ReferenceSchema = new mongoose.Schema(
  {
    // Schema fields
    type: String,
    title: String,
    authors: Array<String>,
  },
  {
    // Schema config
    versionKey: false,
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export const ReferenceDAO = mongoose.model(
  "Reference",
  ReferenceSchema,
  "Reference"
);
