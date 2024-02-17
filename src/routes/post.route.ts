import { Router } from 'express'
import PostController from '../controllers/post.controller'

/**
 * @openapi
 * tags:
 * - name: Post
 *   description: "Handling blog posts"
 */
export const PostRoute = Router()

const postController = new PostController()

/**
 * @openapi
 * /posts:
 *    get:
 *      tags:
 *        - Post
 *      description: "Return blog posts list"
 *      responses:
 *        200:
 *          description: "Success"
 *        400:
 *          description: "Bad Request"
 */
PostRoute.get('/posts', (req: any, res: any) => { postController.list(req, res) })

/**
 * @openapi
 * /post:
 *    post:
 *      tags:
 *        - Post
 *      description: "Create blog post object"
 *      responses:
 *        201:
 *          description: "Created"
 *        400:
 *          description: "Bad Request"
 *      requestBody:
 *        description: Request body to create blog post object
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Post'
 */
PostRoute.post('/post', (req: any, res: any) => { postController.create(req, res) })

/**
 * @openapi
 * /post:
 *    patch:
 *      tags:
 *        - Post
 *      description: "Update blog post object"
 *      responses:
 *        202:
 *          description: "Accepted"
 *        400:
 *          description: "Bad Request"
 *      requestBody:
 *        description: Request body to update blog post object
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Post'
 */
PostRoute.patch('/post', (req: any, res: any) => { postController.update(req, res) })

/**
 * @openapi
 * /post/{id}:
 *    get:
 *      tags:
 *        - Post
 *      description: "Return blog post object"
 *      parameters:
 *      - name: id
 *        in: path
 *      responses:
 *        200:
 *          description: "Success"
 *        400:
 *          description: "Bad Request"
 */
PostRoute.get('/post/:id', (req: any, res: any) => { postController.read(req, res) })

/**
 * @openapi
 * /post/{id}:
 *    delete:
 *      tags:
 *        - Post
 *      description: "Delete blog post object"
 *      parameters:
 *      - name: id
 *        in: path
 *      responses:
 *        204:
 *          description: "Deleted"
 *        400:
 *          description: "Bad Request"
 */
PostRoute.delete('/post/:id', (req: any, res: any) => { postController.remove(req, res) })