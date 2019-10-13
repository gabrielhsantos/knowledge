const app = require('express')();
const consign = require('consign');
app.db = require('./config/db');

consign({ verbose: false })
  .then('./config/middlewares.js')
  .then('./api/validation.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app);

app.listen(3000, () => {
  console.log('Backend executando...');
});