
exports.seed = function(knex) {
  return knex('users').del()
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'jr', last_name: 'dee', email: 'jrdee@gmail.com'},
        {id: 2, first_name: 'junior', last_name: 'dugue', email: 'jdugue@gmail.com'},
        {id: 3, first_name: 'lambda', last_name: 'school', email: 'lschool@gmail.com'}
      ]);
    });
};
