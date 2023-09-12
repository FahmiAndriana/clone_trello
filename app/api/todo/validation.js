const {body, validationResult} = require ("express-validator");


module.exports ={
    validateCreate : [
        body("name").notEmpty().withMessage("Name is required"),
        (req, res, next) => {
            const error = validationResult(req);
            if(!error.isEmpty()){
                return res.status(422).json({
                    message : "Error",
                    error: error.array(),
                })
            }
            next();
        }
    ],
    // validateOne : [
    //     param['id'].notEmpty().withMessage("Id is required").bail().isNumeric().withMessage("Id must be amn  number").bail().costum(
    //         async (value , { req}) => {
    //             const checking = await Todo.findOne({
    //                 where : {id: value}
    //             });
    //             if(checking === null){
    //                 return Promise.reject();
    //             }
    //         }
    //     ).withMessage("Id not found"),
    //     (req, res, next) => {
    //         const error = validationResult(req);
    //         if(!error.isEmpty()){
    //             return res.status(422).json({
    //                 message : "Error",
    //                 error: error.array(),
    //             })
    //         }
    //         next();
    //     }
    // ],
    // validateUpdate : [
    //     param['id'].notEmpty().withMessage("Id is required").bail().isNumeric().withMessage("Id must be a number").bail().costum(
    //         async (value , { req}) => {
    //             const checking = await Todo.findOne({
    //                 where : {id: value}
    //             });
    //             if(checking === null){
    //                 return Promise.reject();
    //             }
    //         }
    //     ).withMessage("Id not found"),
    //     body("name").notEmpty().withMessage("Name is required"),
    //     (req, res, next) => {
    //         const error = validationResult(req);
    //         if(!error.isEmpty()){
    //             return res.status(422).json({
    //                 message : "Error",
    //                 error: error.array(),
    //             })
    //         }
    //         next();
    //     }
    // ]
}