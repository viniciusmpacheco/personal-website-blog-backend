import ReferenceService from "../services/reference.service";

export default class ReferenceController {
    public referenceService: ReferenceService = new ReferenceService()
    
    public list(req: any, res: any){
        this.referenceService.list()
        .then((result: any) => {
            res.status(200).send(result)
        })
        .catch((error: any) => {
            return error
        })
    }
    public read(req: any, res: any){
        this.referenceService.read(req.params.id)
        .then((result: any) => {
            res.status(200).send(result)
        })
        .catch((error: any) => {
            return error
        })
    }
    public create(req: any, res: any){
        this.referenceService.create(req.body)
        .then((result: any) => {
            res.status(201).send(result)
        })
        .catch((error: any) => {
            res.status(400).send(error)
        })
    }
    public update(req: any, res: any){
        this.referenceService.create(req.body)
        .then((result: any) => {
            res.status(201).send(result)
        })
        .catch((error: any) => {
            res.status(400).send(error)
        })
    }
    public remove(req: any, res: any){
        this.referenceService.remove(req.params.id)
        .then((result: any) => {
            res.status(201).send(result)
        })
        .catch((error: any) => {
            res.status(400).send(error)
        })
    }
}