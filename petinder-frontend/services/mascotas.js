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

const seleccionarImagen = () => {
    const imagenes = [
        require("../assets/imgsPerro/1.jpeg"),
        require("../assets/imgsPerro/2.jpeg"),
        require("../assets/imgsPerro/3.jpeg"),
        require("../assets/imgsPerro/4.jpeg"),
        require("../assets/imgsPerro/5.jpeg"),
        require("../assets/imgsPerro/6.jpeg"),
        require("../assets/imgsPerro/7.jpeg"),
        require("../assets/imgsPerro/8.jpg"),
        require("../assets/imgsPerro/9.jpg"),
        require("../assets/imgsPerro/10.jpg"),
        require("../assets/imgsPerro/11.jpg"),
        require("../assets/imgsPerro/12.jpg"),
        require("../assets/imgsPerro/13.jpg"),
        require("../assets/imgsPerro/14.jpg"),
        require("../assets/imgsPerro/15.jpg"),
    ];
    return imagenes[random(0, imagenes.length)];
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
        imagen: seleccionarImagen(),
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

//console.log(mascotas); // Esto mostrará las mascotas generadas en la consola

// exportamos las mascotas
export default mascotas;
