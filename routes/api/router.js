var express = require('express')
var router = express.Router()
var validator = require('../../validators/verificadordadosvalidos')



router.post('/validacao-dados-certidao-obito', validator.ValidacaoCertidaoObito,function (req, res) {
  try {
    const successfullyResponse = {
      description: "Operação realizada com sucesso. Resultado do filtro informado",
      schema: "#/definitions/DadosCidadaoRetorno"
    }
    setTimeout(() => res.json(successfullyResponse), 200)
    
  } catch (error) {
    let ErrorInternoResponse = {
      description: "Erro interno da aplicação",
      schema: "#/definitions/Erro"
    }
    res.status(500).json(ErrorInternoResponse)

  }
  
})


router.post('/validacao-dados-cnh',validator.ValidacaoDadosCNH, function (req, res, next) {
  try {
    const successfullyResponse = {
      description: "Operação realizada com sucesso. Resultado do filtro informado",
      schema: "#/definitions/DadosCidadaoRetorno"
    }
    setTimeout(() => res.json(successfullyResponse), 200)
    
  } catch (error) {
    let ErrorInternoResponse = {
      description: "Erro interno da aplicação",
      schema: "#/definitions/Erro"
    }
    res.status(500).json(ErrorInternoResponse)

  }

})

router.post('/validacao-dados-basicos',validator.ValidacaoDadosCidadao, function (req, res, next) {
  try {
    const successfullyResponse = {
      description: "Operação realizada com sucesso. Resultado do filtro informado",
      schema: "#/definitions/DadosCidadaoRetorno"
    }
    setTimeout(() => res.json(successfullyResponse), 200)
    
  } catch (error) {
    let ErrorInternoResponse = {
      description: "Erro interno da aplicação",
      schema: "#/definitions/Erro"
    }
    res.status(500).json(ErrorInternoResponse)

  }

})




module.exports = router
