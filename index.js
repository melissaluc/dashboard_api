import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import helmet from 'helmet'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'

// config
dotenv.config();

const app = express()

app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

// Routes
// app.use('/client', clientRoutes)
// app.use('/general', generalRoutes)
// app.use('/management', generalRoutes)
// app.use('/sales', salesRoutes)


// Mongoose Setup
const PORT = process.env.PORT || 9000;
mongoose.connect( process.env.URL,{
    useNewURLParser: true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(PORT, ()=> console.log(`Server Port: ${PORT}`))
}).catch((error)=>{console.log(`${error} did not connect`)})