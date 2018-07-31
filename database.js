module.exports = function knexData(knex) {
    return {
  
      getAccount: function (email, password) {
        return knex('accounts').where({email: email, password: password})
      },

      getPet: function (petId) {
        return knex('pets').where({id: petId})
      },

      getUserPets: function (userId) {
        return knex('pets').where({account_id: userId})
      },
  
      insertAccount: function (name, email, password) {
        knex('accounts').insert([{
            name: name,
            email: email,
            password: password
          }]).then()
      },
  
      modifyHistory: function (data) {
        knex('history').where({
          'id': data.id
        }).update({
          'notes': data.notes
        }).then()
      },

      editPet: function (newPetInfo) {
       return knex('pets').where({
          'id': newPetInfo.petId,
        }).update({
          'name': newPetInfo.newPetName, 
          'weight': newPetInfo.newPetWeight
        })
      },
      

      newPet: function (data) {
        knex('pets').insert({
          'name': data.petName,
          'species': data.species[0],
          'gender': data.gender[0],
          'date_of_birth': data.birthday,
          'weight': data.weight,
          'breed': data.breed,
          'img': data.image
        }).then(console.log("CHANGED"))
      },
  
      deleteHistory: function (id) {
        knex('history').where({
          'id': id.id
        }).del().then();
      }
    }
  }
  