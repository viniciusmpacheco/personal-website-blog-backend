import { Router } from 'express'
import PostController from '../controllers/post.controller'

export const PostRoute = Router()

const postController = new PostController()

PostRoute.get('/posts', (req: any, res: any) => { postController.list(req, res) })
PostRoute.post('/post', (req: any, res: any) => { postController.create(req, res) })
PostRoute.patch('/post', (req: any, res: any) => { postController.update(req, res) })
PostRoute.get('/post/:id', (req: any, res: any) => { postController.read(req, res) })
PostRoute.delete('/post/:id', (req: any, res: any) => { postController.remove(req, res) })