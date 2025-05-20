const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

try {

    sequelize.authenticate();
    console.log('Conexão realizada')

} catch (err) {
    console.log(`Erro de conexão: ${err}`);
}

module.exports = sequelize;