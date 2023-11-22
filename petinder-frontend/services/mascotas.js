// definimos las constantes
const MAX_ELEMENTS = 15;

// definimos las funciones
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const generarNombre = () => {
    const nombres = ["Coco", "Toto", "Cavani", "Lionel", "MacAllister", "Enzo", "Scaloni", "Paredes", "Ota", "Nahuel", "Migue", "Dibu", "Tini", "Anto", "Emilia", "Duki",
                        "Pity", "Pratto", "Duka", "Luquitas", "Beder", "Alfre", "Puchi", "Repo", "Mbappe", "Kolo", "Milka", "Kitty", "Oroco", "Alaska","Cuti","Taglia","Toro"];
    return nombres[random(0, nombres.length)];
};

const generarSexo = () => {
    const sexos = ["Hembra", "Macho"];
    return sexos[random(0, sexos.length)];
};

const generarEdad = () => random(0,25);

const generarTipo = () => {
    const tipos = ["Perro", "Gato", "Conejo"];
    return tipos[random(0, tipos.length)];
}

const generarM2 = () => random(10, 500)

const generarHorasSolo = () => random(0, 24)

const generarConviveAnimales = () => {
    const tipos = ["Si", "No"];
    return tipos[random(0, tipos.length)];
}

const generarConviveNinios = () => {
    const tipos = ["Si", "No"];
    return tipos[random(0, tipos.length)];
}

const generarTamanio = () => {
    const tipos = ["Chico", "Mediano", "Grande"];
    return tipos[random(0, tipos.length)];
}

// generamos las mascotas

const crearMascota = () => {
    return {
        nombre: generarNombre(),
        sexo: generarSexo(),
        edad: generarEdad(),
        tipo: generarTipo(),
        m2: generarM2(),
        horasSolo: generarHorasSolo(),
        conviveAnimales: generarConviveAnimales(),
        conviveNinios: generarConviveNinios(),
        tamanio: generarTamanio()
    }
}


//const mascotas = Array.from({
//    length: MAX_ELEMENTS,
//}, crearMascota())


const mascotas = [];
for (let i = 0; i < MAX_ELEMENTS; i++) {
    mascotas.push(crearMascota());
}

console.log(mascotas); // Esto mostrará las mascotas generadas en la consola

//// exportamos las mascotas
//export default mascotas;
