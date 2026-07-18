import fs from "fs";

export const getUsuariosFromDb = () => {
    const data = fs.readFileSync("./db.json", "utf-8");
    const json = JSON.parse(data);
    // Si no existe la propiedad 'users', retornamos un array vacío
};

export const saveUsuariosToDb = (usuarios) => {
    const data = fs.readFileSync("./db.json", "utf-8");
    const json = JSON.parse(data);
    // Añadimos o actualizamos los usuarios sin modificar 'books'
    json.users = usuarios;
    fs.writeFileSync("./db.json", JSON.stringify(json, null, 2));
};