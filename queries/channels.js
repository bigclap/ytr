const knex = require('../database/connection');

function getAllGroupChannel(gid) {
  return knex('channels')
    .select('*')
    .whereIn('id', knex('group_channels')
      .select('channels_id')
      .where('groups_id', gid));
}

async function addChannelToGroup(channel) {
  const gid = channel.gid + 0;
  channel = await knex('channels')
    .returning('*')
    .insert(
      {
        link: channel.link,
        last_activity: channel.last_activity,
        subscribers: channel.subscribers,
        avg_views: channel.avg_views,
        key_videos: channel.key_videos,
      },
    ).get(0);
  await knex('group_channels')
    .returning('*')
    .insert({ groups_id: gid, channels_id: channel.id });
  return channel;
}

module.exports = {
  getAllGroupChannel,
  addChannelToGroup,
};
