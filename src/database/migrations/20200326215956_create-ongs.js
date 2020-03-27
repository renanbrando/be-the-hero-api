
// npx knex migrate:make create-ongs
// npx knex migrate:latest
exports.up = (knex) => {
  return knex.schema.createTable('ongs', (table) => {
    table.string('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('whatsapp').notNullable()
    table.string('city').notNullable()
    table.string('uf', 2).notNullable()
  })
}

// npx knex migrate:rollback
exports.down = (knex) => {
  return knex.schema.dropTable('ongs')
}
