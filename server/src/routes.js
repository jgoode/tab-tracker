const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    // AuthenticationControllerPolicy.register,
    AuthenticationController.login)

  app.get('/songs',
    // AuthenticationControllerPolicy.register,
    SongsController.index)

  app.post('/songs',
    // AuthenticationControllerPolicy.register,
    SongsController.post)
}
