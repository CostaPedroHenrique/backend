
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('colaboradores').del()
    .then(function () {
      // Inserts seed entries
      return knex('colaboradores').insert([
        {name:'colabPedro', email:'devpedrohenrique@gmail.com', latitude:-6.114508799999999, longitude:-38.2205952, score:5, available:true},
        {name:'colabVitor', email:'vitor@gmail.com', latitude:-6.114508799999999, longitude:-38.2205952, score:5, available:true},
        {name:'colabAndressa', email:'andressa@gmail.com', latitude:-6.114508799999999, longitude:-38.2205952, score:5, available:true},
        {name:'colabMiguel', email:'miguel@gmail.com', latitude:-6.114508799999999, longitude:-38.2205952, score:5, available:true},
        {name:'colabTatá', email:'tatá@gmail.com', latitude:-6.114508799999999, longitude:-38.2205952, score:5, available:true}
      ]);
    });
};

