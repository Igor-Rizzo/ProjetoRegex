const pdf = require("./Pdf"); //Conteúdo do PDF
const addBanco = require("./bancoMysql")

const TitularDoRegistro = /(titular\sdo\sregistro:)(.*)([u00E0-\u00FC]\n?[a-z].*\-?([a-z\s]+)\/[a-z]{2})/gim; //1
const MarcaComercial = /(Marca\scomercial:([a-z\s].*))/gim;
const ResultadoDoPedido = /(resultado\sdo\spedido:)(\s[a-z\u00E0\u00FC]+\b)/gim;
const registroNumero = /(certificado\scom\sregistro\s)nº\s([a-z0-9]*\b)/gim;
// Falta o Numero processo
//Falta a data Protocolada
const newFabricantes = /(fabricantes?:\snome:([a-z\s\.\,]+))|(nome:\s[a-z\s\.]+)/gim;
const nomeQuimico = /(nome\squ[u00E0-\u00FC]mico:\s?(.*)\n?.[a-z]+\)?[a-z].*)/gim;
const NomeComum = /(nome comum?:(.+))/gim;
const NomeCientifico = /(nome\scient[u00E0-\u00FC]fico?\-?(.+))/gim;
//Falta o indicação de uso
const classificacaoToxicologica = /(o?\sperfil\stoxicol[u00E0-\u00FC]gico(.*)\n([a-z].*))/gim;
const classeXXX = /(classe\s[a-z]{0,3}\s)-(\s?[a-z\u00E0\u00FC].*(\n?.*))/gim;
const searchTituloDoRegistro = encontrarItem(pdf, TitularDoRegistro);
const searchMarcaComercial = encontrarItem(pdf, MarcaComercial);
const searchResultadoDoPedido = encontrarItem(pdf, ResultadoDoPedido);
const searchRegistroNumero = encontrarItem(pdf, registroNumero);
const searchNewFabricantes = encontrarItem(pdf, newFabricantes);
const searchNomeQuimico = encontrarItem(pdf, nomeQuimico);
const searchNomeComum = encontrarItem(pdf, NomeComum);
const searchNomeCientifico = encontrarItem(pdf, NomeCientifico);
const searchClassificacaoToxicologica = encontrarItem(
  pdf,
  classificacaoToxicologica
);

function encontrarItem(texto, regex) {
  const result = texto.match(regex);
  return result;
}

addBanco(searchNewFabricantes)



