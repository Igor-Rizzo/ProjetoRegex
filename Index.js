const fs = require("fs");
const pdfParse = require("pdf-parse");

const arquivoPDF = fs.readFileSync("test.pdf");

pdfParse(arquivoPDF)
  .then(function (data) {
    console.log(data.text);
  })
  .catch(function (error) {
    console.log("O erro é: ", error);
  });
