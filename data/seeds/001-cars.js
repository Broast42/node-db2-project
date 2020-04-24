
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          id: 1, 
          vin: 00001, 
          make: "seeded car1", 
          model: "model1", 
          mileage: 100, 
          transmission: "type1", 
          status: "clean"
        },
        {
          id: 2, 
          vin: 00002, 
          make: "seeded car2", 
          model: "model2", 
          mileage: 100, 
          transmission: "type2", 
          status: "clean"
        },
        
      ]);
    });
};
