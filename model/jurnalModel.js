import mongoose from "mongoose";

const jurnalModel = new mongoose.Schema(
    {},
    {
        entryDate : {
            type : Date,
            required : true
        },
        tittle : {
            type : String,
            required : true
        },
        content : {
            type : String,
            required : true
        },
        User : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true
        }

    },
    {
        timestamps : true
    }
)

const jurnalMode =  mongoose.model ("Jurnal", jurnalModel);
export default jurnalModel