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

    await queryInterface.bulkInsert('stations',
      [
        {
          name: 'Bến xe Miền Tây',
          address: " 395 Đ. Kinh Dương Vương, An Lạc, Bình Tân, Thành phố Hồ Chí Minh",
          province: "HCM",
          createdAt: "2023-06-30 02:30:30",
          updatedAt: "2023-06-30 02:30:30"
        },
        {
          name: 'Bến xe Đà Nẵng',
          address: " Tôn Đức Thắng, Hòa Minh, Liên Chiều, Đà Nẵng",
          province: "DN",
          createdAt: "2023-06-30 02:30:30",
          updatedAt: "2023-06-30 02:30:30"
        },
        {
          name: 'Bến xe Bình Dương',
          address: "30/04, Chánh Nghĩa, TP.Thủ Dầu Một, Bình Dương",
          province: "BDG",
          createdAt: "2023-06-30 02:30:30",
          updatedAt: "2023-06-30 02:30:30"
        },
      ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('stations', null, {});
  }
};
