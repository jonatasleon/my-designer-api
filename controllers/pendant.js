export default pendantModel => ({
  getAll: () => pendantModel.getAll(),
  create: (pendant) => pendantModel.create(pendant),
})
