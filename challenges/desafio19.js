db.produtos.updateMany({}, {
  $pull: {
    ingredientes: {
      $eq: "cebola",
    },
  },
});

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });