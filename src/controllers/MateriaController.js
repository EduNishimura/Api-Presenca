const MateriaService = require('../services/MateriaService');

module.exports = {
    //get geral
    buscarTodos: async(req, res)=> {
        
        let json = {error:'', result:[]};

        let materias = await MateriaService.buscarTodos();

        for(let materia of materias) {
            if (materia.codigo !== null && materia.nome !== null) {
                json.result.push({
                    codigo: materia.codigo,
                    nome: materia.nome
                });
            }
        }

        res.json(json);
    },

     //get por nome
    buscarPnome: async(req,res) => {
        let json = {error:'', result:{}};
        
        let nome = req.params.nome;
        let materia = await MateriaService.buscarPnome(nome);

        if(materia){
            json.result = materia;
        }

        res.json(json);

    },

    //get por id
    buscarUm: async(req,res) => {
        let json = {error:'', result:{}};
        
        let codigo = req.params.codigo;
        let materia = await MateriaService.buscarUm(codigo);

        if(materia){
            json.result = materia;
        }

        res.json(json);

    },

    
}
