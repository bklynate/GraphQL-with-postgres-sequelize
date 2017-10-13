const graphql = require("graphql");
const graphql_custom_types = require("graphql-custom-types");
const Db = require("../models")
const OrganizationType = require("./organizationType");
const LocationType = require("./locationType");
const EventType = require("./eventType");
const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLFloat } = graphql;
const { GraphQLDateTime } = graphql_custom_types;

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addOrganization: {
      type: OrganizationType,
      args: {
        id: { type: GraphQLString },
        ogName: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString }
      },
      resolve(_, args) {
        return Db.Organization.create({...args})
      }
    },
    addLocation: {
      type: LocationType,
      args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        address: { type: GraphQLString },
        latitude: { type: GraphQLFloat },
        longitude: { type: GraphQLFloat },
        organization_id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(root, args) {
        console.log("\nTHIS IS FROM ADDLOCATION ARGS: ", args)
        return Db.Location.create({
          name: args.name,
          address: args.address,
          latitude: args.latitude,
          longitude: args.longitude,
          organization_id: args.organization_id,
        })
      }
    },
    addEvent: {
      type: EventType,
      args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        date: {
          type: GraphQLDateTime,
          resolve() {
            return (new Date()).toISOString()
          }
         },
        address: { type: GraphQLString },
        description: { type: GraphQLString },
        organization_id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(root, args) {
        console.log("\nTHIS IS FROM ADDEVENT ARGS: ", args)
        return Db.Event.create({
          name: args.name,
          address: args.address,
          date: args.date,
          description: args.description,
          organization_id: args.organization_id
        })
      }
    },
  }
});

module.exports = mutation;
