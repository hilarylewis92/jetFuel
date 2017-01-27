const md5 = require('md5')

exports.seed = function(knex, Promise) {
  return knex('folders').del()
  .then(() => {
    return Promise.all([
      knex('folders').insert({
        id: md5('folder1'),
        name: 'Music',
        created_at: new Date
      }),
      knex('folders').insert({
        id: md5('folder2'),
        name: 'Dancing',
        created_at: new Date
      })
    ])
  })
}
