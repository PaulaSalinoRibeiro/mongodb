db.produtos.find({
  $and: [
    {nome: {$ne: 'Big Mac'}},
    {nome: {$ne: 'McChicken'}}
  ]
}, 
  {_id: 0, nome: 1, curtidas: 1, vendidos: 1});