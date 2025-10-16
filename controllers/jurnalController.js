import UserModel from "../model/userModel";
import jurnalSchema from "../model/jurnalModel";
import jurnalModel from "../model/jurnalModel";

export const createJurnal = async (req, res) => {
    try {
        const request = req.body

        const response = await jurnalModel.createJurnal({
            EntryDate: request.EntryDate,
            Tittle: request.Tittle,
            Content: request.Content,
            User: request.User
        })
        res.status(201).json({
            message: "Jurnal berhasil dibuat",
            data: response
        })
    } catch (error) {
        res.status(500).json({
            message: error,
            data: null

        })
    }
}