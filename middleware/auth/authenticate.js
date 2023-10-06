const jwt = require("jsonwebtoken")

const authenticate = (req, res, next) => {
    const token = req.header("token");
    try {
        const decode = jwt.verify(token, 'thanh-sang-0301');
        if (decode) {
            req.user = decode;
            return next();
        } else {
            res.status(500).send({
                status: false,
                nofi: 'Bạn chưa đăng nhập'
            })
        }
    } catch (error) {
        res.status(500).send({
            status: false,
            nofi: 'Bạn chưa đăng nhập'
        })
    }
}
module.exports = {
    authenticate
}