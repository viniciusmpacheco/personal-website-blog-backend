import mongoose from "mongoose";

mongoose.connect('mongodb://dbuser:password@localhost:27017/personal-website-blog-db')

export const databaseConfig: any = ""