module.exports = function (sequelize, DataTypes) {
        let locals = sequelize.define("locals",{
                place_id: {
                  type: DataTypes.STRING,
                  unique: true
                },
                name: {
                  type: DataTypes.STRING,
                  allowNull: false,
                },
                awards: {
                  type: DataTypes.STRING,
                  allowNull: true,
                },
                resturants: {
                  type: DataTypes.STRING,
                  allowNull: false,
                },
                city: {
                    type: DataTypes.STRING,
                    allowNull: false,
                }
              });
            
              return locals;
            };