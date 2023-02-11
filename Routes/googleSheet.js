import express from 'express'
import multer from 'multer'
import createError from 'http-errors'
import Sheets from './Utils/Sheets.js'

const router = express.Router()
const upload = multer()


router.post("/", upload.none(), async (req, res, next) => 
{
    const values = [
        [req.body.name, req.body.email, req.body.subject, req.body.message]
    ]
    try {
        const sheets = new Sheets()
        const auth = await sheets.googleAuth()
        const response = await sheets.writeRow({
            spreadsheetId:req.body.sheetId,
            auth:auth,
            sheetName:'Sheet1',
            values:values
        })
        res.send(response)
    }
    catch(err){
        console.log(err)
        next(err.response)
    }
})
export { router }
