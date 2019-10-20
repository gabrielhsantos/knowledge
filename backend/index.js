const app = require('express')();
const consign = require('consign');
app.db = require('./config/db');
app.mongoose = require('mongoose');
require('./config/mongodb');

consign({ verbose: false })
  .include('./config/passport.js')
  .then('./config/middlewares.js')
  .then('./api/validation.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app);

app.listen(3000, () => {
  console.log('Backend executando...');
});