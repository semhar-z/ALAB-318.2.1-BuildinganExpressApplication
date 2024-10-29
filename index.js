const express = require("express");
const app = express();
const port = 3000;



app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`);
});

app.get('/', (req, res) => {
    res.render('index');
  });
  
  app.get('/form', (req, res) => {
    res.render('form');
  });
  
  app.post('/submit', (req, res) => {
    console.log(req.body.message); // Logs message to the console
    res.send('Message received!');
  });
  
  app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`);
  });
  

// app.get("/", (req, res) => {
//     res.send("Hello Express!");
// });

// app.get("/express", (req, res) => {
//     res.send("Creating routes with Express is simple!");
// });

// app.get("/user", (req, res) => {
//     res.send("Received a GET request for user!");
//   });
  
//   app.post("/user", (req, res) => {
//     res.send("Received a POST request for user!");
//   });

  