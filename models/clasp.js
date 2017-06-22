const db = require('./neo4j');
const { mapRecord, defaultCatch: _defaultCatch } = require('./helpers');

const defaultCatch = _defaultCatch(db);

const label = 'clasp';
const name = 'Clasp';

const createStmt = `CREATE (${ label }:${ name } { alias: { alias }, color: { color } })`;
const getAllStmt = `MATCH (${ label }:${ name }) RETURN ${ label }`;
const deleteAllStmt = `MATCH (${ label }:${ name }) DETACH DELETE ${ label }`;

module.exports = {
  create: clasp => db.run(createStmt, clasp)
      .then((result) => {
        db.close();
        const data = result.records.map(mapRecord(label));
        return data.pop();
      })
      .catch(defaultCatch),
  getAll: () => db.run(getAllStmt)
      .then((result) => {
        db.close();
        const data = result.records.map(mapRecord(label));
        return data;
      }),
  deleteAll: () => db.run(deleteAllStmt)
      .then(() => {
        db.close();
      })
      .catch(defaultCatch),
};
