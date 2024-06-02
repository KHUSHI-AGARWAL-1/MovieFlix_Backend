const express = require('express');
const router = express.Router();
const { addToWatchlist, removeFromWatchlist , getWatchlist} = require('../controllers/watchlistcontroller');

router.post("/add", addToWatchlist);
router.post("/remove", removeFromWatchlist);
router.get('/:userId', getWatchlist);

module.exports = router;
