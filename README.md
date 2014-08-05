# Municípios IBGE

Retorna o código IBGE de 7 dígitos para um dado município

## Instale
`npm install municipios-ibge`

## Use
```javascript
var ibge = require('municipios-ibge')

// Retorna '3536505'
var codigo = ibge('São Paulo', 'Paulínia')
```

## Normalização
A busca não leva em conta acentos, espaços nem maiúscula/minúscula, ou seja, `ibge('sao-paulo', 'paulinia')` também funcionaria

## Documentação

### ibge(estado, municipio)
Retorna o código de um dado município (string de 7 dígitos) ou string vazia se não encontrar

`estado` é uma string de 2 caracteres ('RN') ou o nome do estado ('Santa Catarina').

`municipio` é uma string

### ibge.normalizar(str)
Remove acentos, coloca tudo em caixa alta e remove outros caracteres

### ibge.dados
Dados do arquivo dados.json

### ibge.estados
Map de:

* nome de estado normalizado -> sigla: `ibge.estados['SANTACATARINA'] = 'SC'`
* sigla -> nome de estado não normalizado: `ibge.estados['SC'] = 'Santa Catarina'`