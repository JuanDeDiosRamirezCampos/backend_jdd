import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes   from './routes/authRoutes';
/*
Clase de inicio de nuestra aplicación NodeJsExpress
Autor: Juan de Dios Ramirez Campos
Fecha: 21 Junio 2023
*/
class Server {
  private app: Application;
//Iniciatiza clase
constructor() {
  this.app = express();
  this.config();
  this.routes();
  this.app.listen(this.app.get("port"), () => {
    console.log("Server on port", this.app.get("port"));
});      
}
//Configuración de modulos
config(): void {
  // configuración del puerto para el servidor
  this.app.set("port", 3001);
 
  // muestra las peticiones en consola
  this.app.use(morgan("dev"));

  // puertos de conexión de la API
  this.app.use(cors());

  // solo se permiten peticiones en formato JSON
  this.app.use(bodyParser.json());
  this.app.use(bodyParser.urlencoded({extended: false,}))
  }
//Configura Las rutas
routes() {
  this.app.use("/",authRoutes)
}
}
const server = new Server();