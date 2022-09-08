db.produtos.updateMany(
  { $or: [
    { nome: { $eq: "Big Mac" } },
    { nome: { $eq: "Quarteirão com Queijo" } },
  ] }, 
  {
    $push: {
      ingredientes: "bacon",
    },
  },
);

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });