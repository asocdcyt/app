import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new Schema(
  {
    idcard: { 
      type: Number,
      default: 0,
      },
    email: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
    uuid: { 
      type: String,
      default: "",
    },
    phone: { 
      type: Number,
      default: 0,
    },
    ws: { 
      type: Number,
      default: 0,
    },
    name: {
        type: String,
        default: "",
    },
    lastname: {
        type: String,
        default: "",
    },
    address: {
        type: String,
        default: "",
    },
    city: {
        type: String,
        default: "",
    },
    country: {
        type: String,
        default: "",
    },
    postalcode: {
        type: Number,
        default: 0,
    },
    collegedegree: {
        type: String,
        default: "",
    },
    lastyear: {
        type: Number,
        default: 0,
    },
    promotion: {
      type: Number,
      default: 0,
  },
    description: {
      type: String,
      default: "",
  },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export default model("User", UserSchema);
