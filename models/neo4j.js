import { v1: neo4j } from 'neo4j-driver'
import { debug: _debug } = from 'debug'

debug = _debug('my-designer:model');

const driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', 'root'));

driver.onCompleted = () => {
  debug('Driver succesful');
  const session = driver.session();
  session.run(constraintStmt)
    .then(() => {
      debug(constraintStmt, 'runned');
      session.close();
    });
};

driver.onError = (err) => {
  debug('Driver error\n%O', err);
};

export default driver.session()
