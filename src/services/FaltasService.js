const db = require('../db');

module.exports = {


    //Get all
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM faltas', (error, results) => {
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
buscarAluno: (codigoaluno) => {
    return new Promise((aceito,rejeitado) => {
        db.query('SELECT * FROM faltas WHERE codigoaluno = $1', [codigoaluno], (error, results)=>{
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


//Get materia
buscarMat: (codigomateria) => {
        return new Promise((aceito,rejeitado) => {
            db.query('SELECT * FROM faltas WHERE codigomateria = $1', [codigomateria], (error, results)=>{
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
        db.query('SELECT * FROM faltas WHERE codigoprofessor = $1', [codigoprofessor], (error, results)=>{
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

            db.query('SELECT * FROM faltas WHERE codigo = $1', [codigo], (error, results)=>{
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

//Get data
buscarData: (data) => {
    return new Promise((aceito, rejeitado)=>{

        db.query('SELECT * FROM faltas WHERE data = $1', [data], (error, results)=>{
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


inserirF: (data, codigoaluno, codigomateria, codigoprofessor)=> {
    return new Promise((aceito, rejeitado)=> {

        db.query('INSERT INTO faltas (data, codigoaluno, codigomateria, codigoprofessor) VALUES ($1, $2, $3, $4)',
            [data, codigoaluno, codigomateria, codigoprofessor],
            (error, results)=>{
                if(error){ rejeitado(error); return; }
                console.log(`Dados enviados: ${JSON.stringify({data, codigoaluno, codigomateria, codigoprofessor})}`);
                aceito(results.codigo); 
            }
        );
    });
},


};