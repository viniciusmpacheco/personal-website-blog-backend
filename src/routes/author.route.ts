import { Router } from 'express'
import AuthorController from '../controllers/author.controller'

export const AuthorRoute = Router()

const authorController = new AuthorController()

AuthorRoute.get('/authors', (req: any, res: any) => { authorController.list(req, res) })
AuthorRoute.post('/author', (req: any, res: any) => { authorController.create(req, res) })
AuthorRoute.patch('/author', (req: any, res: any) => { authorController.update(req, res) })
AuthorRoute.get('/author/:id', (req: any, res: any) => { authorController.read(req, res) })
AuthorRoute.delete('/author/:id', (req: any, res: any) => { authorController.remove(req, res) })