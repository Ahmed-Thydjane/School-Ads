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
const config = require('./mysqlConfig');
const mysql = require('mysql2');

// db est l'équivalent du PDO que vous aviez utilisé en PHP
const db = mysql.createConnection({
    host: config.mysqlHost, // nottez comment on utilise le config que l'on a requiré
    user: config.mysqlLogin,
    password: config.mysqlPassword,
    database: config.mysqlDatabase
});
db.connect((err) =>{
    if(err){
        throw err;
    }
    console.log('Mysql Connected...');
});

module.exports.db = db;

//
function sqlPromise(query,data,typequery, type){
    if(typequery === "SELECT"){
        if(type === "row"){
            return new Promise((resolve,reject) =>{
                db.query(query,data,(err,rows)=>{
                    if(err) {return reject(err);}
                    resolve(rows[0]);
                });
            });
        }else {
            return new Promise((resolve,reject) =>{
                db.query(query,data,(err,rows)=>{
                    if(err) {return reject(err);}
                    resolve(rows);
                });
            });
        }
    }else{
        return new Promise((resolve,reject) =>{
            db.query(query,data,(err,rows)=>{
                if(err) {return reject(err);}
            });
        });
    }
}

module.exports.sqlPromise = sqlPromise;
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

/*const getCours = require('./getCours');*/

/*app.post('/getCours',(req,res)=>{getCours.getcours(req,res);});*/

app.listen(port,()=>{console.log(`listening on port ${port}`)});
