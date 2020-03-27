const generateUniqueId = require('../utils/generaetUniqueId');
const connection = require('../database/connection'); //conexão com o db

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        /** CRIPTOGRAFIA, TRANFORMAR 4 BYTES EM HEXADECIMAL */
        const id = generateUniqueId();
    
        await connection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf,
            })
    
        return response.json({ id });
        
    }
};