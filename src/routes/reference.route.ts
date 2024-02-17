import { Request, Response, Router } from 'express'
import ReferenceController from '../controllers/reference.controller'

/**
 * @openapi
 * tags:
 * - name: Reference
 *   description: "Handling blog post references"
 */
export const ReferenceRoute = Router()

const referenceController = new ReferenceController()

/**
 * @openapi
 * /references:
 *    get:
 *      tags:
 *        - Reference
 *      description: "Return blog post references list"
 *      responses:
 *        200:
 *          description: "Success"
 *        400:
 *          description: "Bad Request"
 */
ReferenceRoute.get('/references', (req: Request, res: Response) => { referenceController.list(req, res) })

/**
 * @openapi
 * /reference:
 *    post:
 *      tags:
 *        - Reference
 *      description: "Create blog post reference object"
 *      responses:
 *        201:
 *          description: "Created"
 *        400:
 *          description: "Bad Request"
 *      requestBody:
 *        description: Request body to create blog post reference
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Reference'
 */
ReferenceRoute.post('/reference', (req: Request, res: Response) => { referenceController.create(req, res) })

/**
 * @openapi
 * /reference:
 *    patch:
 *      tags:
 *        - Reference
 *      description: "Updated blog post reference object"
 *      responses:
 *        202:
 *          description: "Accepted"
 *        400:
 *          description: "Bad Request"
 *      requestBody:
 *        description: Request body to update blog post reference
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Reference'
 */
ReferenceRoute.patch('/reference', (req: Request, res: Response) => { referenceController.update(req, res) })

/**
 * @openapi
 * /reference/{id}:
 *    get:
 *      tags:
 *        - Reference
 *      description: "Return blog post references object"
 *      parameters:
 *      - name: id
 *        in: path
 *      responses:
 *        200:
 *          description: "Success"
 *        400:
 *          description: "Bad Request"
 */
ReferenceRoute.get('/reference/:id', (req: Request, res: Response) => { referenceController.read(req, res) })

/**
 * @openapi
 * /reference/{id}:
 *    delete:
 *      tags:
 *        - Reference
 *      description: "Delete blog post references object"
 *      parameters:
 *      - name: id
 *        in: path
 *      responses:
 *        204:
 *          description: "Deleted"
 *        400:
 *          description: "Bad Request"
 */
ReferenceRoute.delete('/reference/:id', (req: Request, res: Response) => { referenceController.remove(req, res) })