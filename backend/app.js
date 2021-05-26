// on crée le serveur web sur le port 3000
const express = require('express');
const app = express();
// permet d'éviter le problème de CORS que l'on avait déjà vu
const cors = require('cors');
//app.use(cors({origin:'http://localhost:4200',credential: true}));
app.use(cors({origin:'http://127.0.0.1:4200',credentials: true}));
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const port = process.env.PORT || 3000;

// body-parser permet de récupérer facilement les données passées en POST:
// l'équivalent de $_POST['toto'] est alors req.body.post. Comme, à terme,
// votre application Angular enverra ses données au format JSON, on demande
// au body parser de parser uniquement ce format.
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// ici, on met en place les routes qui seront servies par le serveur web :
// chaque route correspond à un fichier que l'on charge via un require. Ce
// fichier exporte juste une fonction, que l'on appelle quand l'utilisateur
// demande à accéder à la route.
const getListeUsers = require ('./getListeUsers');
const checkLogin = require ('./checkLogin');
const getAllAnnonce = require('./getAllAnnonce');
const getAnnonceUser = require('./getAnnonceUser');

app.post ('/getListeUsers', (req, res) => { getListeUsers.getlisteusers(req,res); });
app.post('/checkLogin', (req, res) => {checkLogin.checklogin(req,res);});
app.post('/getAllAnnonce',(req,res) => {getAllAnnonce.getallannonce(req,res);});
app.post('/getAnnonceUser',(req,res) => {getAnnonceUser.getannonceuser(req,res);});

app.listen(port, () => {console.log (`listening on port ${port}`)});
