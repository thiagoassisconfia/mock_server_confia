class CidadaoModel {
    constructor({ indiceNome, indiceNomeMae, indiceNomePai, inDataNascimento }) {
      this.indiceNome = new Boolean(indiceNome);
      this.indiceNomeMae = new Boolean (indiceNomeMae);
      this.indiceNomePai =new Boolean( indiceNomePai);
      this.inDataNascimento =  new Boolean(inDataNascimento);
    }
  }
  module.exports = CidadaoModel;
