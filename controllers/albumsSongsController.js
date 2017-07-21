const db = require('../models');
const bodyParser = require('body-parser');

const create = function (req, res) {
  const album_id = req.params.album_id;
  db.Album.findById(album_id, function (err, album) {
    if (err) return res.status(500).json(err);
    if (album === null) return res.status(404).json({message: "didn't find the album."});
    db.Song.create({
      trackNumber: req.body.trackNumber,
      name: req.body.name
    }, function (err, song) {
      if (err) return res.status(500).json(err);
      album.songs.push(song);
      album.save();
      res.json(album);
    })
  })
};

module.exports = {
  create: create
}
