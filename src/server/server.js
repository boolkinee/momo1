import express from "express";
import cors from "cors";
import pkg from "pg";
const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",  // เปลี่ยนตามชื่อ database ของคุณ
  password: "64010226",
  port: 5432,
});

app.post("/silo", async (req, res) => {
  const { silo_id, percent, temp, humidity, weight, timestamp } = req.body;
  console.log("🔔 POST /silo:", req.body); // <-- เพิ่ม log

  try {
    await pool.query(
      "INSERT INTO silo_entries (silo_id, percent, temp, humidity, weight, timestamp) VALUES ($1, $2, $3, $4, $5, $6)",
      [silo_id, percent, temp, humidity, weight, timestamp]
    );
    res.status(201).json({ message: "Data saved" });
  } catch (err) {
    console.error("❌ Database error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

app.get("/silo/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM silo_entries WHERE silo_id = $1 ORDER BY timestamp DESC",
      [id]
    );
    res.json(result.rows);
  } catch (error) {
    console.error("❌ Select error:", error);
    res.status(500).json({ error: "Failed to fetch entries" });
  }
});

app.listen(3001, () => {
  console.log("🚀 Server running on http://localhost:3001");
});
