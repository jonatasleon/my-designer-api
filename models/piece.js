const db = require('./neo4j');
const { mapRecord, defaultCatch: _defaultCatch } = require('./helpers');

const defaultCatch = _defaultCatch(db);

const label = 'piece ';
const name = 'Piece';

const createStmt = `CREATE (${ label }:${ name } { alias: { alias } }),
  (${ label })-[:CLOSES_WITH]->(clasp),
  (${ label })-[:USES]->(cord)<-[:ATTACHES_TO]-(cordStone),
  (pendantStone)-[:FITS_IN]->(pendant)-[:IS_IN]->(position1)
WITH ${ label }
MATCH r=(${ label })-[:CONTAINS|CLOSES_WITH|USES*1..3]-()
RETURN r`;
const getAllStmt = `MATCH r=(:${ name })-[:CONTAINS|CLOSES_WITH|USES*1..3]-()
RETURN r`;
const deleteAllStmt = `MATCH (${ label }:${ name }) DETACH DELETE ${ label }`;

export default {
  create: piece => db.run( createStmt, piece)
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
