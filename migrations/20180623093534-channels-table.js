/* eslint-disable no-underscore-dangle */
exports.up = (db, callback) => {
  db.createTable('channels', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    link: 'string',
    last_activity: 'date',
    subscribers: 'int',
    avg_views: 'int',
    key_videos: 'int',
  }, callback);
};

exports.down = (db, callback) => {
  db.dropTableIfExists('channels', callback);
};

exports._meta = {
  version: 1,
};
