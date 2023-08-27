const Sequelize = require('sequelize');
const dbName = 'Your Database Name';
const dbUser = 'Your Database User';
const dbPassword = 'Your Database Password';

const sequelize = new Sequelize(dbName, dbUser, dbPassword ,{
    host:'localhost',
    port:'Default_PORT',
    dialect:'mysql'
});

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize


db.customers = require('./customer.model')(sequelize, Sequelize);



module.exports = db;