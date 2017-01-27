exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('folders', (table) => {
      table.string('id').primary()
      table.string('name')

      table.timestamps()
    }),

    knex.schema.createTable('urls', (table) => {
      table.string('id').primary()
      table.string('long_url')
      table.string('short_url')
      table.string('popularity')
      table.string('folder_id')
           .references('id')
           .inTable('folders')

      table.timestamps()
    })
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('folders'),
      knex.schema.dropTable('urls')
  ])
}
