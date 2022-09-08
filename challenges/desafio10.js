db.produtos.find({
  $and: [
    {'valoresNutricionais.3.percentual': {$gte: 30}},
    {'valoresNutricionais.3.percentual': {$lte: 40}}
  ]
}, {
  _id: 0,
  nome: 1
});