const env = 'development';
const config = require('./knexfile')[env];
const knex = require('knex')(config);

// const sql = knex
//   .select()
//   .from('users')
//   .toString();

// console.log(sql);

knex
  .from('users')
  .select()
  .then(result => {
    console.log(result);
    knex.destroy();
  })
  .catch(err => {
    console.error(err);
    knex.destroy();
  });
