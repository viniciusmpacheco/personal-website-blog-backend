import { AuthorDAO } from "../dao/author.dao";

export default class AuthorService {
    
    public list(): any{
        return AuthorDAO.find()
        .then(result => {
            return result
        })
        .catch(error => {
            return error
        })
    }
    public read(id: any){
        return AuthorDAO.findById(id)
        .then(result => {
            return result
        })
        .catch(error => {
            return error
        })
    }
    public create(author: any){
        return AuthorDAO.create(author)
        .then(result => {
            return result
        })
        .catch(error => {
            return error
        })
    }
    public update(author: any){
        return AuthorDAO.updateOne({ _id: author._id }, author)
        .then(result => {
            return result
        })
        .catch(error => {
            console.log(error)
            return error
        })
    }
    public remove(id: any){
        return AuthorDAO.deleteOne({ _id: id })
        .then(result => {
            return result
        })
        .catch(error => {
            console.log(error)
            return error
        })
    }
}