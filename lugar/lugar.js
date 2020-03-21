//  ! 2: ............
const axios = require('axios');
// ! 2 : ............


const getlugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir); //El encodeURI es para convertir los espacios en blancos en no validos

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
        headers: { 'x-rapidapi-key': '9d4b54384amsh0936006ee5a2636p1ae30fjsn88b0b893885c' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`Hay un Error con la ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {

        direccion,
        lat,
        lng
    };
};
module.exports = {
    getlugarLatLng

};

// instance.get()
//     .then(res => {
//         console.log(res.data.Results[0]);

//     })
//     .catch(err => {
//         console.log("Errorr !!", err);
//     });