# Bethast

## Goal

A CMS which provides a REST API (maybe also an OpenAPI Spec).

## Difference to Strapi
Other than Strapi, no Website with HTML-components can be generated.

Furthermore Strapi has still some issues that are annoying.
For example once a component is created, it is not deletable from the Database anymore.
Collection types get a 's' appended even if it was not needed.

## Run the app

This app needs a database.
The best and easiest way is to run a docker.

`docker run --name bethast-postgres -e POSTGRES_USER=bethast -e POSTGRES_PASSWORD=bethast -p 5432:5432 -d postgres`
