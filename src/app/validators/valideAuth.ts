import { Request, Response, NextFunction } from 'express'
import { check } from 'express-validator'
import { validateResult } from '../helpers/validateHelper'

 export const ValidateAuth = [

    check('email')
        .exists()
        .not()
        .notEmpty()
        .isEmail(),
    check('password')
        .exists()
        .not()
        .notEmpty()
        .isString(),       
     
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    }

]