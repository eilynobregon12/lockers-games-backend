const Game = require('../models/game');

exports.getGames = async (req, res) => {
  const games = await Game.find();
  res.json(games);
};

exports.addGame = async (req, res) => {
  const newGame = new Game(req.body);
  await newGame.save();
  res.json(newGame);
};

exports.updateGame = async (req, res) => {
  const updated = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteGame = async (req, res) => {
  await Game.findByIdAndDelete(req.params.id);
  res.json({ message: 'Juego eliminado' });
};
