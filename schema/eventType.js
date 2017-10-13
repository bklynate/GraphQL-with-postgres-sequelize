const graphql = require("graphql");
const graphql_custom_types = require("graphql-custom-types");
const { GraphQLObjectType, GraphQLString } = graphql;
const { GraphQLDateTime } = graphql_custom_types;

const OrganizationType = require("./organizationType");

const EventType = new GraphQLObjectType({
  name: "Event",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    date: { type: GraphQLDateTime },
    address: { type: GraphQLString },
    description: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    organization: {
      type: OrganizationType,
      resolve(event) {
        return event.getOrganization();
      }
    }
  })
});

module.exports = EventType;
