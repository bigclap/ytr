exports.up = (knex) => knex.schema.createTable('groups', (t) => {
  t.increments();
  t.string('keyword');
  t.string('uid', 32);
  t.unique(['keyword', 'uid']);
});

exports.down = (knex) => knex.schema.dropTableIfExists('groups');
