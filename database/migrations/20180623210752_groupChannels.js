exports.up = (knex) => knex.schema.createTable('group_channels', t => {
  t.integer('groups_id');
  t.integer('channels_id');
  t.unique(['groups_id', 'channels_id']);
  t.foreign('groups_id').references('groups.id');
  t.foreign('channels_id').references('channels.id');
});

exports.down = (knex) => knex.schema.dropTableIfExists('group_channels');
