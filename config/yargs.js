const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciusdad parra obtener',
        demand: 'true'
    }
}).argv;

module.exports = {
    argv
};