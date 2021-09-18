# Motorway Backend Engineer Task

Created a simple API to return all the rows in a table of vehichles. The vehichles table is part of a MySQL database.

How to run development server
---

1. Install dependencies from package.json using `npm install`

2. Change settings in `config/config.json` for the development server to correspond with local MySQL database.

3. Populate the database with sequelize using `sequelize db:seed:all`

4.  Run development server with `nodemon` using `npm run dev`

5. To view rows from the vehichles database, navigate to `localhost:3000/api/vehichles`
