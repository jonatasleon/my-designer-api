export default pendantStoneModel => ({
  getAll: () => pendantStoneModel.getAll(),
  create: (pendantStone) => pendantStoneModel.create(pendantStone),
})
