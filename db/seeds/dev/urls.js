const md5 = require('md5')

exports.seed = function(knex, Promise) {
  return knex('urls').del()
  .then(() => {
    return Promise.all([
      knex('urls').insert({
        id: md5('url1'),
        long_url: 'http://gooooooooooooogle.com',
        short_url: 'localhost:3000/a8d7f',
        popularity: 3,
        folder_id: md5('folder1'),
        created_at: new Date()
      }),
      knex('urls').insert({
        id: md5('url2'),
        long_url: "http://thereallyreallyreallylongurl.com",
        short_url: 'localhost:3000/dfh57',
        popularity: 5,
        folder_id: md5('folder1'),
        created_at: new Date()
      }),
      knex('urls').insert({
        id: md5('url3'),
        long_url: "http://thefailingnytimes.com",
        short_url: 'localhost:3000/dhd45',
        popularity: 1,
        folder_id: md5('folder2'),
        created_at: new Date()
      })
    ])
  })
}
