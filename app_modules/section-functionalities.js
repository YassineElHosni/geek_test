/*
* Module dependencies.
*/
var db_request = require('./db-data-access');

function getSections(response) {
    file_log("routes.user." + arguments.callee.name, "requesting the list of sections");
    db_request.selectSections(response);
};
exports.getSections = getSections;