import mongoose from "mongoose";

const LessonSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    idUnit : {type: mongoose.Schema.Types.String},
    texts: { type: mongoose.Schema.Types.Array },
    imgs: { type: mongoose.Schema.Types.Array },
    video: { type: mongoose.Schema.Types.String },
    extra: { type: mongoose.Schema.Types.Array }
  },
  {
    versionKey: false,
  }
);

export const user = mongoose.model("Lesson", LessonSchema);