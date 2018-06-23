/* eslint-disable no-underscore-dangle */
exports.up = (db, callback) => {
  db.createMigrationsTable(callback);
};

exports.down = (db, callback) => {
  db.dropTableIfExists('migrations', callback);
  return null;
};

exports._meta = {
  version: 1,
};
