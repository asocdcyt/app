import { Schema, model } from "mongoose";

const RequestSchema = new Schema(
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
    typeparticipant: {
      type: String,
      default: "",
    },
    ponencia1: {
      type: Boolean,
      default: false,
    },
    ponencia2: {
      type: Boolean,
      default: false,
    },
    ponencia3: {
      type: Boolean,
      default: false,
    },
    ponencia4: {
      type: Boolean,
      default: false,
    },
    ponencia5: {
      type: Boolean,
      default: false,
    },
    ponencia6: {
      type: Boolean,
      default: false,
    },
    ponencia7: {
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

export default model("Request", RequestSchema);
