import express from 'express'
import bodyParser from 'body-parser'

import { PostRoute } from '../src/routes/post.route'
import { ReferenceRoute } from '../src/routes/reference.route'
import { AuthorRoute } from '../src/routes/author.route'

const routes = express.Router()
routes.use(PostRoute)
routes.use(ReferenceRoute)
routes.use(AuthorRoute)

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', routes)

export default app