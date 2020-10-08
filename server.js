var express = require('express');
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
const session = require('express-session')
const path = require('path')
const cors = require('cors');

var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const port = process.env.PORT || 3030;

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(cookieParser());
app.use(session({
    secret: 'puki muki secret stuff',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    };
    app.use(cors(corsOptions));
}

const toyRoutes = require('./api/toy/toy.routes')
const authRoutes = require('./api/auth/auth.routes')
const connectSockets = require('./api/socket/socket.routes')

// routes
app.use('/api/toy', toyRoutes)
app.use('/api/auth', authRoutes)
connectSockets(io)





app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})
http.listen(port, function () {
    console.log(`listening at port ${port}`);
});