db.resumoProdutos.insertOne({ franquia: "McDonalds", totalProdutos: 5 });

db.resumoProdutos.findOne({ franquia: { $eq: "McDonalds" } }, { _id: 0 });