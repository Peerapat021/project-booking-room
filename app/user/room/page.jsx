import db from "../../lib/db";
import React from "react";

export default async function Page() {
  // Query ดึงข้อมูลจากฐานข้อมูล
  let rows = [];
  try {
    [rows] = await db.query(`
    SELECT 
      Rooms.room_id,
      Rooms.room_name,
      Room_status.room_status_name
    FROM 
      Rooms
    INNER JOIN 
      Room_status 
    ON 
      Rooms.room_status_id = Room_status.room_status_id;
  `);
  } catch (error) {
    console.error("Database query failed:", error);
  }

  return (
    <div className="container mx-auto p-4 text-gray-600">
      <h1 className="text-2xl font-bold mb-6">รายการห้องประชุม</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rows.map((item, index) => (
          <div key={index} className="shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-xl text-gray-100 font-semibold mb-2 p-4 bg-purple-600 ">
              {item.room_name}
            </h2>
            <p className="text-gray-700 px-4 py-2">{item.room_detail}</p>
            <p className="text-gray-700 px-4 py-2">{item.room_status_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
