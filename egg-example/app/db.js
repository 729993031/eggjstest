const uuidv1 = require("node-uuid").v1;

function generateUUID() {
    return uuidv1().replace(/-/g, "");
}

function defineModel(app,name, attributes) {
    const { UUID,DATE } = app.Sequelize;

    let attrs = {};
    for (let key in attributes) {
        let value = attributes[key];
        if (typeof value === "object" && value["type"]) {
            value.allowNull = value.allowNull && true;
            attrs[key] = value;
        } else {
            attrs[key] = {
                type: value,
                allowNull: true
            };
        }
    }

    attrs.id = {
        type: UUID,
        primaryKey: true,
        defaultValue: () => {
            return generateUUID();
        }
    };
    return app.model.define(name, attrs, {
        version: true,
    });
}

module.exports = { defineModel };