const express = require('express');
const multer = require('multer');
require('dotenv').config();

const uploadRoutes = require('./routes/uploadRoutes');

const app = express();
const upload = multer({
    dest: 'upload/',
    fileFilter: (req, file, cb) => {
        const filetypes = /pdf|jpg|jpeg|png|xlsx|application\/vnd\.openxmlformats-officedocument\.spreadsheetml\.sheet/;

        const mimetype = filetypes.test(file.mimetype);

        if (mimetype) {
            cb(null, true);
        } else {
            cb(new Error('Only PDF, JPG, JPEG, PNG, and XLSX files are allowed!'), false);
        }
    }
});

app.get('/', (req, res) => {
    res.send('Welcome to the Invoice Processing API! Use POST /upload to upload PDF, Image, or XLSX files.');
});

app.use('/upload', upload.single('file'), uploadRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
