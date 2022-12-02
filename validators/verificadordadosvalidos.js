
const CnhModel = require('./../models/dadosCnhRetorno')
const CidadaoModel = require('./../models/dadosCidadaoRetorno')
const CertidaoObito = require('./../models/dadosCertidaoObito')

exports.ValidacaoCertidaoObito = async (req, res, next) => {
    var inMatricula ;
    var indiceNomeGenitor1
    var indiceNomeGenitor2 
    var indiceNomeCartorio
    var inCNPJCartorio
    var indiceNomeFalecido 
    var indataRegistro
    var indataNascimento
    const data = req.body;
    
    const DadosCertidaoObito = req.body.DadosCertidaoObito
    const cpf = DadosCertidaoObito.cpf
    const matricula =DadosCertidaoObito.matricula
    const nomeGenitor1 = DadosCertidaoObito.nomeGenitor1
    const nomeGenitor2 = DadosCertidaoObito.nomeGenitor2
    const dataObito = DadosCertidaoObito.dataObito
    const nomeCartorio = DadosCertidaoObito.nomeCartorio
    const cnpjCartorio =DadosCertidaoObito.cnpjCartorio
    const nomeFalecido = DadosCertidaoObito.nomeFalecido
    const dataRegisto =DadosCertidaoObito.dataRegisto
    const dataNascimento=DadosCertidaoObito.dataNascimento

    const uf= DadosCnh.uf
    var certiaoObito = new CertidaoObito({inMatricula:inMatricula,indiceNomeGenitor1:indiceNomeGenitor1,indiceNomeGenitor2:indiceNomeGenitor2
    ,inDataObito:inDataObito,indiceNomeCartorio:indiceNomeCartorio,
    indiceNomeFalecido :indiceNomeFalecido,indataRegistro:indataRegistro,
    indataNascimento:indataNascimento,inCNPJCartorio:inCNPJCartorio })

  
    try {

  
    
      res.json({DadosCidadaoRetorno:certiaoObito } )
     
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
