const Router = require('koa-router');
const Ctrl = require('../controllers/channels');


const router = new Router();

router.get('/', Ctrl.getChannelsGroups);
router.post('/', Ctrl.writeNewGroup);
router.get('/:id/channels', Ctrl.getGroupChannels);
router.post('/:id/channels', Ctrl.writeChanelsToGroup);

module.exports = router.routes();
