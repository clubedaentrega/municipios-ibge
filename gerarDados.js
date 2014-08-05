'use strict'

var fs = require('fs'),
	estados = require('./index.js').estados,
	normalizar = require('./index.js').normalizar,
	dados = {}

fs.readFileSync('dadosOriginais.txt', 'utf8').split('\n').forEach(function (line) {
	var partes = line.split('\t'),
		estado = {
			codigo: partes[0],
			nome: estados[normalizar(partes[1])]
		},
		cidade = {
			codigo: partes[0] + partes[2],
			nome: normalizar(partes[3])
		}

	if (!(estado.nome in dados)) {
		dados[estado.nome] = {}
	}

	if (cidade.nome in dados[estado.nome] && dados[estado.nome][cidade.nome] !== cidade.codigo) {
		console.error('Inconsistente', estado, cidade, dados[estado.nome][cidade.nome])
	}

	dados[estado.nome][cidade.nome] = cidade.codigo
})

fs.writeFileSync('dados.json', JSON.stringify(dados, null, '\t'))