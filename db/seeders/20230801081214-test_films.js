'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const filmsData = [
      {
        title: 'Во все тяжкие',
        description: 'я залип',
        img: 'https://avatars.mds.yandex.net/i?id=3d0c54ffcb136bda45ee016bd8a0f0e4e4005ad5-9181148-images-thumbs&n=13',
        user_id: 3,
      },
      {
        title: 'Невыносимая тяжесть огромного таланта',
        description: 'я не смог',
        img: 'https://media.istockphoto.com/id/1202376188/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D1%81%D0%BC%D0%B5%D1%88%D0%BD%D1%8B%D0%B5-%D0%B0%D0%B7%D0%B8%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D0%B5-%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D1%84%D0%B8%D0%BB%D1%8C%D0%BC-%D0%BF%D0%B0%D1%80%D0%B0-%D0%B4%D0%B2%D0%B8%D0%B6%D0%B5%D1%82%D1%81%D1%8F-%D0%B8-%D0%B4%D0%BE%D0%BB%D0%B6%D0%B5%D0%BD-%D0%BF%D0%BE%D0%B4%D0%BD%D1%8F%D1%82%D1%8C-%D1%82%D1%8F%D0%B6%D0%B5%D0%BB%D1%8B%D0%B9-%D0%B4%D0%B8%D0%B2%D0%B0%D0%BD.jpg?s=1024x1024&w=is&k=20&c=yInnvr1BxfPmxOkvz0VcxOXd5axFtpqhsEvdHUo9QaU=',
        user_id: 2,
      },
      {
        title: 'Форсаж одиннадцать',
        description: 'Новинка',
        img: 'https://sun1-28.userapi.com/SIWdSeGJht9GHkTsP3198qdp7s8Qn0c5x-HxGg/KUbKKMoA27Q.jpg',
        user_id: 1,
      },
      {
        title: 'Одиннадцать друзей Оушена',
        description: 'Старинка',
        img: 'https://www.crushpixel.com/big-static21/preview4/cute-pigs-cartoon-character-cheerful-5397331.jpg',
        user_id: 4,
      },
    ];
    const films = filmsData.map((film) => ({
      ...film,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Films', films);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Films');
  },
};
