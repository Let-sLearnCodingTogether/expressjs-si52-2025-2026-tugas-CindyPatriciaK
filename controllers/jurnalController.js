import jurnalModel from "../model/jurnalModel.js";

export const createJurnal = async (req, res) => {
    try {
        const request = req.body

        const response = await jurnalModel.create({
            EntryDate: request.EntryDate,
            Title: request.Title,
            Content: request.Content
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
export const listJurnal = async (req, res) => {
    try {
        const data = await jurnalModel.find({})

        res.status(201).json({
            message: "List Jurnal",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: error,
            data: null

        })
    }
}
export const updateJurnal = async (req, res) => {
    try {
        const id = req.params?.id
        const request = req.body
        if (!id) {
            return res.status(500).json({
                message: "Id wajib di isi",
                data: null
            })
        }
        const response = await jurnalModel.findByIdAndUpdate(id, {
            EntryDate: request.EntryDate,
            Title: request.Title,
            Content: request.Content
        })

        if (!response) {
            return res.status(500).json({
                message: "Jurnal gagal di update",
                data: null
            })
        }
        return res.status(200).json({
            message: "Jurnal berhasil di update",
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: error,
            data: null
        })
    }

}
export const deleteJurnal = async (req, res) => {
    try {
        const id = req.params.id

        if (!id) {
            return res.status(500).json({
                message: "Id wajib di isi",
                data: null
            })
        }
        const response = await jurnalModel.findByIdAndDelete(id)

        if (response) {
            return res.status(200).json({
                message: "Jurnal berhasil dihapus",
                data: null
            })
        }
        return res.status(404).json({
            message: "Jurnal tidak ditemukan",
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: error,
            data: null
        })
    }
}