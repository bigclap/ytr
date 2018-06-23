/* eslint-disable no-underscore-dangle */
exports.up = (db, callback) => {
  db.createTable('groups', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    keyword: 'string',
    uid: { type: 'char', length: 32 },
  }, callback);
};

exports.down = (db, callback) => {
  db.dropTableIfExists('groups', callback);
};

exports._meta = {
  version: 1,
};
