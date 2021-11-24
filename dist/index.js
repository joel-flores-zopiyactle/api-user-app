"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const mongodb_1 = require("./config/mongodb");
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
/* importamos las rutas */
app.use('/api/1.0', require('./app/routes')); //Obtiene el index.js (por defecto ya toma el index  "./app/routes/index")
//Mongodb
mongodb_1.conexion.connectDB();
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
