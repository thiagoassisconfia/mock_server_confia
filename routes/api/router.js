var express = require('express')
var router = express.Router()
var validator = require('../../validators/verificadordadosvalidos')

/** 登入 */
router.post('/CR000101', function (req, res, next) {
  const { headers, body } = req
  let response = {
    isPass: true,
    token: '888899990000'
  }
  // res.status(404)
  setTimeout(() => res.json(response), 500)
})


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

/** 檢查 Token 是否有效 */
router.get('/CR000104', function (req, res, next) {
  const { headers: {authorization = null} } = req
  let response = {
    isPass: !!authorization
  }
  setTimeout(() => res.json(response), 200)
})

module.exports = router
