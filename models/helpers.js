module.exports = {
  mapRecord: label => (record) => {
    const target = {
      id: record.toObject()[label].identity.toInt(),
    };
    return Object.assign(target, record.toObject()[label].properties);
  },
  defaultCatch: db => (err) => {
    db.close();
    throw err;
  },
};
