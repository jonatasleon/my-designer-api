const db = require('./neo4j');
const { mapRecord, defaultCatch: _defaultCatch } = require('./helpers');

const defaultCatch = _defaultCatch(db);

const label = 'cord';
const name = 'Cord';

const createStmt = `CREATE (${ label }:${ name } { material: { material }, maxPositions: { maxPositions } })`;
const getAllStmt = `MATCH (${ label }:${ name }) RETURN ${ label }`;
const deleteAllStmt = `MATCH (${ label }:${ name }) DETACH DELETE ${ label }`;

export default {
  create: cord => db.run(createStmt, cord)
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
