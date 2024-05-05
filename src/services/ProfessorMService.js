const db = require('../db');

module.exports = {


    //Get all
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM professormateria', (error, results) => {
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

//Get materia
buscarMat: (codigomateria) => {
        return new Promise((aceito,rejeitado) => {
            db.query('SELECT * FROM professormateria WHERE codigomateria = $1', [codigomateria], (error, results)=>{
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


//Get professor
buscarProf: (codigoprofessor) => {
    return new Promise((aceito,rejeitado) => {
        db.query('SELECT * FROM professormateria WHERE codigoprofessor = $1', [codigoprofessor], (error, results)=>{
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
    buscarUm: (id) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM professormateria WHERE id = $1', [id], (error, results)=>{
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