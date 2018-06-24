exports.up = (knex) => knex.schema.createTable('channels', (t) => {
  t.increments();
  t.string('link');
  t.date('last_activity');
  t.integer('subscribers');
  t.integer('avg_views');
  t.integer('key_videos');
});

exports.down = (knex) => knex.schema.dropTableIfExists('channels');
