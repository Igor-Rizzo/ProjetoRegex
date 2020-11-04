const mysql = require("mysql")

function addBanco(textoRegex) {
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "projeto-regex",
    });
    let sqlConsulta = "SELECT titular_do_registro FROM regex WHERE titular_do_registro  = ?";
  connection.query(sqlConsulta, [textoRegex], function (error, res) {
    if (res == res) {
      let sqlInserirDados = `INSERT INTO regex (titular_do_registro) VALUES ('${textoRegex}')`;
      let valores = [textoRegex];
      connection.query(sqlInserirDados, valores, function (error, res) {
        if (error) {
          console.log(error.message);
          connection.end();
        } else {
          console.log("Sucesso em inserir os dados.");
          connection.end();
        }
      });
    } else {
      console.log("Item ja existente no banco de dados." , res);
      connection.end();
    }
  });
      } 
module.exports = addBanco;