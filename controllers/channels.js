const { addChannelToGroup, getAllGroupChannel } = require('../queries/channels');
const { createGroup, getAllUserGroups } = require('../queries/groups');

async function getChannelsGroups(ctx) {
  const groups = await getAllUserGroups(ctx.request.query.uid);
  ctx.ok({ groups });
}

async function getGroupChannels(ctx) {
  const gid = ctx.params.id;
  const groups = await getAllGroupChannel(gid);
  ctx.ok({ groups });
}

async function writeNewGroup(ctx) {
  let group = ctx.request.body;
  group = await createGroup(group);
  ctx.ok({ group });
}

async function writeChanelToGroup(ctx) {
  let channel = ctx.request.body;
  channel.gid = ctx.params.id;

  channel = await addChannelToGroup(channel);
  ctx.ok({ channel });
}


module.exports = {
  getChannelsGroups,
  writeChanelToGroup,
  getGroupChannels,
  writeNewGroup,
};
