import { PostDAO } from "../dao/post.dao";

export default class PostService {
    
    public list(): any{
        return PostDAO.find()
        .then(result => {
            return result
        })
        .catch(error => {
            return error
        })
    }
    public read(id: any){
        return PostDAO.findById(id)
        .then(result => {
            return result
        })
        .catch(error => {
            return error
        })
    }
    public create(post: any){
        return PostDAO.create(post)
        .then(result => {
            return result
        })
        .catch(error => {
            console.log(error)
            return error
        })
    }
    public update(post: any){
        return PostDAO.updateOne({ _id: post._id }, post)
        .then(result => {
            return result
        })
        .catch(error => {
            console.log(error)
            return error
        })
    }
    public remove(id: any){
        return PostDAO.deleteOne({ _id: id })
        .then(result => {
            return result
        })
        .catch(error => {
            console.log(error)
            return error
        })
    }
}