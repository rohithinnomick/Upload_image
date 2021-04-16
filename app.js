const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => { 
    console.log('Started on port 3000');
});
const multer = require('multer');
const upload = multer({dest:'UploadedFiles/'}).single("test_image");
app.post("/image", (req, res) => {
    upload(req, res, (err) => {
     if(err) {
       res.status(400).send("Something went wrong!");
     }
     res.send(req.file);
   });
 });