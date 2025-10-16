import mongoose from "mongoose";

const jurnalModel = new mongoose.Schema(
    {},
    {
        EntryDate : {
            type : Date,
            required : true, 
            trim : true 
        },
        Tittle : {
            type : String,
            required : true, 
            trim : true 
        },
        Content : {
            type : String,
            required : true, 
            trim : true 
        },
        User : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true, 
            trim : true 
        }

    },
    {
        timestamps : true
    }
)

const jurnalMode =  mongoose.model ("Jurnal", jurnalModel);
export default jurnalModel