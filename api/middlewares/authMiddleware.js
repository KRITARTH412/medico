const jwt = require('jsonwebtoken');
// const { JWT_SECRET } = process.env;

function authenticateToken(req, res, next) {
  const token = req.headers.authorization.split(' ')[1];

  console.log('Received token:', token);

  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.error('Token verification error:', err);
      return res.status(403).json({ error: 'Forbidden' });
    }

    console.log('User from token:', user);
    req.user = user;
    next();
  });
}

module.exports = { authenticateToken };