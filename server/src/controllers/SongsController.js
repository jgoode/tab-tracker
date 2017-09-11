const {Song} = require('../models')
module.exports = {
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'Error occur trying to create the song'
      })
    }
  },
  async index (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (err) {
      res.status(400).send({
        error: 'Error occured fetching songs'
      })
    }
  }
}
