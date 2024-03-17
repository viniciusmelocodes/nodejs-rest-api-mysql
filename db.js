const Sequelize = require('sequelize');
const sequelize = new Sequelize('nome_banco', 'root', 'senha_root', { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;