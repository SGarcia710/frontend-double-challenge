import config from '../config.js';

const PORT = config.port;

const animals = [
  { name: 'cat', img: `http://localhost:${PORT}/assets/animals/cat.jpg` },
  { name: 'dog', img: `http://localhost:${PORT}/assets/animals/dog.jpg` },
  { name: 'bird', img: `http://localhost:${PORT}/assets/animals/bird.jpg` },
  { name: 'fish', img: `http://localhost:${PORT}/assets/animals/fish.jpg` },
  { name: 'rabbit', img: `http://localhost:${PORT}/assets/animals/rabbit.jpg` },
];

export default (req, res) => {
  const random = Math.floor(Math.random() * animals.length);
  res.status(200).json({
    animal: animals[random],
  });
};
