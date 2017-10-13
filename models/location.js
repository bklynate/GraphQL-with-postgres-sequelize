module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define("Location", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    latitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    longitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  },
  {
    classMethods: {
      associate: (models) => {
        Location.belongsTo(models.Organization, {foreignKey: 'organization_id'})
      }
    }
  });
  return Location;
};
