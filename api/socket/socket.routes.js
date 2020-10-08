

module.exports = connectSockets

var currToy = null;

function connectSockets(io) {
    const msgs = [];
    io.on('connection', (socket) => {
        socket.emit('chat history', msgs)
        console.log('a user connected');

        // socket.on('disconnect', () => {
        //     console.log('user disconnected');
        // });

        socket.on('toy id', id => {
            if (currToy) {
                socket.leave(currToy)
                console.log("connectSocketsssss -> currToy", currToy)
            }
            console.log("connectSockets -> currToy", currToy)
            console.log("connectSockets -> id", id)
            socket.join(id)
            currToy = id;
        })

        socket.on('chat sendMsg', (msg) => {
            console.log('msg:', msg);
            msgs.push(msg)
            console.log("connectSockets aaaaa-> currToy", currToy)
            io.to(currToy).emit('chat receiveMsg', msg)
        });
    });
}

