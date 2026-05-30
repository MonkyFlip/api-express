import mongoose from "mongoose";

const connectMongo = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: process.env.DB_NAME || 'api_express',
        });
        console.log('Conexion exitosa');
    } catch(error){
        console.error('Error al conectar a Mongo: ', error)
        process.exit(1);
    }
};