// const { url } = require("inspector");
// const admin = require("./admin");

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  // url: "https://liamhjalmarsson.com/api",
  // admin: {
  //   url: "https://liamhjalmarsson.com/dashboard",
  // },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
