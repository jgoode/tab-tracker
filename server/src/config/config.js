module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.TABTRACKER_DB_NAME || 'tabtracker',
    user: process.env.TABTRACKER_DB_USER || 'tabtracker',
    password: process.env.TABTRACKER_DB_PASS || 'tabtracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './tabtracker.sqlite'
    }
  }
}
