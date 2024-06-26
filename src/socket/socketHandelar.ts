import { Server, Socket } from 'socket.io';

const socketHandler = (io: Server) => {
  io.on('connection', (socket: Socket) => {
    console.log('A user connected');

    socket.on('joinRoom', (room) => {
      socket.join(room);
    });

    socket.on('leaveRoom', (room) => {
      socket.leave(room);
    });

    socket.on('message', (message) => {
      io.to(message.room).emit('message', message);
    });

    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });
};
export default socketHandler;





