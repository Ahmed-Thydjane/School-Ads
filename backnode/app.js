const express = require ('express');
const app = express ();
const port = process.env.PORT || 3000;

const bodyParser = require ('body-parser');
app.use(bodyParser.json());

const cors = require ('cors');
app.use(cors({origin: 'http://localhost:4200', credentials: true}));

const sendEmail = require ('./sendEmail');

app.post ('/sendEmail', (req, res) => { sendEmail(); });


app.listen(port, () => {console.log (`listening on port ${port}`)});


