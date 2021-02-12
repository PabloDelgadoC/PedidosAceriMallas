export interface User {

    contrasena: string;
    nombre: string;
    ruc: string;
    direccion: string;
    telefono: string;
    email: string;
}

export interface UserLogin {
    email: string;
    contrasena: string;
}