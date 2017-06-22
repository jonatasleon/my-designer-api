const db = require('./neo4j');
const { mapRecord, defaultCatch: _defaultCatch } = require('./helpers');

const defaultCatch = _defaultCatch(db);

const label = 'cordStone';
const name = 'CordStone';

const createStmt = `CREATE (${ label }:${ name } { name: { name }, colors: { colors } })`;
const getAllStmt = `MATCH (${ label }:${ name }) RETURN ${ label }`;
const deleteAllStmt = `MATCH (${ label }:${ name }) DETACH DELETE ${ label }`;

module.exports = {
  create: cordStone => db.run(createStmt, cordStone)
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
