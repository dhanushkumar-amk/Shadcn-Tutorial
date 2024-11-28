import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.get("/", (req, res) => {
    res.send("Avengers Assemble");
});

app.get("/video", (req, res) => {
    const filePath = join(__dirname, 'public', 'Google-Docs.mp4');
    res.sendFile(filePath);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
