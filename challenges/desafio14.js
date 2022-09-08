db.produtos.updateMany({}, {
  $push: {
    valoresNutricionais: {
      $each: [],
      $slice: 3,
    },
  },
});

db.produtos.find({
  ingredientes: {
    $elemMatch: { $eq: "picles" },
  },
}, {
  _id: 0,
  nome: 1,
  ingredientes: 1,
  valoresNutricionais: 1,
});