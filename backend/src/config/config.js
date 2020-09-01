const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'template1',
    user: process.env.DB_USER || 'huntermedlen',
    password: process.env.DB_PASS || 'password',
    options: {
      dialect: process.env.DIALECT || 'postgres',
      host: process.env.HOST || 'localhost',
      // storage: './myproject.pg',
      storage: path.resolve(__dirname, '../../myproject.pg')
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}