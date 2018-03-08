const express=require('express');

const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/server/static/index.html'))
})

app.listen(8005, () => {
    console.log('Server is running on http://localhost:8005 or http://127.0.0.1:8005');
  });