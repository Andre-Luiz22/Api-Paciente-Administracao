import mongoose from "mongoose";

const ModuleSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: mongoose.Schema.Types.String },
    idCourse: { type: mongoose.Schema.Types.String }
  },
  {
    versionKey: false,
  }
);

export const module = mongoose.model("Module", ModuleSchema);