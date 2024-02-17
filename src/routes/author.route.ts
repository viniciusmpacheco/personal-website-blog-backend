import { Router } from 'express'
import AuthorController from '../controllers/author.controller'

/**
 * @openapi
 * tags:
 * - name: Author
 *   description: "Handling blog post authors"
 */
export const AuthorRoute = Router()

const authorController = new AuthorController()

/**
 * @openapi
 * /authors:
 *    get:
 *      tags:
 *        - Author
 *      description: "Return blog post authors list"
 *      responses:
 *        200:
 *          description: "Success"
 *        400:
 *          description: "Bad Request"
 */
AuthorRoute.get('/authors', (req: any, res: any) => { authorController.list(req, res) })

/**
 * @openapi
 * /author:
 *    post:
 *      tags:
 *        - Author
 *      description: "Create blog post author"
 *      responses:
 *        201:
 *          description: "Created"
 *        400:
 *          description: "Bad Request"
 *      requestBody:
 *        description: Request body to create blog post author
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Author'
 */
AuthorRoute.post('/author', (req: any, res: any) => { authorController.create(req, res) })

/**
 * @openapi
 * /author:
 *    patch:
 *      tags:
 *        - Author
 *      description: "Update blog post author object"
 *      responses:
 *        202:
 *          description: "Accepted"
 *        400:
 *          description: "Bad Request"
 *      requestBody:
 *        description: Request body to update blog post author object
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Author'
 */
AuthorRoute.patch('/author', (req: any, res: any) => { authorController.update(req, res) })

/**
 * @openapi
 * /author/{id}:
 *    get:
 *      tags:
 *        - Author
 *      description: "Return blog post author object"
 *      parameters:
 *      - name: id
 *        in: path
 *      responses:
 *        200:
 *          description: "Success"
 *        400:
 *          description: "Bad Request"
 */
AuthorRoute.get('/author/:id', (req: any, res: any) => { authorController.read(req, res) })

/**
 * @openapi
 * /author/{id}:
 *    delete:
 *      tags:
 *        - Author
 *      description: "Delete blog post author object"
 *      parameters:
 *      - name: id
 *        in: path
 *      responses:
 *        204:
 *          description: "Deleted"
 *        400:
 *          description: "Bad Request"
 */
AuthorRoute.delete('/author/:id', (req: any, res: any) => { authorController.remove(req, res) })