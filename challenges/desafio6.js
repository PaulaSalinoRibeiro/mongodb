db.produtos.find({
  $and: [
    { curtidas: { $gt: 10 } },
    { curtidas: { $lt: 100 } },
  ],
}, {
  _id: 0,
  nome: 1,
  curtidas: 1,
});