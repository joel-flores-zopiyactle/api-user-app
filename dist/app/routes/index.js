"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const fs_1 = __importDefault(require("fs"));
const pathRouter = `${__dirname}`;
const removeExtension = (fileName) => {
    // console.log(fileName);
    return fileName.split('.').shift() || '';
};
fs_1.default.readdirSync(pathRouter).filter((file) => {
    //console.log('-----> ', file);
    /* console.log('--->', removeExtension(file)); */
    const fileWithOutEXt = removeExtension(file);
    //console.log(fileWithOutEXt);
    const skip = ['index'].includes(fileWithOutEXt); // return false or true
    //console.log(skip);
    if (!skip) {
        router.use(`/${fileWithOutEXt}`, require(`./${fileWithOutEXt}`));
        //router.use(`/${fileWithOutEXt}`, require(`./${fileWithOutEXt}`)) //TODO: localhost/users
        console.log('CARGAR RUTA ---->', fileWithOutEXt);
    }
});
router.get('*', (req, res) => {
    res.status(404);
    res.send({
        error: ` URL No Found`
    });
});
module.exports = router;
