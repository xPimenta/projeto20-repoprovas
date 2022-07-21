import app from './app.js';
import './config/setup.js';

const port = +process.env.PORT;
app.listen(port, () => {
  console.log('Server listening on port', port);
});
