import { Request, Response } from 'express'
import modelUser, { IUser } from './../models/user'; 
import  jwt  from 'jsonwebtoken'

class UserController {

    public async singUp(req:Request, res: Response) {

        try {

            //TODO: Se crea el modelo
            const usuario: IUser = new modelUser({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            });

            // Encriptamos la contraseña
            usuario.password = await usuario.encryptPassword(req.body.password);
    
            // TODO: Se gurda el usuario a la BD
            const userSave = await usuario.save();

            // TODO:Generamos un Token
            const token:string = jwt.sign({id: userSave._id}, process.env.TOKEN_SECRET || 'api_2021', {
                expiresIn: 60 * 60 * 24
            } );
            
            // TODO: Si todo es success se regresa los datos al usuario
            res.status(201).json({
                token: token
            })

        } catch (error) {

            res.status(500)
            res.send(error)
            
        }

    }

    public  async singIn(req:Request, res: Response) {

        try {
            
            // TODO: Se consulta el usuario por "email" si todo es exitso se devuelve los datos (email, password, _id)
            const usuario = await modelUser.findOne({'email': req.body.email}, 'email password');
            
            // TODO: Valido si se encuntro resulatado a la bd con el email recibido
            if(!usuario) { res.status(200).json( {data: 'Correo invalido'}) }

            // TODO: Valido si la contraseña es correcto 
            const verifyPassword:boolean = await usuario?.validatePassword(req.body.password) || false;

            if(!verifyPassword) { res.status(200).json({data: 'Contraseña invalido'})}

            // Token
            const token:string = jwt.sign({id: usuario?._id}, process.env.TOKEN_SECRET || 'api_2021', {
                expiresIn: 60 * 60 * 24
            });
            // TODO: Si todo fue success devulevo los datos al usuario
            res.status(200).json({
                token: token
            })

        } catch (error) {
            
            res.status(500)
            res.send(error)
            
        }

    }

    public getUser(req:Request, res: Response):void {



    }

}

export const userController = new UserController();
