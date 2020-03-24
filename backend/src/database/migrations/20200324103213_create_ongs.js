
/* Método UP é resposável pela CRIAÇÃO DA TABELA */
exports.up = function(knex) {
 return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

/* Método DOWN: se der algum problema e vc precisar VOLTAR para o PASSADO, para trás ---- basicamente ele cria um DROP TABLE */
exports.down = function(knex) {
 return knex.schema.dropTable('ongs');
};
