const authorize =  (arrType) => (req, res, next) =>{
    const {user} = req;
   if (arrType.findIndex(item => item == user.type) > -1 ) {
    next();
   } else {
    res.status(403).send("bạn đã đăng nhập nhưng không có quyền")
   }
}
module.exports = {
    authorize
}