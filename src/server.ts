import app from '../config/server.config'
import swagger from '../config/swagger.config'

require('../config/database.config')


app.listen(4000, () => { 
    swagger(app, 4000)
    console.log("Server is working")
})

