const db = require('../db');

module.exports = {



//Get ID materia
    buscarPmat: (codigomateria) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM dataaula WHERE codigomateria = $1', [codigomateria], (error, results)=>{
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



    //Get Turma
    buscarPturma: (turma) => {
        return new Promise((aceito,rejeitado) => {
            db.query('SELECT * FROM dataaula WHERE turma = $1', [turma], (error, results)=>{
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



    //Get Dia
    buscarPdia: (dia) => {
        return new Promise((aceito,rejeitado) => {
            db.query('SELECT * FROM dataaula WHERE dia = $1', [dia], (error, results)=>{
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
    }




};