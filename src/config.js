import {config} from 'dotenv';
config();

export default {
    mongodbURL: process.env.MONGODB_URI || "mongodb+srv://cool1:cool2@cluster0.4oycgkx.mongodb.net/dbAsocDCyTon",
};