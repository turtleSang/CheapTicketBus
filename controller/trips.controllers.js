const { Trips, Station } = require("../models");

const createTrip = async (req, res) => {
    let { fromStation, toStation, startTime, price } = req.body;
    console.log(fromStation, toStation, startTime, price);
    try {
        const newTrip = await Trips.create({ fromStation, toStation, startTime, price });
        res.status(201).send(newTrip);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getAllTrips = async (req, res) => {

    let listTrips = await Trips.findAll({
        include: [
            {
                model: Station,
                as: 'from'
            },
            {
                model: Station,
                as: 'to'
            }

        ]
    });
    res.status(200).send(listTrips);
}

const getDetailTrips = async (req,res)=>{
    const {id}= req.params;

    let tripFounded = await Trips.findOne({
        where: {id},
        include: [
            {
                model: Station,
                as: 'from'
            },
            {
                model:Station,
                as : 'to'
            }
        ]
    });
    if (tripFounded) {
        res.status(200).send(tripFounded);
    }else{
        res.status(404).send("not found");
    }
    
}

const deleteTrips = async (req, res) =>{
    const {id} = req.params;
    try {
        await Trips.destroy({
            where: {
                id
            }
        })
        res.status(200).send(`đã xóa trip id = ${id}`);
    } catch (error) {
        res.status(404).send(`not found`);
    }
}

const updateTrips = async (req, res) =>{
    const {id} = req.params;
    const dataTripUpdate = req.body;

    let tripsFounded = await Trips.findOne({
        where: {
            id
        }
    })
    if (tripsFounded) {
        await Trips.update(dataTripUpdate,{
            where:{
                id
            }
        })
        res.status(201).send(`Đã delet thành công Trips: ${id}`);
    } else {
        res.status(404).send(`not found`);
    }

}

module.exports = {
    createTrip,
    getAllTrips,
    getDetailTrips,
    deleteTrips,
    updateTrips
}