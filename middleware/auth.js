//Get jwt token
const jwt = require('jsonwebtoken');

//jwt token
module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');
  //Checking if the token existed
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  //Handling errors during JWT validation
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
