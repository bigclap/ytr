const knex = require('../database/connection');

const t = 'groups';

function getAllUserGroups(uid) {
  return knex(t).select('*').where('uid', uid);
}

function createGroup(group) {
  const result = knex(t).returning('*').insert({
    uid: group.uid,
    keyword: group.keyword,
  });
  return result;
}

module.exports = {
  getAllUserGroups,
  createGroup,
};
