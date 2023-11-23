let usuario = null;

export const guardarUsuario = (user) => {
  usuario = user;
};

export const obtenerIndice = (mascota) => {
  let indice = 0;

  //Comparaci�n de m2 disponibles
  const porcentajeDiferenciaM2 =
    (usuario.m2Disponibles - mascota.m2) / mascota.m2;

  if (porcentajeDiferenciaM2 >= -0.2) {
    indice += 65;
  } else if (porcentajeDiferenciaM2 >= -0.4) {
    indice += 15;
  } else {
    indice -= 5;
  }

  //Comparacion de horas
  const horasFuera = 24 - usuario.horasAlDia;

  if (horasFuera <= mascota.horasSolo) {
    indice += 45;
  } else {
    indice -= 15;
  }

  //Convivencia con otros animales
  if (usuario.animales === mascota.conviveAnimales) {
    indice += 50;
  } else {
    indice -= 20;
  }

  //Convivencia con ni�os
  if (usuario.ninios === mascota.conviveNinios) {
    indice += 40;
  } else {
    indice -= 15;
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

  // Asegurarse de que el �ndice est� en el rango de 0 a 100
  indice = Math.max(0, Math.min(100, indice));

  return indice;
};
