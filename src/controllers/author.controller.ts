import AuthorService from "../services/author.service";

export default class AuthorController {
    public authorService: AuthorService = new AuthorService()
    
    public list(req: any, res: any){
        this.authorService.list()
        .then((result: any) => {
            res.status(200).send(result)
        })
        .catch((error: any) => {
            return error
        })
    }
    public read(req: any, res: any){
        this.authorService.read(req.params.id)
        .then((result: any) => {
            res.status(200).send(result)
        })
        .catch((error: any) => {
            return error
        })
    }
    public create(req: any, res: any){
        this.authorService.create(req.body)
        .then((result: any) => {
            res.status(201).send(result)
        })
        .catch((error: any) => {
            res.status(400).send(error)
        })
    }
    public update(req: any, res: any){
        this.authorService.create(req.body)
        .then((result: any) => {
            res.status(201).send(result)
        })
        .catch((error: any) => {
            res.status(400).send(error)
        })
    }
    public remove(req: any, res: any){
        this.authorService.remove(req.params.id)
        .then((result: any) => {
            res.status(201).send(result)
        })
        .catch((error: any) => {
            res.status(400).send(error)
        })
    }
}