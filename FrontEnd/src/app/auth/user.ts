export interface User {

    contrasena: string;
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    email: string;
}

export interface UserLogin {
    email: string;
    contrasena: string;
}