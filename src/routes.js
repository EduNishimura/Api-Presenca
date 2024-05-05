const express = require('express');
const router = express.Router();

const AlunoController = require('./controllers/AlunoController');
const MateriaController = require('./controllers/MateriaController');
const ProfessorController = require('./controllers/ProfessorController');
const ProfessorMController = require('./controllers/ProfessorMController');
const FaltasController = require('./controllers/FaltasController');
const DiaController = require('./controllers/DiaController');


//--------------------------------Rotas aluno--------------------------------------------
//Get geral
router.get('/alunos', AlunoController.buscarTodos);
//Get por nome
router.get('/alunoN/:nome', AlunoController.buscarPnome);
//Get por id
router.get('/aluno/:codigo', AlunoController.buscarUm);
//Get por turma
router.get('/alunosT/:turma', AlunoController.buscarT);
//update
router.put('/alunos/:codigo', AlunoController.alteraT);

//--------------------------------Rotas Materia--------------------------------------------

//Get geral
router.get('/materias', MateriaController.buscarTodos);
//Get por nome
router.get('/materiaN/:nome', MateriaController.buscarPnome);
//Get por id
router.get('/materia/:codigo', MateriaController.buscarUm);

//--------------------------------Rotas Professor--------------------------------------------

//Get geral
router.get('/professores', ProfessorController.buscarTodos);
//Get por nome
router.get('/professorN/:nome', ProfessorController.buscarPnome);
//Get por id
router.get('/professor/:codigo', ProfessorController.buscarUm);

//--------------------------------Rotas ProfessorMateria--------------------------------------------

//Get geral
router.get('/professoresM', ProfessorMController.buscarTodos);
//Get por codigo Materia
router.get('/professorMM/:codigomateria', ProfessorMController.buscarMat);
//Get por codigo professor
router.get('/professorMP/:codigoprofessor', ProfessorMController.buscarProf);
//Get por id
router.get('/professorM/:id', ProfessorMController.buscarUm);


//--------------------------------Rotas Faltas--------------------------------------------

//Get geral
router.get('/faltas', FaltasController.buscarTodos);
//Get por codigo Materia
router.get('/faltaM/:codigomateria', FaltasController.buscarMat);
//Get por codigo Aluno
router.get('/faltaA/:codigoaluno', FaltasController.buscarAluno);
//Get por codigo professor
router.get('/faltaP/:codigoprofessor', FaltasController.buscarProf);
//Get por id
router.get('/falta/:codigo', FaltasController.buscarUm);
//Get por data
router.get('/faltaD/:data', FaltasController.buscarData);
//INSERT
router.post('/Ifalta', FaltasController.inserirF);


//--------------------------------Rotas dia--------------------------------------------
//Get materia
router.get('/dayM/:codigomateria', DiaController.buscarPmat);
//Get por turma
router.get('/dayT/:turma', DiaController.buscarPturma);
//Get por dia
router.get('/dayD/:dia', DiaController.buscarPdia);


module.exports = router;