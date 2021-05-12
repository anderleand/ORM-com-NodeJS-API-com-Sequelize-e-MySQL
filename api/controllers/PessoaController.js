const database = require('../models'); //Não há a necessidade de colocar o 'index.js' pq por padrão o JavaScript já procura um 'index.js' em models.

class PessoaController {
    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await database.Pessoas.findAll();

            return res.status(200).json(todasAsPessoas);
        } catch (error) {

            return res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController;