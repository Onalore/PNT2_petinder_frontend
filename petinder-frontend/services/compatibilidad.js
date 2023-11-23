let usuario = {
    // Datos predeterminados del usuario
    m2Disponibles: 200,
    horasAlDia: 15,
    animales: true,
    ninios: true,
    tamanio: "Mediano"
};

export const guardarUsuario = (user) => {
  usuario = user;
};

export const obtenerIndice = (mascota) => {
  let indice = 0;

  //Comparacion de m2 disponibles con necesitados
  const porcentajeDiferenciaM2 =
    (usuario.m2Disponibles - mascota.m2) / mascota.m2;

  if (porcentajeDiferenciaM2 >= -0.2) {
    indice += 45;
  } else if (porcentajeDiferenciaM2 >= -0.4) {
    indice += 20;
  } else {
    indice -= 15;
  }

  //Comparacion de horas
  const horasFuera = 24 - usuario.horasAlDia;

  if (horasFuera <= mascota.horasSolo) {
    indice += 35;
  } else {
    indice -= 20;
  }

    //Convivencia con otros animales
    // Si el usuario no tiene otros animales no entra
    if (usuario.animales) {
        if (mascota.conviveAnimales) {
            indice += 20;
        } else {
            indice -= 40;
        }
    } else {
        indice += 20;
    }

  //Convivencia con ninios
  //Si el usuario no tiene ninios no entra
    if (usuario.ninios) {
        if (mascota.conviveNinios) {
            indice += 20;
        } else {
            indice -= 40;
        }
    } else {
        indice += 20;
    }


  //Coincidencia de tama�o
  if (usuario.tamanio === mascota.tamanio) {
    indice += 20;
  } else if (usuario.tamanio == "Chico" && mascota.tamanio == "Grande") {
    indice -= 5;
  } else if (usuario.tamanio == "Chico" && mascota.tamanio == "Mediano") {
    indice -= 2;
  } else if (usuario.tamanio == "Mediano" && mascota.tamanio == "Grande") {
    indice -= 2;
  }

  // Asegurarse de que el indice se encuentre en el rango de 0 a 100
  indice = Math.max(0, Math.min(100, indice));

  return indice;
};
