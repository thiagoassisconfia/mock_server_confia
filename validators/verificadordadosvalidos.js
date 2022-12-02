
const CnhModel = require('./../models/dadosCnhRetorno')
const CidadaoModel = require('./../models/dadosCidadaoRetorno')
const modelCertidaoObito = require('./../models/dadosCertidaoObito')

exports.ValidacaoCertidaoObito = async (req, res, next) => {
  var inMatricula ;
  var indiceNomeGenitor1
  var indiceNomeGenitor2 
  var indiceNomeCartorio
  var indiceNomeFalecido
  var inDataObito
  var indataRegistro
  var indataNascimento
  const data = req.body;
  
  const DadosCertidaoObito = req.body.DadosCertidaoObito
  
  try {
    var CertidaoObito = new modelCertidaoObito({inMatricula:inMatricula,indiceNomeGenitor1:indiceNomeGenitor1,indiceNomeGenitor2:indiceNomeGenitor2,
    inDataObito:inDataObito,indiceNomeCartorio:indiceNomeCartorio,indiceNomeFalecido:indiceNomeFalecido,indataRegistro:indataRegistro,indataNascimento:indataNascimento}) 
    if(!DadosCertidaoObito.cpf){
      let ErrorNoID = {
        codigo: 1,
        descricao: "CPF obrigatório"
      }
     res.json(ErrorNoID)

    
    }
    else{

      if(!DadosCertidaoObito.matricula){
        CertidaoObito.inMatricula =false
        
      } else{
        CertidaoObito.inMatricula= true
        
      }
      if(!DadosCertidaoObito.nomeGenitor1){
        CertidaoObito.indiceNomeGenitor1=false
        
      }else{
        CertidaoObito.indiceNomeGenitor1=true
        
      }
      if(!DadosCertidaoObito.nomeGenitor2){
        CertidaoObito.indiceNomeGenitor2=false
        
      }else{
        CertidaoObito.indiceNomeGenitor2=true
        
      }
      if(!DadosCertidaoObito.dataObito){
        CertidaoObito.inDataObito=false
      }
      else{
        CertidaoObito.inDataObito=true
        
      }
      if(!DadosCertidaoObito.nomeCartorio){
        CertidaoObito.indiceNomeCartorio=false
        
      }
      else{
        CertidaoObito.indiceNomeCartorio=true
        
      }
      if(!DadosCertidaoObito.cnpjCartorio){
        CertidaoObito.inCNPJCartorio =false
        
      }
      else{
        CertidaoObito.inCNPJCartorio =true
        
      }
      if(!DadosCertidaoObito.nomeFalecido){
        CertidaoObito.indiceNomeFalecido =false
        
      }
      else{
        CertidaoObito.indiceNomeFalecido =true
        
      }
      if(!DadosCertidaoObito.dataRegisto){
        CertidaoObito.indataRegistro =false
        
      }
      else{
        CertidaoObito.indataRegistro =true
        
      }
      if(!DadosCertidaoObito.dataNascimento){
        CertidaoObito.indataNascimento =false
        
      }
      else{
        CertidaoObito.indataNascimento =true
        
      }
      
    }                  
      res.json(CertidaoObito)
           
     
    } catch (e) {
      console.log(`erro>> ${e}`);
  
      res.json({ error: e });
    }
  };
  
  exports.ValidacaoDadosCNH = async (req, res, next) => {
    var inPossuiCnh ;
    var inNumero ;
    var inDataEmissao ;
    var inUF;
    const data = req.body;
    const DadosCnh = data.DadosCnh;
    const cpf = DadosCnh.cpf
    const numero = DadosCnh.numero
    const dataEmissao= DadosCnh.dataEmissao
    const uf= DadosCnh.uf
    
    try {
        var cnhmodel = new CnhModel({inPossuiCnh:inPossuiCnh ,inNumero:inNumero,inDataEmissao:inDataEmissao,inUF:inUF})
        if (!cpf) {                
            
            cnhmodel.inPossuiCnh =false
        }
        else{
            cnhmodel.inPossuiCnh = true
        }
         if(!numero){
            cnhmodel.inNumero = false
        }
        else{
            cnhmodel.inNumero = true
        }
        if(!dataEmissao){
            cnhmodel.inDataEmissao =false
        }
        else{
            cnhmodel.inDataEmissao = true
        }
        if(!uf){
            cnhmodel.inUF = false
        }
        else{
            cnhmodel.inUF= true
        }
        
          res.json({DadosCnhRetorno:cnhmodel } )
        
    } catch (e) {
      console.log(`erro>> ${e}`);
  
      res.json({ error: e });
    }

  };

  exports.ValidacaoDadosCidadao = async (req, res, next) => {
    var indiceNome ;
    var indiceNomeMae ;
    var indiceNomePai ;
    var inDataNascimento;
    const data = req.body;
    const DadosCidadao = data.DadosCidadao;
    const cpf = DadosCidadao.cpf
    const nome = DadosCidadao.nome
    const nomeMae= DadosCidadao.nomeMae
    const nomePai= DadosCidadao.nomePai
    const dataNascimento = DadosCidadao.dataNascimento
    
    try {
        var cidadaomodel = new CidadaoModel({indiceNome:indiceNome ,indiceNomeMae:indiceNomeMae,indiceNomePai:indiceNomePai,inDataNascimento:inDataNascimento})
        if (!cpf) {                
            
            cidadaomodel.indiceNome =false
        }
        else{
          cidadaomodel.indiceNome = true
        }
        if(!nome){
          cidadaomodel.nome = false
      }
      else{
          cidadaomodel.nome = true
      }
         if(!nomeMae){
            cidadaomodel.indiceNomeMae = false
        }
        else{
            cidadaomodel.indiceNomeMae = true
        }
        if(!nomePai){
            cidadaomodel.indiceNomePai =false
        }
        else{
            cidadaomodel.indiceNomePai = true
        }
        if(!dataNascimento){
            cidadaomodel.inDataNascimento = false
        }
        else{
            cidadaomodel.inDataNascimento= true
        }
        
        
          res.json({DadosCidadaoRetorno:cidadaomodel } )
        
    } catch (e) {
      console.log(`erro>> ${e}`);
  
      res.json({ error: e });
    }

  };
