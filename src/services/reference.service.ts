import { ReferenceDAO } from "../dao/reference.dao";

export default class ReferenceService {
    
    public list(): any{
        return ReferenceDAO.find()
        .then(result => {
            return result
        })
        .catch(error => {
            return error
        })
    }
    public read(id: any){
        return ReferenceDAO.findById(id)
        .then(result => {
            return result
        })
        .catch(error => {
            return error
        })
    }
    public create(reference: any){
        return ReferenceDAO.create(reference)
        .then(result => {
            return result
        })
        .catch(error => {
            console.log(error)
            return error
        })
    }
    public update(reference: any){
        return ReferenceDAO.updateOne({ _id: reference._id }, reference)
        .then(result => {
            return result
        })
        .catch(error => {
            console.log(error)
            return error
        })
    }
    public remove(id: any){
        return ReferenceDAO.deleteOne({ _id: id })
        .then(result => {
            return result
        })
        .catch(error => {
            console.log(error)
            return error
        })
    }
}