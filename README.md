# Mocked Web API #

This is a web API (Express, node.js) used to provide data to my  demo websites. It uses [nodemon](https://github.com/remy/nodemon) to monitor any changes in api folder (settings in nodemon.json) and automatically restart the server.

<br>

# Get Started #


``` bash
# install dependencies
npm install

# serve web api at localhost:9527/api
npm start
```

<br>

# Hello World #

Depois de dar o npm start você fazer uma requisição usando o método POST.

http://localhost:9527/api/validacao-dados-cnh

<br>

Exemplo de um JSON de entrada para a validacao de dados CNH.

``` json

    {
  
  "DadosCnh": 
    {
      "cpf": "0435783299",
      "numero": "teste",
      "dataEmissao": "14-03-2010",
      "uf": "DF"
      
    }
    
    
  
}
  
   

```