const graphql = require("graphql");
const LocationType = require("./locationType");
const OrganizationType = require("./organizationType");
const EventType = require("./eventType");
const Db = require("../models")

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    organization: {
      type: OrganizationType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(root, args) {
        return Db.Organization.findById(args.id)
      }
    },
    organizations: {
      type: new GraphQLList(OrganizationType),
      resolve(_, args) {
        return Db.Organization.findAll();
      }
    },
    locations: {
      type: new GraphQLList(LocationType),
      resolve(_, args) {
        return Db.Location.findAll();
      }
    },
    events: {
      type: new GraphQLList(EventType),
      resolve(_, args) {
        return Db.Event.findAll();
      }
    }
  }
});

module.exports = RootQuery;
