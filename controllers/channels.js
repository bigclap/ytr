const { addChannelsToGroup, getAllGroupChannel } = require('../queries/channels');
const { createOrSelectGroup, getAllUserGroups } = require('../queries/groups');

async function getChannelsGroups(ctx) {
  const groups = await getAllUserGroups(ctx.request.query.uid);
  ctx.ok({ groups });
}

async function getGroupChannels(ctx) {
  const gid = ctx.params.id;
  const channels = await getAllGroupChannel(gid);
  ctx.ok({ channels });
}

async function writeNewGroup(ctx) {
  let group = ctx.request.body.data;
  group = await createOrSelectGroup(group);
  ctx.ok(group);
}

async function writeChanelsToGroup(ctx) {
  let channels = ctx.request.body.data;
  channels = await addChannelsToGroup(channels, ctx.params.id);
  ctx.ok(channels);
}


module.exports = {
  getChannelsGroups,
  writeChanelsToGroup,
  getGroupChannels,
  writeNewGroup,
};
