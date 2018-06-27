const knex = require('../database/connection');

function getAllGroupChannel(gid) {
  return knex('channels')
    .select('*')
    .whereIn('id', knex('group_channels')
      .select('channels_id')
      .where('groups_id', gid));
}

async function addChannelToGroup(channels, gid) {
  channels = await knex('channels')
    .returning('*')
    .insert(channels);
  const foreign = channels.map(channel => ({ groups_id: gid, channels_id: channel.id }));
  await knex('group_channels')
    .returning('*')
    .insert(foreign);
  return channels;
}

module.exports = {
  getAllGroupChannel,
  addChannelToGroup,
};
