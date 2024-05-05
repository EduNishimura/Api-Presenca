const ProfessorService = require('../services/ProfessorService');

module.exports = {
    //get geral
    buscarTodos: async(req, res)=> {
        
        let json = {error:'', result:[]};

        let professores = await ProfessorService.buscarTodos();

        for(let professor of professores) {
            if (professor.codigo !== null && professor.nome !== null) {
                json.result.push({
                    codigo: professor.codigo,
                    nome: professor.nome
                });
            }
        }

        res.json(json);
    },

     //get por nome
    buscarPnome: async(req,res) => {
        let json = {error:'', result:{}};
        
        let nome = req.params.nome;
        let professor = await ProfessorService.buscarPnome(nome);

        if(professor){
            json.result = professor;
        }

        res.json(json);

    },

    //get por id
    buscarUm: async(req,res) => {
        let json = {error:'', result:{}};
        
        let codigo = req.params.codigo;
        let professor = await ProfessorService.buscarUm(codigo);

        if(professor){
            json.result = professor;
        }

        res.json(json);

    },

    
}
