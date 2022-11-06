import { Schema, model } from "mongoose";

const CurseSchema = new Schema(
  {
    fullname: {
      type: String,
      default: "",
    },
    email: { 
      type: String, 
      default: "" 
    },
    date: { type: Date, default: Date.now },
    ws: {
      type: Number,
      default: 0,
    },
    phone: {
      type: Number,
      default: 0,
    },
    idcard: {
      type: String,
      default: "",
    },
    curse: {
      type: String,
      default: "",
    },
    semana1: {
      type: Boolean,
      default: false,
    },
    semana2: {
      type: Boolean,
      default: false,
    },
    semana3: {
      type: Boolean,
      default: false,
    },
    semana4: {
      type: Boolean,
      default: false,
    },
    semana5: {
      type: Boolean,
      default: false,
    },
    semana6: {
      type: Boolean,
      default: false,
    },
    fulltime: {
      type: String,
      default: "",
    },
    bankref: {
      type: String,
      default: "",
    },
    amountref: {
      type: String,
      default: "",
    },
    reference: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "PENDIENTE",
    },

  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Curse", CurseSchema);
