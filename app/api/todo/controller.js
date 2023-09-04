const {Todo, Item} = require('../../db/models');

module.exports = {
    getAll : async (req, res, next) => {
        try{
            const result = await Todo.findAll({
                attributes: ['id', 'name'],
                include : {
                    model : Item, attributes : [
                        'id', 'name', 'TodoId'
                    ]
                }
            }
            );
            console.log(result);
            res.status(200).json({
                message: 'Success',
                data: result
            })
        }catch(e){
console.log(e);
        }
    },

    create : async (req, res, next) => {
        try{
            const {name} = req.body;
            const result = await Todo.create({name});
            res.status(201).json({
                message: 'Success',
                data: result
            })
        }catch(e){
            next(e);
        }
    },

    getOne: async (req, res, next) => {
        try {
          const { id } = req.params;
          console.log(id);
          const result = await Todo.findOne({
            where: { id: id },

          });
          console.log(id);
          conslo.log(result);
          res.status(200).json({
            message: 'success',
            data: result,
          });
        } catch (err) {
          next(err);
          console.log(err);
        }
      },
    update : async (req, res, next) => {
        try{
            const {id} = req.params;
            const {name} = req.body;
            Todo.findOne({
                where : {id: id}
            }).then(todo => {
                todo.update({name : name}).then(() => {
                    res.status(200).json({
                        message: 'Success',
                        data: todo
                    })
                })
            })
    }catch(e){
        next(e);
    }

},

destroy: async (req, res, next) => {
    try{
        const {id} = req.params;
        const result = await Todo.findOne({
            where : {id: id}
        }).then(result => {
            result.destroy({id : id}).then(() => {
                res.status(200).json({
                    message: 'Success',
                    data: result,})        
            })
        })
        
            
    }catch(e){
        next(e);
    }
}
}