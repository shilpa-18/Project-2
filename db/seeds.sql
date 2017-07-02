DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS spa CASCADE;

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	email VARCHAR NOT NULL UNIQUE,
	password_digest VARCHAR NOT NULL
);

CREATE TABLE spa (
	name VARCHAR NOT NULL,
	address VARCHAR, 
	id BIGSERIAL PRIMARY KEY
);