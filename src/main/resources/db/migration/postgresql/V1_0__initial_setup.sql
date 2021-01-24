CREATE TABLE bethast_administration (
    ID BIGSERIAL PRIMARY KEY,
    TABLE_NAME TEXT NOT NULL,
    EXPOSE_REST_API BOOLEAN NOT NULL
);

-- TODO make username and login configurable
CREATE ROLE operation LOGIN PASSWORD 'bethast';

GRANT SELECT, INSERT, UPDATE, DELETE ON bethast_administration TO operation;
