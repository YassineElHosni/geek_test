
function db_tables(tables){
	this.tables = tables;
}
const db_geek_test = new db_tables({
	user: "user",
	sections: "sections"
});

exports.get = {
	SQL_SELECT_SECTIONS: "SELECT * FROM `"+db_geek_test.tables.sections+"`",
	SQL_INSERT_USER: "INSERT INTO `" + db_geek_test.tables.user + "`(`email`,`password`) VALUES (?, ?);",
	SQL_SELECT_USER_BY_EMAIL_PW: "SELECT * FROM `" + db_geek_test.tables.user + "` WHERE `email` = ? and password = ?;",
};