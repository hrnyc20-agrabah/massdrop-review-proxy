
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3008;

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
})


app.listen(port, () => {
  // console.log(`server running at: http://ec2-3-83-204-17.us-east-2.compute.amazonaws.com:${port}`);
  console.log(`server running at: ${port}`);
});
