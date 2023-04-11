import jwt from 'jsonwebtoken';

import config from '../config.js';

const user = {
  username: 'admin',
  password: 'admin',
  otp: '123456',
};

const getJwtToken = () => {
  const payload = {
    username: user.username,
  };
  const options = {
    expiresIn: '1d',
  };
  return jwt.sign(payload, config.jwtSecret, options);
};

export default (req, res) => {
  const { username, password, otp } = req.body;
  if (username === user.username && password === user.password) {
    if (!otp) {
      return res.status(200).json({ message: 'otp required' });
    }
    if (otp === user.otp) {
      return res.status(200).json({
        message: 'success',
        token: getJwtToken(),
      });
    }
    return res.status(400).json({ message: 'code is wrong' });
  }
  return res.status(400).json({ message: 'username or password is wrong' });
};
