
import express from "express";
import * as controller from './controllers/controller.js';
const app = express();
app.use(express.json());
const router = express.Router();

router.get('/', controller.obtenerUsuarios);
router.get('/:id', controller.obtenerUsuarioById);
router.post('/', controller.crearUsuario);
router.delete('/:id', controller.deleteUsuario);

app.use(router); 

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});