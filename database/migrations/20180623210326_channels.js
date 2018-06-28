exports.up = (knex) => knex.schema.createTable('channels', (t) => {
  t.increments();
  t.string('channelId');
  t.string('name');
  t.date('lastActivity');
  t.integer('subscriberCount');
  t.integer('avgViews');
  t.integer('videoCount');
  t.integer('keywordVideos');
});

exports.down = (knex) => knex.schema.dropTableIfExists('channels');
