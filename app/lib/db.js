// db.js
import mysql from 'mysql2/promise';

// สร้างการเชื่อมต่อกับฐานข้อมูล
const db = mysql.createPool({
  host: 'localhost',
  user: 'admin',
  password: 'abcd1717',
  database: 'booking_room',
  port: 3306, // ใช้พอร์ต 3306 ตามที่กำหนดไว้ใน Docker
});

export default db;
