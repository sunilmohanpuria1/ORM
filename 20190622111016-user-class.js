'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('UserClasses', [{
        classId: 1,
        class : 1,
        
      },{
        classId: 2,
        class : 5,
        createdAt: '1970-01-01 00:00:01',
        updatedAt: '1970-10-01 00:00:03'
      },{
        classId: 3,
        class : 6,
        createdAt: '1970-01-01 00:00:01',
        updatedAt: '1970-10-01 00:00:03'
      },{
        classId: 4,
        class : 8,
        createdAt: '1970-01-01 00:00:01',
        updatedAt: '1970-10-01 00:00:03'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
   
      Example:
      return queryInterface.bulkDelete('UserClasses', null, {});
   
  }
};
