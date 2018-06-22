const groups = require('./groups');

module.exports = (router) => {
  router.prefix('/v1');
  router.use('/groups', groups);
};
