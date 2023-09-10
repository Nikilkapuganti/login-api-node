const config = require('config.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const User = db.User;

module.exports = {
    getAll
   
};

async function getAll() {
    const condition = {
                $and: [
                  { lastLoginDate: { $exists: true } },
                  { clientIp: { $exists: true } }
                ]
              };
    return await User.find(condition).select('-hash');
}