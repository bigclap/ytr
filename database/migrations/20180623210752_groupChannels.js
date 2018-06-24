
exports.up = (knex) => {
  knex.schema.alterTable('job', (t) => {
    t.unique(['groups_id', 'channels_id']);
    t.foreign('groups_id').references('groups.id');
    t.foreign('channels_id').references('channels.id');
  });
};

exports.down = (knex) => {
  knex.schema.dropForeign(['groups_id', 'channels_id']);
  knex.schema.dropUnique(['groups_id', 'channels_id']);
};
