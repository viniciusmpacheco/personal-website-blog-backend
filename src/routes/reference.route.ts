import { Router } from 'express'
import ReferenceController from '../controllers/reference.controller'

export const ReferenceRoute = Router()

const referenceController = new ReferenceController()

ReferenceRoute.get('/references', (req: any, res: any) => { referenceController.list(req, res) })
ReferenceRoute.post('/reference', (req: any, res: any) => { referenceController.create(req, res) })
ReferenceRoute.patch('/reference', (req: any, res: any) => { referenceController.update(req, res) })
ReferenceRoute.get('/reference/:id', (req: any, res: any) => { referenceController.read(req, res) })
ReferenceRoute.delete('/reference/:id', (req: any, res: any) => { referenceController.remove(req, res) })