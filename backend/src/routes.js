// const AuthenticationController = require('./controllers/AuthenticationController')
// const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
// const ProjectController = require('./controllers/ProjectController')
// const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {

  app.get('/status', (req, res) => {
    res.send({
      message: 'Hello world!'
    })
  })

  app.post('/register', (req, res) => {
    res.send({
      message: `Hello ${req.body.email}! Your user was registered! Have fun!`
    })
  })

  // app.post('/register',
  // AuthenticationControllerPolicy.register,
  // AuthenticationController.register)
}
