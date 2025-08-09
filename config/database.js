const mysql2 = require("mysql2");

const pool = mysql2.createPool({
  host: "brktcoraxhoslbbecgah-mysql.services.clever-cloud.com",
  user: "u4fke0udkgvuukdu",
  password: "RVWL5YlgzAgOpUQVyLxB",
  database: "brktcoraxhoslbbecgah",
});

module.exports = pool.promise();
