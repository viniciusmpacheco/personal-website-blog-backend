import { Request, Response } from "express";
import AuthorService from "../services/author.service";

export default class AuthorController {
    public authorService: AuthorService = new AuthorService()
    
    public list(req: Request, res: Response){
        this.authorService.list()
        .then((result: any) => {
            res.status(200).send(result)
        })
        .catch((error: any) => {
            return error
        })
    }
    public read(req: Request, res: Response){
        this.authorService.read(req.params.id)
        .then((result: any) => {
            res.status(200).send(result)
        })
        .catch((error: any) => {
            return error
        })
    }
    public create(req: Request, res: Response){
        this.authorService.create(req.body)
        .then((result: any) => {
            res.status(201).send(result)
        })
        .catch((error: any) => {
            res.status(400).send(error)
        })
    }
    public update(req: Request, res: Response){
        this.authorService.create(req.body)
        .then((result: any) => {
            res.status(202).send(result)
        })
        .catch((error: any) => {
            res.status(400).send(error)
        })
    }
    public remove(req: Request, res: Response){
        this.authorService.remove(req.params.id)
        .then((result: any) => {
            res.status(204).send(result)
        })
        .catch((error: any) => {
            res.status(400).send(error)
        })
    }
}