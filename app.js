const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);


// lugar.getlugarLatLng(argv.direccion)
//     .then(res => {
//         console.log(res);
//     });



// console.log(argv.direccion);

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getlugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El Clima de ${coords.direccion} es de ${temp}.`;

    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;

    }
};
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);






// ! 2 : ......... ...



// ! 2 : ...........

// ! aaaaaa
// ? 
// // @ param my my Param 
// TODO 
// * ssdf
// + fraasdsadsa
// - adsadsa
// }  fsdsf
// / asa#8
// { asdsadsa
// ¿ asdaas
// ¡ aasdsadad
// $ assadasda
// # paoasadasd