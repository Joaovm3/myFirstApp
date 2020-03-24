
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        /* Primary Key */
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

       /* Relationamento */
        table.string('ong_id').notNullable();

        /* Relationamento logo abaixo, tipo um foreign key do mysql */
        table.foreign('ong_id').references('id').inTable('ongs');
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
