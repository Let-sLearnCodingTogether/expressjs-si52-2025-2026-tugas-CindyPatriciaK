import express from "express";
import * as jurnalController from "../controllers/jurnalController.js";
import * as userController from "../controllers/userController.js";

const api = express.Router()

api.get("/jurnal", jurnalController.createJurnal)
api.post("/jurnal", jurnalController.createJurnal)
api.put("/jurnal/:id", jurnalController.updateJurnal)
api.delete("/jurnal/:id", jurnalController.deleteJurnal)
api.post("/jurnal/:id", jurnalController.listJurnal)

api.post ("/register", userController.register)
api.post ("/login", userController.login)

export default api