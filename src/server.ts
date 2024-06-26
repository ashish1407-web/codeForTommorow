import http from 'http';
import { Server } from 'socket.io';
import app from './app';
import socketHandler from './socket/socketHandelar';

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

socketHandler(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
