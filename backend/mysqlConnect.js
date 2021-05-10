const config = require('./mysqlConfig');
const mysql = require('mysql2');

// db est l'équivalent du PDO que vous aviez utilisé en PHP
const db = mysql.createConnection({
    host: config.mysqlHost, // notez comment on utilise le config que l'on a requiré
    user: config.mysqlLogin,
    password: config.mysqlPassword,
    database: config.mysqlDatabase
});
db.connect();
db.connect((err) =>{
    if(err){
        throw err;
    }
    console.log('Mysql Connected...');
});

module.exports.db = db;

module.exports = db;

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
