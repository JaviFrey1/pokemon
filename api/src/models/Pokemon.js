const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      // allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    img: {
      type: DataTypes.STRING, 
      get() {
        return this.getDataValue('img') || "https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1"
      }
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    attack:{
      type: DataTypes.INTEGER
    },
    defense:{
      type: DataTypes.INTEGER
    },
    height:{
      type: DataTypes.STRING
    },
    weight:{
      type: DataTypes.STRING
    },
    speed:{
      type: DataTypes.STRING
    },
    created: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
  sequelize.define('type', {
    name: {
      type: DataTypes.STRING,
    
    }
  });
};
