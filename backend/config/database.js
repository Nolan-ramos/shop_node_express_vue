import mysql from "mysql2";

//create the connection to database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "shop_node_express_vue",
});

export default db;