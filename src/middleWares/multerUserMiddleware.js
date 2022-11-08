const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, ('./public/images/user'))
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
      }
});
const multerUserMiddleware = multer({storage});

module.exports = multerUserMiddleware;