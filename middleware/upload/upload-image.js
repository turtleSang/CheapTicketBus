const multer = require("multer");
const { mkdirp } = require("mkdirp");

const uploadImage = (type) => {

    let pathStorage = mkdirp.sync(`./public/images/${type}`)

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "./public/images/avatars")//set up chỗ cần lưu
        },
        filename: (req, file, cb) => {

            cb(null, Date.now() + "_" + file.originalname)//đặt lại tên cho file
        }
    })

    const upload = multer({
        storage: storage,
        fileFilter: (req, file, cb) => {
            const extentsionImageList = [".png", ".jpg"]
            const extention = file.originalname.slice(-4);
            let check = extentsionImageList.includes(extention);
            if (check) {
                req.acceptFile = true;
                cb(null, true)
            } else {
                req.acceptFile = false;
                req.err = "Không đúng định dạng file";
                cb(null, false)
            }
        }
    });
    return  upload.single(type);
}

module.exports = {uploadImage};