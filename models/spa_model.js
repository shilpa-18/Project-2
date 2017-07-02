const db = require('../db/setup');

const findAllByUser = (userId) => {
	return db.any('SELECT * FROM spa WHERE user_id = $1', [userId]);
}

const findById = (spaId, userId) => {
	return db.oneOrNone('SELECT * FROM spa WHERE id = $1 AND user_id = $2'[spaId, userId]);
}

//
const create = (spa)=> {
	return db.one(`INSERT INTO spa
	(name, address, id)	
	VALUES ($1, $2, $3) RETURNING *`,
	[spa.name, spa.address, spa.id]);	
}

const update = (spa, spaId, userId) => {
	return db.oneOrNone(`UPDATE spa 
	SET name = $1, id = $2, lat = $3, long = $4, icon = $5, user_id = $6
	WHERE id = $5 AND user_id = $6 RETURNING id`,
	[spa.name, spa.id, spa.lat, spa.long, spa.icon, spa.user_id]);
}

const destroy = (spaId, userId) => {
	return db.none(`DELETE FROM spa WHERE id = $1 AND user_id = $2`,
	[spaId, userId]);
}


module.exports = { findAllByUser, findById, create, update, destroy};