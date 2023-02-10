import express from 'express'
import createError from 'http-errors'
import cors from 'cors'
import * as dotenv from 'dotenv' 
dotenv.config()

const app = express()
app.use(cors())


const PORT = 5000

//Routes
import * as sheets from './Routes/googleSheet.js'
app.use('/add_row', sheets.router)

//If invalid Route is selected
app.use((req ,res, next) => 
{
    next(createError(404, 'Not Found'))
})


//Error handler
app.use((err, req, res , next) => 
{
    res.status(err.status || 500)
    res.send({
        error:{
            status:err.status || 500,
            message:err.message
        }
    })
})


app.listen(PORT, () => 
{
    console.log("server started at port 5000")
})  