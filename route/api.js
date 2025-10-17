import express from "express";
import * as jurnalController from "../controllers/jurnalController.js";

const api = express.Router()

api.get("/jurnal", jurnalController.createJurnal)
api.post("/jurnal", jurnalController.createJurnal)
api.put("/jurnal/:id", jurnalController.updateJurnal)
api.delete("/jurnal/:id", jurnalController.deleteJurnal)

export default api