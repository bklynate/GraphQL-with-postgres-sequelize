module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define("Organization", {
    ogName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  },
  {
    classMethods: {
      associate: (models) => {
        Organization.hasMany(models.Location, { foreignKey: 'organization_id' })
        Organization.hasMany(models.Event, { foreignKey: 'organization_id' })
      }
    }
  })

  return Organization;
};
