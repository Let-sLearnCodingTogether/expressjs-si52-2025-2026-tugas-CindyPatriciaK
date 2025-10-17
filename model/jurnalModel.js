import mongoose from "mongoose";

const jurnalSchema= new mongoose.Schema(
    {
        EntryDate : {
            type : Date,
            required : true, 
            trim : true 
        },
        Title : {
            type : String,
            required : true, 
            trim : true 
        },
        Content : {
            type : String,
            required : true, 
            trim : true 
        },
        
        timestamps : true
    }
)

const jurnalModel =  mongoose.model ("Jurnal", jurnalSchema);
export default jurnalModel