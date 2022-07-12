const {Schema, Model} = require('@bakjs/mongo')

class Announcement extends Model {

    static get $schema() {
        return {
            type: {type: String},
            message: {type: String},
            visible: {type: Boolean},
            link: {type: String},
        }
    };

}

module.exports = Announcement.$model;