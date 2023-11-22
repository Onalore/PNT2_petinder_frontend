let usuario = null;

export const guardarUsuario = (user) => { usuario = user; };

export const obtenerIndice = (mascota) => {
    let indice = 0;

    //Comparación de m2 disponibles
    const porcentajeDiferenciaM2 = (usuario.m2Disponibles - mascota.m2) / mascota.m2;

    if (porcentajeDiferenciaM2 >= -0.1) {
        indice += 25;
    } else if (porcentajeDiferenciaM2 >= -0.2) {
        indice += 15;
    } else {
        indice -= 30;
    }

    //Comparación de horas
    const diferenciaHoras = Math.abs(usuario.horasAlDia - mascota.horasSolo);

    if (diferenciaHoras <= 1) {
        indice += 25;
    } else if (diferenciaHoras === 2) {
        indice += 10;
    } else {
        indice -= 35;
    }

    //Convivencia con otros animales
    if (usuario.animales === mascota.conviveAnimales) {
        indice += 30;
    } else {
        indice -= 40;
    }

    //Convivencia con niños
    if (usuario.ninios === mascota.conviveNinios) {
        indice += 30;
    } else {
        indice -= 40;
    }

    //Coincidencia de tamaño
    if (usuario.tamanio === mascota.tamanio) {
        indice += 20;
    } else if (usuario.tamanio == "Chico" && mascota.tamanio == "Grande") {
        indice -= 10
    } else if (usuario.tamanio == "Chico" && mascota.tamanio == "Mediano") {
        indice -= 5
    } else if (usuario.tamanio == "Mediano" && mascota.tamanio == "Grande") {
        indice -= 5
    }

    // Asegurarse de que el índice esté en el rango de 0 a 100
    indice = Math.max(0, Math.min(100, indice));

    return indice;
};