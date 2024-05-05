const AlunoService = require('../services/AlunoService');

module.exports = {
    //get geral
    buscarTodos: async(req, res)=> {
        
        let json = {error:'', result:[]};

        let alunos = await AlunoService.buscarTodos();

        for(let aluno of alunos) {
            if (aluno.codigo !== null && aluno.nome !== null && aluno.turma !== null && aluno.nmrfaltas !== null) {
                json.result.push({
                    codigo: aluno.codigo,
                    nome: aluno.nome,
                    turma: aluno.turma,
                    nmrfaltas: aluno.nmrfaltas,
                });
            }
        }

        // Enviar o objeto JSON como resposta à solicitação
        res.json(json);
    },

     //get por nome
    buscarPnome: async(req,res) => {
        let json = {error:'', result:{}};
        
        let nome = req.params.nome;
        let aluno = await AlunoService.buscarPnome(nome);

        if(aluno){
            json.result = aluno;
        }

        res.json(json);

    },

    //get por id
    buscarUm: async(req,res) => {
        let json = {error:'', result:{}};
        
        let codigo = req.params.codigo;
        let aluno = await AlunoService.buscarUm(codigo);

        if(aluno){
            json.result = aluno;
        }

        res.json(json);

    },

    //get por turma
    buscarT: async(req,res) => {
        let json = {error:'', result:[]};
        
        let turma = req.params.turma;
        let alunos = await AlunoService.buscarT(turma);

        if(alunos){
            json.result = alunos;
        }

        res.json(json);

    },
//put
    alteraT: async(req,res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let nmrfaltas = req.body.nmrfaltas;

        if(codigo && nmrfaltas){
            await AlunoService.alteraT(codigo,nmrfaltas);
            json.result = {
                codigo,
                nmrfaltas
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    }
}