const DiaService = require('../services/DiaService');

module.exports = {


    //get por id materia
    buscarPmat: async (req, res) => {
        let json = { error: '', result: {} };

        let codigomateria = req.params.codigomateria;
        let obj = await DiaService.buscarPmat(codigomateria);

        if (obj) {
            json.result = obj;
        }

        res.json(json);

    },

    //get por turma
    buscarPturma: async (req, res) => {
        let json = { error: '', result: {} };

        let turma = req.params.turma;
        let obj = await DiaService.buscarPturma(turma);

        if (obj) {
            json.result = obj;
        }

        res.json(json);

    },

    //get por dia
    buscarPdia: async (req, res) => {
        let json = { error: '', result: [] };

        let dia = req.params.dia;
        let obj = await DiaService.buscarPdia(dia);

        if (obj) {
            json.result = obj;
        }

        res.json(json);

    }

}