
exports.up = function(knex) {
  return knex.schema.createTable('users', (tbl) => {
      tbl.increments() //primary key,set to integer, auto increment

      tbl.string('first_name', 128)
      .notNullable()

      tbl.string('last_name', 128)
      .notNullable()

      tbl.string('email', 128)
      .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
