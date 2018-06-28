const knex = require('../database/connection');

const t = 'groups';

function getAllUserGroups(uid) {
  return knex(t).select('*').where('uid', uid);
}

async function createGroup(group) {
  let result = await knex(t).select('*').where(group).get(0);
  if (!result) {
    result = await knex(t).returning('*').insert({
      uid: group.uid,
      keyword: group.keyword,
    }).get(0);
  }
  return result;
}

module.exports = {
  getAllUserGroups,
  createOrSelectGroup: createGroup,
};
