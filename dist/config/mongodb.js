"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conexion = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class ConexionDB {
    connectDB() {
        const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/api-user';
        mongoose_1.default.connect(DB_URI)
            .then(res => {
            console.log('**** CONEXION ESTABLECIDA A MONGODB ****');
        }).catch(err => {
            console.log('**** FALLO LA CONEXION A MONGODB **** ');
            console.log(err);
        });
    }
    desconnectDB() {
    }
}
exports.conexion = new ConexionDB();
