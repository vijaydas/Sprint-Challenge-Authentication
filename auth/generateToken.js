const jwt = require('jsonwebtoken');

const jwtKey =
  process.env.JWT_SECRET ||
  'add a .env file to root of project with the JWT_SECRET variable';

// quickly see what this file exports
module.exports = {
  generateToken,
};

function generateToken(user) {
    const payload = {
      subject: user.id, // standard claim = sub
      username: user.username,
      roles: ['student'],
    };
  
    const options = {
      expiresIn: '1d',
    };
  
    return jwt.sign(payload, secrets.jwtSecret, options);
  }