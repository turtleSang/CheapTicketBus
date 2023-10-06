'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert(
      'trips',
      [
        {
          fromStation: 1,
          toStation: 2,
          startTime: "2023-09-02 01:30:00",
          price: 150000,
          createdAt: "2023-09-02 01:30:00",
          updatedAt: "2023-10-05 18:48:54",
        },
        {
          fromStation: 1,
          toStation: 3,
          startTime: "2023-09-02 01:30:00",
          price: 200000,
          createdAt: "2023-09-02 01:30:00",
          updatedAt: "2023-10-05 18:48:54",
        },
        {
          fromStation: 2,
          toStation: 3,
          startTime: "2023-09-02 01:30:00",
          price: 250000,
          createdAt: "2023-09-02 01:30:00",
          updatedAt: "2023-10-05 18:48:54",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('trips', null, {});
  }
};
