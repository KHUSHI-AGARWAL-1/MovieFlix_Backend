const User = require('../models/User');
const bcrypt = require('bcrypt');
const authenticateUser = async (req, res, next) => {
    console.log(req.user);
    
    if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
};


module.exports = authenticateUser;
