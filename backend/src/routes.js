// const AuthenticationController = require('./controllers/AuthenticationController')
// const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
// const ProjectController = require('./controllers/ProjectController')
// const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {

  app.get('/status', (req, res) => {
    res.send({
      message: 'hello world!'
    })
  })
}
