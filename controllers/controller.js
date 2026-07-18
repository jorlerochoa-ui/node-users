import * as model from '../model/model.js'; // Nota: Debes poner la extensión .js

export const obtenerUsuarios = (req, res) => {
    res.json(model.getUsuariosFromDb());
};

export const crearUsuario = (req, res) => {
    const nuevoUsuario = req.body;
    let usuarios=model.getUsuariosFromDb();
    nuevoUsuario.id= usuarios.length > 0 ? usuarios[usuarios.length - 1].id +1 :1;
    usuarios.push(nuevoUsuario);
    model.saveUsuariosToDb(usuarios);
    res.status(201).json({ message: "Usuario creado" });
};

export const obtenerUsuarioById = (req, res) => {
    const id = parseInt(req.params.id);
    const data = model.getUsuariosFromDb();
    const usuario=data.find(user => user.id === id)
    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({ message: "Usuario no encontrado" });
    }
};

export const deleteUsuario = (req, res) => {
    const id = parseInt(req.params.id);
    const data = model.getUsuariosFromDb();
    const usuarioExiste=data.find(user => user.id === id)
    if (usuarioExiste) {
       const nuevosUsuarios = data.filter(u => u.id !== id);
       model.saveUsuariosToDb(nuevosUsuarios);
    } else {
        res.status(404).json({ message: "Usuario no encontrado" });
    }
};