
const CnhModel = require('./../models/dadosCnhRetorno')
const CidadaoModel = require('./../models/dadosCidadaoRetorno')

exports.ValidacaoCertidaoObito = async (req, res, next) => {
    const data = req.body;
    const name = data.name;
    const description = data.description
  
    try {
      if (name && description) {
        return next();
      } else {
        
        res.status(400).json({ description: "Foram identificados erros na validação dos dados", schema: "#/definitions/Erro" });
      }
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
