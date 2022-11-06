import { Schema, model } from "mongoose";

const GraduatesSchema = new Schema(
  {
    date: { type: Date, default: Date.now },
    idcard: { 
    type: String,
    default: "",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Graduates", GraduatesSchema);
