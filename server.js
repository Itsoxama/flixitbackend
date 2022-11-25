


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const subscriberroute = require("./Routes/Subscriber.route");
const UserRouteProf = require('./Routes/Userroute');

const PORT = process.env.PORT || 4000;
const path = require("path");

__dirname = path.resolve()
app.use(express.static(path.join(__dirname, './myapp/build')))

app.use(cors({ origin: '*' }));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});





app.use(cors());
app.use(bodyParser.json());
mongoose.connect(
    'mongodb+srv://admin:adminx@cluster0.dadf0ac.mongodb.net/?retryWrites=true&w=majority'
    , { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})






app.use('/api/signup', subscriberroute);
app.use('/api/client', UserRouteProf);





app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './myapp', 'build', 'index.html'))

})
app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});