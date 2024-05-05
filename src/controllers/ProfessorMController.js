const ProfessorMService = require('../services/ProfessorMService');

module.exports = {
    //get geral
    buscarTodos: async(req, res)=> {
        
        let json = {error:'', result:[]};

        let profms = await ProfessorMService.buscarTodos();

        for(let profm of profms) {
            if (profm.id !== null && profm.codigoprofessor !== null && profm.codigomateria !== null) {
                json.result.push({
                    id: profm.id,
                    codigoprofessor: profm.codigoprofessor,
                    codigomateria: profm.codigomateria
                });
            }
        }

        res.json(json);
    },


    //get por id
    buscarUm: async(req,res) => {
        let json = {error:'', result:{}};
        
        let id = req.params.id;
        let profm = await ProfessorMService.buscarUm(id);

        if(profm){
            json.result = profm;
        }

        res.json(json);

    },

    //get por id professor
    buscarProf: async(req,res) => {
        let json = {error:'', result:{}};
        
        let codigoprofessor = req.params.codigoprofessor;
        let profm = await ProfessorMService.buscarProf(codigoprofessor);

        if(profm){
            json.result = profm;
        }

        res.json(json);

    },


    //get por id materia
    buscarMat: async(req,res) => {
        let json = {error:'', result:{}};
        
        let codigomateria = req.params.codigomateria;
        let profm = await ProfessorMService.buscarMat(codigomateria);

        if(profm){
            json.result = profm;
        }

        res.json(json);

    },

    
}
