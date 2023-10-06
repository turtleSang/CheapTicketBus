const { Station } = require("../models");
const { Op } = require("sequelize");

const createStation = async (req, res) => {
    let { name, address, province } = req.body;
    try {
        const newStation = await Station.create({ name, address, province });
        res.status(201).send(newStation);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getAllStation = async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            let stationList = await Station.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                }
            });
            res.status(200).send(stationList);
        } else {
            let stationList = await Station.findAll();
            res.status(200).send(stationList);
        }


    } catch (error) {
        res.status(500).send(error);
    }
}

const getDetailStation = async (req, res) => {
    const { id } = req.params;
    try {
        let newStation = await Station.findOne({
            where: {
                id,
            }
        })
        res.status(200).send(newStation);
    } catch (error) {
        res.status(500).send(error);

    }
}

const updateDetailStation = async (req, res) => {
    const { id } = req.params;
    const { name, address, province } = req.body;
    try {
        let deatailStation = await Station.findOne({
            where: {
                id
            }
        })
        deatailStation.name = name;
        deatailStation.address = address;
        deatailStation.province = province;
        await deatailStation.save();
        res.status(200).send(deatailStation);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteStation = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        await Station.destroy({
            where: {
                id
            }
        })

        res.status(200).send("xóa thành công");
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    createStation,
    getAllStation,
    getDetailStation,
    updateDetailStation,
    deleteStation
}