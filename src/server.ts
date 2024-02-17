import app from '../config/server.config'
require('../config/database.config')


app.listen(4000, () => { console.log("Server is working")})

