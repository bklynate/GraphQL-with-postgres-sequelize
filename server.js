const express = require("express");
const _ = require("lodash");
const Faker = require("faker");
const expressGraphQL = require("express-graphql");
const schema = require("./schema/schema");
const Db = require('./models');
const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 4000;

Db.sequelize.sync({force: true})
  .then(() => {
    return Promise.all([
      Db.Organization.create({
        ogName: Faker.company.companyName()
      }),
      Db.Organization.create({
        ogName: Faker.company.companyName()
      }),
      Db.Organization.create({
        ogName: Faker.company.companyName()
      })
    ])
  }).then(() => {
    app.listen(PORT, ()=>{
      console.log(`Alive on PORT: ${PORT}`)
    })
  })
