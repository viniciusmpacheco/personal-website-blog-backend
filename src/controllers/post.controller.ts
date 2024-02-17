import { Request, Response } from "express";
import PostService from "../services/post.service";

export default class PostController {
    public postService: PostService = new PostService()
    
    public list(req: Request, res: Response){
        this.postService.list()
        .then((result: any) => {
            res.status(200).send(result)
        })
        .catch((error: any) => {
            return error
        })
    }
    public read(req: Request, res: Response){
        this.postService.read(req.params.id)
        .then((result: any) => {
            res.status(200).send(result)
        })
        .catch((error: any) => {
            return error
        })
    }
    public create(req: Request, res: Response){
        this.postService.create(req.body)
        .then((result: any) => {
            res.status(201).send(result)
        })
        .catch((error: any) => {
            res.status(400).send(error)
        })
    }
    public update(req: Request, res: Response){
        this.postService.create(req.body)
        .then((result: any) => {
            res.status(202).send(result)
        })
        .catch((error: any) => {
            res.status(400).send(error)
        })
    }
    public remove(req: Request, res: Response){
        this.postService.remove(req.params.id)
        .then((result: any) => {
            res.status(204).send(result)
        })
        .catch((error: any) => {
            res.status(400).send(error)
        })
    }
}