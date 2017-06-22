export default cordModel => ({
  getAll: () => cordModel.getAll(),
  create: (cord) => cordModel.create(cord),
})
