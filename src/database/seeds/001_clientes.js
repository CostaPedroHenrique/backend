
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clientes').del()
    .then(function () {
      // Inserts seed entries
      return knex('clientes').insert([
        {name:'Pedro', email:'devpedrohenrique@gmail.com', latitude:-6.114508799999999, longitude:-38.2205952},
        {name:'Vitor', email:'vitor@gmail.com', latitude:-6.114508799999999, longitude:-38.2205952},
        {name:'Andressa', email:'andressa@gmail.com', latitude:-6.114508799999999, longitude:-38.2205952},
        {name:'Miguel', email:'miguel@gmail.com', latitude:-6.114508799999999, longitude:-38.2205952},
        {name:'Tatá', email:'tatá@gmail.com', latitude:-6.114508799999999, longitude:-38.2205952}
      ]);
    });
};
