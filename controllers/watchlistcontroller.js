const User = require('../models/User');

const addToWatchlist = async (req, res) => {
    try {
        const { userId, movieId } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        if (user.watchlist.includes(movieId)) {
            return res.status(400).json({ msg: "Movie already in watchlist" });
        }
        user.watchlist.push(movieId);
        await user.save();
        res.status(200).json({ msg: "Movie added to watchlist" });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

const removeFromWatchlist = async (req, res) => {
    try {
        const { userId, movieId } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        if (!user.watchlist.includes(movieId)) {
            return res.status(400).json({ msg: "Movie not found in watchlist" });
        }
        user.watchlist = user.watchlist.filter(id => id !== movieId);
        await user.save();
        res.status(200).json({ msg: "Movie removed from watchlist" });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}
const getWatchlist = async (req, res) => {
    try {
      const userId = req.params.userId;
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }
  
      // Return the user's watchlist
      res.status(200).json(user.watchlist);
    } catch (err) {
      console.error('Error fetching watchlist:', err);
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }
module.exports = { addToWatchlist, removeFromWatchlist, getWatchlist };
