
function getChannelsGroups(ctx) {
  const groups = {};
  ctx.ok({ groups });
}

function getGroupChannels(ctx) {
  const groups = ctx.request.query.group;
  ctx.ok({ groups });
}

function writeNewGroup(ctx) {
  const group = ctx.request.body;
  ctx.ok({ group });
}

function writeChanelToGroup(ctx) {
  const group = ctx.request.query.group;
  const channel = ctx.request.query.channel;
  ctx.ok({ channel, group });
}


module.exports = {
  getChannelsGroups,
  writeChanelToGroup,
  getGroupChannels,
  writeNewGroup,
};
