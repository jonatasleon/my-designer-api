export default claspModel => ({
  getAll: () => claspModel.getAll(),
  create: (clasp) => claspModel.create(clasp),
})
