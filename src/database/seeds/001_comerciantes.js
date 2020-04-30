
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comerciantes').del()
    .then(function () {
      // Inserts seed entries
      return knex('comerciantes').insert([
        {name:'comerciantePedro', email:'devpedrohenrique@gmail.com', latitude:-6.114508799999999, longitude:-38.2205952},
        {name:'comercianteVitor', email:'vitor@gmail.com', latitude:-6.114508799999999, longitude:-38.2205952},
        {name:'comercianteAndressa', email:'andressa@gmail.com', latitude:-6.114508799999999, longitude:-38.2205952},
        {name:'comercianteMiguel', email:'miguel@gmail.com', latitude:-6.114508799999999, longitude:-38.2205952},
        {name:'comercianteTatá', email:'tatá@gmail.com', latitude:-6.114508799999999, longitude:-38.2205952}
      ]);
    });
};

