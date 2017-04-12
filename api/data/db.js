//This connection file actually uses mongoose...
var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/meanhotel';

mongoose.connect(dburl);

//3 mongoose connection event listeners
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dburl);
});
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});

//3 termination event listeners.. supposed to only work on unix.. but some working on windows?
process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination (SIGINT)');
        process.exit(0);
    });
});

process.on('SIGTERM', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination (SIGTERM)');
        process.exit(0);
    });
});

process.once('SIGUSR2', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination (SIGUSR2)');
        process.kill(process.pid, 'SIGUSR2');
    });
});