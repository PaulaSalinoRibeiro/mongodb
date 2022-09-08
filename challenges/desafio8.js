db.produtos.deleteMany({ curtidas: { $lt: 50 } });

db.produtos.find({}, { _id: 0, nome: 1 });