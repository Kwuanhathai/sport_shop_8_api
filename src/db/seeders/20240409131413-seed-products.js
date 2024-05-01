'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    data.map(item => {
      item.created_at = new Date()
      item.updated_at = new Date()
    })
 
    await queryInterface.bulkInsert('Products', data, {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Products', null, {});

  }
};

const data = [
  {
    "name": "UNDER ARMOUR รองเท้าวิ่ง ผู้ชาย รุ่น UA HOVR Turbulence 2",
    "type": "รองเท้า",
    "picture": "10",
    "description": "นักวิ่งระยะไกลต้องการการส่วนผสมที่ลงตัวระหว่างการรองรับแรงกระแทก แรงดีด ความทนทาน และประสิทธิภาพ และนั่นคือสิ่งที่คุณจะได้รับจาก UA HOVR? Turbulence—ระบบลดแรงกระแทกที่ตอบสนอง การวิ่งที่ราบรื่น และความสบายในระยะทางไกล",
    "price": 3290,
  }
]
