import mongoose from 'mongoose'

type ConnectionObject = {
    isConnected?:number
}

const connection : ConnectionObject = {}

async function dbConnect() : Promise<void> {
    if(connection.isConnected){
        console.log("Already connected to database");
        return 
    }
    try{
        const db = await mongoose.connect(process.env.MONGODB_URI || '' , {})
        connection.isConnected = db.connections[0].readyState
        console.log("Database connected")
    } catch (error) {
        console.log("Unable to connect to db " , error)
        process.exit()
    }
    
}

export default dbConnect