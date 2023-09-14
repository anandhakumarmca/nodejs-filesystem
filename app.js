const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 4000;

// Create a folder if it doesn't exist
const folderPath = path.join(__dirname, "files");
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

// Endpoint to create a text file with the current timestamp
app.post("/createFile", (req, res) => {
  const currentTime = new Date();
  const year = currentTime.getFullYear().toString();
  const month = (currentTime.getMonth() + 1).toString();
  const date = currentTime.getDate().toString();
  const hrs = currentTime.getHours().toString();
  const mins = currentTime.getMinutes().toString();
  const secs = currentTime.getSeconds().toString();

  const dateTime = `${year}-${month}-${date}-${hrs}-${mins}-${secs}.txt`;
  const filePath = path.join(folderPath, dateTime);

  fs.writeFile(filePath, dateTime, (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Error creating the file." });
    } else {
      console.log(`File created: ${filePath}`);
      res.status(201).json({ message: "File created successfully.",filePath });
    }
  });
});

// Endpoint to retrieve all text files in the folder
app.get("/listFiles", (req, res) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Error listing files." });
    } else {
      const textFiles = files.filter((file) => path.extname(file) === ".txt");
      res.status(200).json({ files: textFiles });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
