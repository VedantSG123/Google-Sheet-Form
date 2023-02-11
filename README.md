# Google-Sheet-Form
Post your form's data to one of your google sheet

Just get the google __spreadhseet id__ and give __editor access__ to `portfolio-vedantsg@portfolio-377006.iam.gserviceaccount.com`

After that send post request to the API `https://googlesheetform.vercel.app/add_row`

Example:
```
const form = document.getElementById('form');
var formdata = new FormData(form);
formdata.append("sheetId", "YOUR GOOGLE SHEET ID");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://googlesheetform.vercel.app/add_row", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

You can find the spreadsheet ID in a Google Sheets URL: `https://docs.google.com/spreadsheets/d/ spreadsheetId /edit#gid=0`.
