const Task = require('../models/task');

class taskServices {

    static async getAll(){        
        return await Task.find().populate({path: 'user', select: 'nickName mail'})           
    }

    static async getAllByUser({id}){
        return await Task.find({user: id}).populate({path: 'user', select: 'nickName mail'})           
    }

    static async search({params ,id}){
        console.log(id);
        
        return await Task.where({isDone: params.isDone}).and({user: id}).populate({path: 'user', select: 'nickName mail'})
    }

    static  async create ({input}){
        return await Task.create(input)
    }

    static async update ({id, input}){
        return await Task.findByIdAndUpdate(id, input, {new: true})
    }

    static async delete ({id}){
        return await Task.deleteOne({_id: id})
    }

}

module.exports = taskServices