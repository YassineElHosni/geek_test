/*
* Module dependencies.
*/
var queries = require('./queries');

function insertUser(user, response) {
	var callee_name = arguments.callee.name;
	db.query(queries.get.SQL_INSERT_USER,
		[
			user.email,
			user.password
		],
		function (error, result) {
			if (error) throw error;
			file_log("routes.user." + callee_name, "user account created succesfully");
			response.send(JSON.stringify({
				error: false,
				message: "User account created succesfully!"
			}));
		});
}
function selectSections(response) {
	var callee_name = arguments.callee.name;
	file_log("routes.sections." + callee_name, "...");
	db.query(
		queries.get.SQL_SELECT_SECTIONS,
		function (error, results) {
			if (error) throw error;
			file_log("routes.sections." + callee_name, "sections succesfully loaded!");

			response.send(JSON.stringify({
				error: false,
				
				data: {
					sections: results
				},
				message: "Succesfully loaded data!"
			}));
		});
}
function selectUserByEmailPw(user, request, response) {
	var callee_name = arguments.callee.name;
	db.query(queries.get.SQL_SELECT_USER_BY_EMAIL_PW,
		[
			user.email,
			user.password
		],
		function (error, results) {
			if (error) throw error;
			if (results.length == 1) {
				user.copyUser(results[0]);
				request.session.user = user.toRequiredObject();

				file_log("routes.user." + callee_name, "user n° " + user.id + " succesfully signed in");

				file_log("routes.user." + callee_name, "requesting sections by user n° " + user.id);
				selectSections(response);
			}
			else {
				file_log("routes.user." + callee_name, "Wrong Credentials", "ERROR");
				response.send(JSON.stringify({
					error: true,
					message: "Wrong credentials!"
				}));
			}
		});
}
exports.insertUser = insertUser;
exports.selectUserByEmailPw = selectUserByEmailPw;

exports.selectSections = selectSections;
