export default cordStoneModel => ({
  getAll: () => cordStoneModel.getAll(),
  create: (cordStone) => cordStoneModel.create(cordStone),
})
