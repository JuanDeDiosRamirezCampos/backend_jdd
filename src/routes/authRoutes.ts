import { Router, RouterOptions } from "express";
//Clase para funcionalidad de rutas Login

class AuthRoutes {
//Objeto de tipo Router
public router: Router;

//Inicializa

constructor() {
    this.router = Router();
    this.config();
}

config(){
    this.router.get('/',(req,res)=>{
        res.send('Invocando Autenticacion')
    })
}
}
const authRoutes = new AuthRoutes();
 export default authRoutes.router;