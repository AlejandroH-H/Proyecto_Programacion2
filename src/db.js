const { createPool } = require('mysql2/promise'); //Se indica Promise para que Node tome cada conexión como una promesa

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'Alejenial2106.',
    port: 3306,
    database: 'preSeleccionCursos'
});

module.exports = pool;