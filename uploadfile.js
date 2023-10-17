const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/upload', upload.single('file'), (req, res) => {
    
    res.send(`<h2>File waa so upload gareesay!</h2><img src="/${req.file.filename}" />`);
});

app.use(express.static('uploads'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});



