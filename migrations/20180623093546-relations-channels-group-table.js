/* eslint-disable no-underscore-dangle */
exports.up = async (db, callback) => {
  await db.createTable('groupChannels', {
    groups_id: {
      type: 'int',
      unsigned: true,
      notNull: true,
      foreignKey: {
        name: 'groups_id_foreign',
        table: 'groups',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT',
        },
        mapping: 'id',
      },
    },
    channels_id: {
      type: 'int',
      unsigned: true,
      notNull: true,
      foreignKey: {
        name: 'channels_id_foreign',
        table: 'channels',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT',
        },
        mapping: 'id',
      },
    },
  });
  db.addIndex('groupChannels', 'groupChannelsIndex', ['groups_id', 'channels_id'], callback);
};

exports.down = (db, callback) => {
  db.dropTableIfExists('channels', callback);
};

exports._meta = {
  version: 1,
};
