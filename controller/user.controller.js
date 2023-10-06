const { Users, sequelize } = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
var gravatar = require('gravatar');

const register = async (req, res) => {
    const { name, email, password, numberPhone } = req.body;    
    try {
        //Tao avatar mac dinh
        let avatarUrl = gravatar.url(email);
        console.log(avatarUrl);
        //tạo ra một chuỗi ngẫu nhiên
        const salt = bcryptjs.genSaltSync(10);
        //mã hóa chuỗi ngẫu nhiên salt + password
        const hasPassword = bcryptjs.hashSync(password, salt);
        const newUser = await Users.create({ name, email, password: hasPassword, numberPhone, avatar: avatarUrl });
        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    //tìm ra user đang đăng nhập
    let user = await Users.findOne({
        where: {
            email
        }
    })
    //kiểm tra mật khẩu

    if (user) {
        const isAuthen = bcryptjs.compareSync(password, user.password);
        if (isAuthen) {
            const token = jwt.sign({email: user.email, password: user.password, type: user.type}, 'thanh-sang-0301', {expiresIn: 60*60});
            res.status(200).send({ messenge: "đăng nhập thành công", token});
        } else {
            res.status(500).send({ messenge: "mật khẩu không đúng" });
        }
    } else {
        res.status(500).send({ messenge: "email không tồn tại" });
    }
}

const uploadAvatar = async (req,res) =>{
    let {acceptFile, user, file} = req;
    if (acceptFile) {
        const urlImg = `http://localhost:3000/${file.path}`

        await Users.update({avatar: urlImg},{where: {email: user.email}})

        let userFound = await Users.findOne({
            where: {
                email: user.email
            }
        })

        res.send(userFound);
    }else{
        let {err}= req;
        res.send(err);
    }    
}

const getAllTrips = async (req, res) =>{
    const [result] = await sequelize.query(
        `select users.name, fromSta.name as fromSta, toSta.name as toSta from users
        inner join tickets on users.id = tickets.user_id
        inner join trips on trips.id = tickets.user_id
        inner join stations as fromSta on fromSta.id = trips.fromStation
        inner join stations as toSta on toSta.id = trips.toStation`
    )
    res.send(result)
}
module.exports = {
    register,
    login,
    uploadAvatar,
    getAllTrips
}