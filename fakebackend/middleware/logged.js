import config from '../config.js';
import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  // bearer token
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const [bearer, jwtToken] = token.split(' ');
  if (bearer !== 'Bearer') {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  try {
    const payload = jwt.verify(jwtToken, config.jwtSecret);
    req.user = payload;
    next();
  }
  catch (err) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
