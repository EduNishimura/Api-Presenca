const db = require('../db');

module.exports = {


    //Get all
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM materias', (error, results) => {
                if (error) {
                    console.error("Erro ao executar a consulta SQL:", error);
                    rejeitado(error);
                    return;
                }
                console.log("Resultados da consulta:", results.rows);
                aceito(results.rows);
            });
        });
    },

//Get Nome
    buscarPnome: (nome) => {
        return new Promise((aceito,rejeitado) => {
            db.query('SELECT * FROM materias WHERE nome = $1', [nome], (error, results)=>{
                if(error) { 
                    rejeitado(error); 
                    return; 
                }
                if(results.length > 0){
                    aceito(results[0]); // Retorna o primeiro resultado encontrado
                } else {
                    console.log(results.rows);
                    aceito(results.rows);
                }
            });
        });
    },

//Get ID
    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM materias WHERE codigo = $1', [codigo], (error, results)=>{
                if(error) { rejeitado(error); return; }
                if(results.length > 0){ 
                    aceito(results[0]);
                }else {
                    console.log("Resultados da consulta:", results.rows);
                    aceito(results.rows);
                }
            });
        });
    },


};