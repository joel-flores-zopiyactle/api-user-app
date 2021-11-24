import express from 'express';
const router = express.Router();
import fs from 'fs';

const pathRouter:string = `${__dirname}`;

const removeExtension = (fileName:string) => {
    // console.log(fileName);
    
    return fileName.split('.').shift() || '';
}


fs.readdirSync(pathRouter).filter((file) => {
    //console.log('-----> ', file);
   /* console.log('--->', removeExtension(file)); */
   const fileWithOutEXt:string = removeExtension(file)
   //console.log(fileWithOutEXt);
   
   const skip = ['index'].includes(fileWithOutEXt) // return false or true
   //console.log(skip);
   
   if (!skip) {
       router.use(`/${fileWithOutEXt}`,require(`./${fileWithOutEXt}`));
       //router.use(`/${fileWithOutEXt}`, require(`./${fileWithOutEXt}`)) //TODO: localhost/users
       console.log('CARGAR RUTA ---->', fileWithOutEXt);
   }
})

router.get('*', (req, res) => {
    res.status(404);
    res.send({
        error: ` URL No Found`
    });
}) 

module.exports =  router
