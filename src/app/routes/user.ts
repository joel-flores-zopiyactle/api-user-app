import {Router} from 'express';
const router:Router = Router();
import {userController} from '../controllers/user.controller';
import { ValidateCreate } from '../validators/user';
import { ValidateAuth } from '../validators/valideAuth';



router.post('/singup', ValidateCreate, userController.singUp);
router.post('/singin', ValidateAuth, userController.singIn);
router.get('/:id', userController.getUser);

module.exports =  router