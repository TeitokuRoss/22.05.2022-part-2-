const http = require('http');
const app = require('./app'); // специального вида прослушиваель

const PORT = process.env.PORT || 5000;
const httpServer = http.createServer(app);
httpServer.listen(PORT, () => console.log(`Server is listening ${PORT} port`));
