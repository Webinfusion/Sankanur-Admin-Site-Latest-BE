const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const routes = require('./routers/index.router');
app.use(cors());

// This automatically parses JSON payloads and URL-encoded data
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// Error handling middleware for request size too large
// app.use((err, req, res, next) => {
//   if (err.type === 'entity.too.large') {
//       res.status(413).send('Payload too large');
//   } else {
//       next(err);
//   }
// });

// app.use((req, res, next) => {
//   console.log(`Received request with Content-Length: ${req.headers['content-length']}`);
//   next();
// });

function listen() {
  console.log('Express app started on port ' + 3005);
  return app.listen(3005);
}

app.use('/', routes);

const server = listen();
