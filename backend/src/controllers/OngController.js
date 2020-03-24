const crypto = require('crypto'); //criptografia ID ONG
const connection = require('../database/connection'); //conexão com o db

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        /** CRIPTOGRAFIA, TRANFORMAR 4 BYTES EM HEXADECIMAL */
        const id = crypto.randomBytes(4).toString('HEX');
    
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