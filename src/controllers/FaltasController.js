const FaltasService = require('../services/FaltasService');

module.exports = {
    //get geral
    buscarTodos: async(req, res)=> {
        
        let json = {error:'', result:[]};

        let faltas = await FaltasService.buscarTodos();

        for(let falta of faltas) {
            if (falta.codigo !== null && falta.data !== null && falta.codigoaluno !== null  && falta.codigoprofessor !== null && falta.codigomateria !== null) {
                json.result.push({
                    codigo: falta.codigo,
                    data: falta.data,
                    codigoaluno: falta.codigoaluno,
                    codigoprofessor: falta.codigoprofessor,
                    codigomateria: falta.codigomateria
                });
            }
        }

        res.json(json);
    },


    //get por id
    buscarUm: async(req,res) => {
        let json = {error:'', result:{}};
        
        let codigo = req.params.codigo;
        let falta = await FaltasService.buscarUm(codigo);

        if(falta){
            json.result = falta;
        }

        res.json(json);

    },

    //get por data
    buscarData: async(req,res) => {
        let json = {error:'', result:{}};
        
        let data = req.params.data;
        let falta = await FaltasService.buscarData(data);

        if(falta){
            json.result = falta;
        }

        res.json(json);

    },

    

    //get por id aluno
    buscarAluno: async(req,res) => {
        let json = {error:'', result:{}};
        
        let codigoaluno = req.params.codigoaluno;
        let falta = await FaltasService.buscarAluno(codigoaluno);

        if(falta){
            json.result = falta;
        }

        res.json(json);

    },

    //get por id professor
    buscarProf: async(req,res) => {
        let json = {error:'', result:{}};
        
        let codigoprofessor = req.params.codigoprofessor;
        let falta = await FaltasService.buscarProf(codigoprofessor);

        if(falta){
            json.result = falta;
        }

        res.json(json);

    },


    //get por id materia
    buscarMat: async(req,res) => {
        let json = {error:'', result:{}};
        
        let codigomateria = req.params.codigomateria;
        let falta = await FaltasService.buscarMat(codigomateria);

        if(falta){
            json.result = falta;
        }

        res.json(json);

    },


    //post 
 inserirF: async(req, res) => {
        let json = {error:'', result:{}};
        let data = req.body.data;
        let codigoaluno = req.body.codigoaluno;
        let codigomateria = req.body.codigomateria;
        let codigoprofessor = req.body.codigoprofessor;

        if ( data && codigoaluno && codigomateria && codigoprofessor ){
            let faltaCod = await FaltasService.inserirF(data, codigoaluno, codigomateria, codigoprofessor);
            json.result = {
                codigo: faltaCod ,
                data,
                codigoaluno,
                codigomateria,
                codigoprofessor
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
 


}