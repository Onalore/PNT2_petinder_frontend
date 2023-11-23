import imagen1 from "../assets/imgsPerro/1.jpg";
import imagen2 from "../assets/imgsPerro/2.jpg";
import imagen3 from "../assets/imgsPerro/3.jpg";
import imagen4 from "../assets/imgsPerro/4.jpg";
import imagen5 from "../assets/imgsPerro/5.jpg";
import imagen6 from "../assets/imgsPerro/6.jpeg";
import imagen7 from "../assets/imgsPerro/7.jpeg";
import imagen8 from "../assets/imgsPerro/8.jpg";
import imagen9 from "../assets/imgsPerro/9.jpg";
import imagen10 from "../assets/imgsPerro/10.jpg";
import imagen11 from "../assets/imgsPerro/11.jpg";
import imagen12 from "../assets/imgsPerro/12.jpg";
import imagen13 from "../assets/imgsPerro/13.jpg";
import imagen14 from "../assets/imgsPerro/14.jpg";
import imagen15 from "../assets/imgsPerro/15.jpg";
// definimos las constantes
const MAX_ELEMENTS = 25;

//defino imagenes
const imagenes = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13, imagen14, imagen15];

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
