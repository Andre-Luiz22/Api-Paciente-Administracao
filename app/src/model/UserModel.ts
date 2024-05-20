import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nick: { type: mongoose.Schema.Types.String },
    email: { type: mongoose.Schema.Types.String },
    password: { type: mongoose.Schema.Types.String },
  },
  {
    versionKey: false,
  }
);

export const user = mongoose.model("User", UserSchema);