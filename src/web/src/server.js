const express = require('express');
const app = express();
const port = 3000; // Replace with your desired port number

app.get('/', (req, res) => {
  res.send('Hello, world!'); // Replace with your desired response
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
