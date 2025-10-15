import mongoose from "mongoose";

const database = async () => {
    try {
        console.log("Melakukan koneksi ke MongoDB");

        const response = await mongoose.connect ("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.8");

        console.log (`Koneksi berhasil : ${response.host}`);
    }catch (error){
        console.error ("Gagal terkoneksi");
        process.exit(1)
    }

}
export default database 