SET client_encoding TO 'UTF-8';
SHOW client_encoding;

CREATE ROLE user_media LOGIN SUPERUSER PASSWORD '1234';

CREATE DATABASE media;

\c media;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--test ucin 
CREATE TABLE admins(
    "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
    "username" CHARACTER VARYING(50) NOT NULL,
    "email" CHARACTER VARYING(50) NOT NULL,
    "role" CHARACTER VARYING(20) DEFAULT 'default' NOT NULL,
    "password" CHARACTER VARYING(100) NOT NULL,
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT clock_timestamp(),
    UNIQUE("email"),
    UNIQUE("username")
);

-- insert into admins(username, email, password)
-- values('admin1', 'admin@gmail.com', '$2a$10$e/N2maNp0Pd/Zb8ne5OteunCmiy/WIJ82.14iEOBVPwtTlbeIYd8G');
