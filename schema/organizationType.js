const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const OrganizationType = new GraphQLObjectType({
  name: "Organization",
  fields: () => ({
    id: { type: GraphQLString },
    ogName: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
});

module.exports = OrganizationType;
