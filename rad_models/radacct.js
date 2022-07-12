/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('radacct', {
        radacctid: {
            type: 'BIGINT(21)',
            allowNull: false,
            defaultValue: null,
            primaryKey: true,
            autoIncrement: true,
            comment: null,
            foreignKey: [Object]
        },
        acctsessionid: {
            type: 'VARCHAR(64)',
            allowNull: false,
            defaultValue: '',
            primaryKey: false,
            autoIncrement: false,
            comment: null
        },
        acctuniqueid: {
            type: 'VARCHAR(32)',
            allowNull: false,
            defaultValue: '',
            primaryKey: false,
            autoIncrement: false,
            comment: null,
            foreignKey: [Object]
        },
        username: {
            type: 'VARCHAR(64)',
            allowNull: false,
            defaultValue: '',
            primaryKey: false,
            autoIncrement: false,
            comment: null
        },
        groupname: {
            type: 'VARCHAR(64)',
            allowNull: false,
            defaultValue: '',
            primaryKey: false,
            autoIncrement: false,
            comment: null
        },
        realm: {
            type: 'VARCHAR(64)',
            allowNull: true,
            defaultValue: '',
            primaryKey: false,
            autoIncrement: false,
            comment: null
        },
        nasipaddress: {
            type: 'VARCHAR(15)',
            allowNull: false,
            defaultValue: '',
            primaryKey: false,
            autoIncrement: false,
            comment: null
        },
        nasportid: {
            type: 'VARCHAR(15)',
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null
        },
        nasporttype: {
            type: 'VARCHAR(32)',
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null
        },
        acctstarttime: {
            type: 'DATETIME',
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null
        },
        acctupdatetime: {
            type: 'DATETIME',
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null
        },
        acctstoptime: {
            type: 'DATETIME',
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null
        },
        acctinterval: {
            type: 'INT(12)',
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null
        },
        acctsessiontime: {
            type: 'INT(12) UNSIGNED',
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null
        },
        acctauthentic: {
            type: 'VARCHAR(32)',
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null
        },
        connectinfo_start: {
            type: 'VARCHAR(50)',
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null
        },
        connectinfo_stop: {
            type: 'VARCHAR(50)',
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null
        },
        acctinputoctets: {
            type: 'BIGINT(20)',
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null
        },
        acctoutputoctets: {
            type: 'BIGINT(20)',
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null
        },
        calledstationid: {
            type: 'VARCHAR(50)',
            allowNull: false,
            defaultValue: '',
            primaryKey: false,
            autoIncrement: false,
            comment: null
        },
        callingstationid: {
            type: 'VARCHAR(50)',
            allowNull: false,
            defaultValue: '',
            primaryKey: false,
            autoIncrement: false,
            comment: null
        },
        acctterminatecause: {
            type: 'VARCHAR(32)',
            allowNull: false,
            defaultValue: '',
            primaryKey: false,
            autoIncrement: false,
            comment: null
        },
        servicetype: {
            type: 'VARCHAR(32)',
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null
        },
        framedprotocol: {
            type: 'VARCHAR(32)',
            allowNull: true,
            defaultValue: null,
            primaryKey: false,
            autoIncrement: false,
            comment: null
        },
        framedipaddress: {
            type: 'VARCHAR(15)',
            allowNull: false,
            defaultValue: '',
            primaryKey: false,
            autoIncrement: false,
            comment: null
        }
    }, {
        tableName: 'radacct'
    });
};