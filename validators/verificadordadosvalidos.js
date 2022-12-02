
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
    if(!DadosCertidaoObito.cpf || typeof "String"){
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
        if(typeof DadosCertidaoObito.matricula == "string"){
          CertidaoObito.inMatricula= true
        }
        
      }
      if(!DadosCertidaoObito.nomeGenitor1){
        CertidaoObito.indiceNomeGenitor1=false
        
      }else{
        if(typeof DadosCertidaoObito.indiceNomeGenitor1 == "string"){
          CertidaoObito.indiceNomeGenitor1=true
        }
        
      }
      if(!DadosCertidaoObito.nomeGenitor2){
        CertidaoObito.indiceNomeGenitor2=false
        
      }else{
        if(typeof DadosCertidaoObito.nomeGenitor2 == "string"){
          CertidaoObito.indiceNomeGenitor2=true
        }        
        
      }
      if(!DadosCertidaoObito.dataObito){
        CertidaoObito.inDataObito=false
      }
      else{
        if(typeof DadosCertidaoObito.dataObito == "string"){
          CertidaoObito.inDataObito=true

        }
        
      }
      if(!DadosCertidaoObito.nomeCartorio){
        CertidaoObito.indiceNomeCartorio=false
        
      }
      else{
        if(typeof DadosCertidaoObito.nomeCartorio == "string"){
        CertidaoObito.indiceNomeCartorio=true}
        
      }
      if(!DadosCertidaoObito.cnpjCartorio){
        CertidaoObito.inCNPJCartorio =false
        
      }
      else{
        if(typeof DadosCertidaoObito.cnpjCartorio == "number"){
          CertidaoObito.inCNPJCartorio =true

        }
        
      }
      if(!DadosCertidaoObito.nomeFalecido){
        
        CertidaoObito.indiceNomeFalecido =false
        
        
      }
      else{
        if(typeof DadosCertidaoObito.nomeFalecido == "string"){
        CertidaoObito.indiceNomeFalecido =true}
        
      }
      if(!DadosCertidaoObito.dataRegisto){
        CertidaoObito.indataRegistro =false
        
      }
      else{
        if(typeof DadosCertidaoObito.dataRegisto == "string"){
          CertidaoObito.indataRegistro =true

        }
        
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
          if(typeof cpf =='number'){            
            cnhmodel.inPossuiCnh = true}

            
        }
         if(!numero  ){
            cnhmodel.inNumero = false
        }
        else{
            if(numero.length <=20 && typeof numero =="string"){
          
             cnhmodel.inNumero = true

           }
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
          if(typeof uf =="string"){                      
            cnhmodel.inUF= true

          }
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
          if(typeof cpf =='number'){            
            cidadaomodel.indiceNome = true
            
          }
        }
        if(!nome){
          cidadaomodel.nome = false
      }
      else{
        if(typeof nome =="string"){
          cidadaomodel.nome = true
        }
      }
         if(!nomeMae){
            cidadaomodel.indiceNomeMae = false
        }
        else{
            cidadaomodel.indiceNomeMae = true
            if(typeof nomeMae =="string"){
              cidadaomodel.indiceNomeMae = true
            }
        }
        if(!nomePai){
            cidadaomodel.indiceNomePai =false
        }
        else{
          if(typeof nome =="string"){
            cidadaomodel.indiceNomePai = true
           
          }
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
