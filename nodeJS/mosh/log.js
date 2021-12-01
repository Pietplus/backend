var url = "http://mylogger.io/log";

function log(message){
    // send an http request
    console.log(message)
}

// lets make this module accessible!

module.exports = log;
