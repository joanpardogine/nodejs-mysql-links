const timeago = require("timeago.js");

//import timeago from 'timeago.js';

//const timeago = require('timeago.js');
const timeagoInstance = timeago;

const helpers = {};

helpers.timeago = (savedTimestamp) => {
    return timeagoInstance.format(savedTimestamp);
};

module.exports = helpers;
//export default helpers;