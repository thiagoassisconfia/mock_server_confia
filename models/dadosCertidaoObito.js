class CertidaoModel {
    constructor({ inMatricula,indiceNomeGenitor1,indiceNomeGenitor2,inDataObito,
        indiceNomeCartorio,inCNPJCartorio,indiceNomeFalecido ,indataRegistro,indataNascimento }) {
      this.inMatricula = new Boolean(inMatricula);
      this.indiceNomeGenitor1 = new Boolean (indiceNomeGenitor1);
      this.indiceNomeGenitor2 =new Boolean( indiceNomeGenitor2);
      this.inDataObito =  new Boolean(inDataObito);
      this.indiceNomeCartorio =  new Boolean(indiceNomeCartorio);
      this.indiceNomeFalecido  =  new Boolean(indiceNomeFalecido);
      this.indataRegistro =  new Boolean(indataRegistro);
      this.indataNascimento =  new Boolean(indataNascimento);
      this.inCNPJCartorio =  new Boolean(inCNPJCartorio);
      
    }
  }
  module.exports = CertidaoModel;
