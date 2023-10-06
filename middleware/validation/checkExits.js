

const checkExits = (model) =>{
    return async (req, res, next) =>{
        const {id} = req.params;
        const station = await model.findOne({
            where: {
                id
            }
        });
        if (station) {
            next();
        }else{
            res.status(404).send(`không tìm thấy station có id: = ${id}`)
        }
    
    }
}

module.exports = {
    checkExits
}