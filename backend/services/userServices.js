const User = require('../models/user');

class userServices {

    static async create({input}){
        const {nickName, mail} = input

        const user = await User.findOne({nickName: nickName})
        const userMail = await User.findOne({mail: mail})

        if (user){
            return {
                message: 'Usuario ya existe en el sistema'
            }
        }

        if (userMail){
            return {
                message: 'Email ya existe en el sistema'
            }
        }

        return await User.create(input);
    }

    static async delete({id}){
        return await User.deleteOne({_id: id})
    }

    static async getUserById({id}){
        return await User.findById(id)
    }

    static async findUser({input}){
        return await User.findOne({mail: input})
    }
}


module.exports = userServices;
