const db = require('../db');

module.exports = {


    //Get all
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM alunos', (error, results) => {
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
            db.query('SELECT * FROM alunos WHERE nome = $1', [nome], (error, results)=>{
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

            db.query('SELECT * FROM alunos WHERE codigo = $1', [codigo], (error, results)=>{
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
    buscarT: (turma) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM alunos WHERE turma = $1', [turma], (error, results)=>{
                if(error) { rejeitado(error); return; }
                if(results.length > 0){ 
                    aceito(results[0]);
                }else {
                    console.log("Resultados da consulta:", results.rows);
                    console.log("Resultados da consulta:", turma);
                    aceito(results.rows);
                }
            });
        });
        
    },

    alteraT:(codigo, nmrfaltas)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('UPDATE alunos SET nmrfaltas = $1 WHERE codigo = $2',
                [nmrfaltas, codigo],
                (error, results) => {
                    if(error){ rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },







};