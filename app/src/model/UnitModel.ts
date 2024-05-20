import mongoose from "mongoose";

const UnitSchema = new  mongoose.Schema (
    {
        id : {type : mongoose.Schema.Types.ObjectId},
        name : { type: mongoose.Schema.Types.String},
        idModule: {type: mongoose.Schema.Types.String}
    },
    {
        versionKey : false
    }
)

export const unit = mongoose.model("Unit", UnitSchema);