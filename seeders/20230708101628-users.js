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
      'users',
      [
        {
          name: 'Sang',
          password: '123123',
          email: '1234@gmail.com',
          numberPhone:'0987789456',
          avatar: '//www.gravatar.com/avatar/f7df9a609ae64fa263110ac68cc6cb19',
          type:"admin",
          createdAt: "2023-07-04 19:16:59",
          updatedAt: "2023-07-04 19:16:59",
        },
        {
          name: 'Nguyen',
          password: '456789',
          email: '8796@gmail.com',
          numberPhone:'0987789456',
          avatar: '//www.gravatar.com/avatar/f7df9a609ae64fa263110ac68cc6cb19',
          type:"admin",
          createdAt: "2023-07-04 19:16:59",
          updatedAt: "2023-07-04 19:16:59",
        }
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
    await queryInterface.bulkDelete('users', null, {});
  }
};
