import { Request, Response } from "express";
import ReferenceService from "../services/reference.service";

export default class ReferenceController {
    public referenceService: ReferenceService = new ReferenceService()
    
    public list(req: Request, res: Response){
        this.referenceService.list()
        .then((result: any) => {
            res.status(200).send(result)
        })
        .catch((error: any) => {
            return error
        })
    }
    public read(req: Request, res: Response){
        this.referenceService.read(req.params.id)
        .then((result: any) => {
            res.status(200).send(result)
        })
        .catch((error: any) => {
            return error
        })
    }
    public create(req: Request, res: Response){
        this.referenceService.create(req.body)
        .then((result: any) => {
            res.status(201).send(result)
        })
        .catch((error: any) => {
            res.status(400).send(error)
        })
    }
    public update(req: Request, res: Response){
        this.referenceService.create(req.body)
        .then((result: any) => {
            res.status(202).send(result)
        })
        .catch((error: any) => {
            res.status(400).send(error)
        })
    }
    public remove(req: Request, res: Response){
        this.referenceService.remove(req.params.id)
        .then((result: any) => {
            res.status(204).send(result)
        })
        .catch((error: any) => {
            res.status(400).send(error)
        })
    }
}