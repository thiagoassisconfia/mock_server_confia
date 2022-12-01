class CnhModel {
    constructor({ inPossuiCnh, inNumero, inDataEmissao, inUF }) {
      this.inPossuiCnh = new Boolean(inPossuiCnh);
      this.inNumero = new Boolean (inNumero);
      this.inDataEmissao =new Boolean( inDataEmissao);
      this.inUF =  new Boolean(inUF);
    }
  }
  module.exports = CnhModel;
