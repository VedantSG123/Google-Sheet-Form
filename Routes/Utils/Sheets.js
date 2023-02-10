import { google } from "googleapis"

export default class Sheets
{
    constructor()
    {
        this.SCOPE = ['https://www.googleapis.com/auth/spreadsheets']
        this.sheets = google.sheets('v4')
        this.apikey = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS)
    }
    
    async googleAuth()
    {
        this.auth = new google.auth.GoogleAuth({
            credentials: this.apikey,
            scopes: this.SCOPE
        })
        this.token = await this.auth.getClient()
        return this.token
    }

    async writeRow({spreadsheetId, auth, sheetName, values})
    {
        try{
            this.writeRowResult = this.sheets.spreadsheets.values.append({
                auth,
                spreadsheetId,
                range:sheetName,
                valueInputOption:'RAW',
                resource:{
                    values:values
                }
            })
            return this.writeRowResult
        }
        catch(err)
        {
            throw err
        }
    }
}