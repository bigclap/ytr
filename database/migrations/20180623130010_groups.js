exports.up = (knex) => {
  knex.schema.createTable('groups', (t) => {
    t.increment();
    t.string('keyword');
    t.uuid('uid');
  });
};

exports.down = (knex) => {
  knex.schema.dropTableIfExists('groups');
};
