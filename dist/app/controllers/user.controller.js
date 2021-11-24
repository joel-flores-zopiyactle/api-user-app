"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_1 = __importDefault(require("./../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserController {
    singUp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //TODO: Se crea el modelo
                const usuario = new user_1.default({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                });
                // Encriptamos la contraseña
                usuario.password = yield usuario.encryptPassword(req.body.password);
                // TODO: Se gurda el usuario a la BD
                const userSave = yield usuario.save();
                // TODO:Generamos un Token
                const token = jsonwebtoken_1.default.sign({ id: userSave._id }, process.env.TOKEN_SECRET || 'api_2021', {
                    expiresIn: 60 * 60 * 24
                });
                // TODO: Si todo es success se regresa los datos al usuario
                res.status(201).json({
                    token: token
                });
            }
            catch (error) {
                res.status(500);
                res.send(error);
            }
        });
    }
    singIn(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // TODO: Se consulta el usuario por "email" si todo es exitso se devuelve los datos (email, password, _id)
                const usuario = yield user_1.default.findOne({ 'email': req.body.email }, 'email password');
                // TODO: Valido si se encuntro resulatado a la bd con el email recibido
                if (!usuario) {
                    res.status(200).json({ data: 'Correo invalido' });
                }
                // TODO: Valido si la contraseña es correcto 
                const verifyPassword = (yield (usuario === null || usuario === void 0 ? void 0 : usuario.validatePassword(req.body.password))) || false;
                if (!verifyPassword) {
                    res.status(200).json({ data: 'Contraseña invalido' });
                }
                // Token
                const token = jsonwebtoken_1.default.sign({ id: usuario === null || usuario === void 0 ? void 0 : usuario._id }, process.env.TOKEN_SECRET || 'api_2021', {
                    expiresIn: 60 * 60 * 24
                });
                // TODO: Si todo fue success devulevo los datos al usuario
                res.status(200).json({
                    token: token
                });
            }
            catch (error) {
                res.status(500);
                res.send(error);
            }
        });
    }
    getUser(req, res) {
    }
}
exports.userController = new UserController();
