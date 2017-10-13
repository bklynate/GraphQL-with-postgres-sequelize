const graphql = require("graphql");
const Db = require("../models");
const OrganizationType = require("./organizationType");
const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLFloat } = graphql;

const LocationType = new GraphQLObjectType({
  name: "Location",
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve(location) {
        return location.id
      }
    },
    name: {
      type: GraphQLString,
      resolve(location) {
        return location.name;
      }
    },
    address: {
      type: GraphQLString,
      resolve(location) {
        return location.address;
      }
    },
    latitude: {
      type: GraphQLFloat,
      resolve(location) {
        return location.latitude;
      }
    },
    longitude: {
      type: GraphQLFloat,
      resolve(location) {
        return location.longitude;
      }
    },
    createdAt: {
      type: GraphQLString,
      resolve(location) {
        return location.createdAt;
      }
    },
    updatedAt: {
      type: GraphQLString,
      resolve(location) {
        return location.updatedAt;
      }
    },
    organization: {
      type: OrganizationType,
      resolve(location) {
        console.log("Here is the location: ", location);
        return location.getOrganization();
      }
    }
  })
});

module.exports = LocationType;
