'use strict'

// Retorna o código de um dado município (string de 7 dígitos)
// estado é uma string de 2 caracteres ('RN') ou o nome do estado ('Santa Catarina')
// municipio é uma string
// A busca não leva em consideração acentos, maíusculas/minúsculas ou caracteres especiais,
// ou seja, 'sp', 'Sp', 'SP', 'Sao-Paulo', 'SãoPaulo' representam o mesmo estado
// Retorna string vazia se não encontrado
module.exports = function (estado, municipio) {
	estado = module.exports.normalizar(estado)
	municipio = module.exports.normalizar(municipio)

	if (estado.length !== 2) {
		// 'SAOPAULO' -> 'SP'
		estado = module.exports.estados[estado]
	}

	return (module.exports.dados[estado] || {})[municipio] || ''
}

// Remove acentos, coloca tudo em caixa alta e remove outros caracteres
// Ex: 'São Paulo' -> 'SAOPAULO'
// Isso é usado para facilitar comparações normalizar('São Paulo') === normalizar('sao-paulo')
module.exports.normalizar = function (str) {
	return String(str).replace(/[áàãâäÁÀÃÂÄ]/g, 'A')
		.replace(/[éèêëÉÈÊË]/g, 'E')
		.replace(/[íìîïÍÌÎÏ]/g, 'I')
		.replace(/[óòõôöÓÒÕÔÖ]/g, 'O')
		.replace(/[úùûüÚÙÛÜ]/g, 'U')
		.replace(/[ñÑ]/g, 'N')
		.replace(/[çÇ]/g, 'C')
		.toUpperCase()
		.replace(/[^A-Z]/g, '')
}

// dados[siglaDoEstado][nomeMunicipioNormalizado] = codigo (string de 7 dígitos)
module.exports.dados = JSON.parse(require('fs').readFileSync('dados.json', 'utf8'))

// Map de:
// nome de estado normalizado -> sigla
// sigla -> nome de estado não normalizado
module.exports.estados = {
	'ACRE': 'AC',
	'ALAGOAS': 'AL',
	'AMAPA': 'AP',
	'AMAZONAS': 'AM',
	'BAHIA': 'BA',
	'CEARA': 'CE',
	'DISTRITOFEDERAL': 'DF',
	'ESPIRITOSANTO': 'ES',
	'GOIAS': 'GO',
	'MARANHAO': 'MA',
	'MATOGROSSO': 'MT',
	'MATOGROSSODOSUL': 'MS',
	'MINASGERAIS': 'MG',
	'PARANA': 'PR',
	'PARAIBA': 'PB',
	'PARA': 'PA',
	'PERNAMBUCO': 'PE',
	'PIAUI': 'PI',
	'RIOGRANDEDONORTE': 'RN',
	'RIOGRANDEDOSUL': 'RS',
	'RIODEJANEIRO': 'RJ',
	'RONDONIA': 'RO',
	'RORAIMA': 'RR',
	'SANTACATARINA': 'SC',
	'SERGIPE': 'SE',
	'SAOPAULO': 'SP',
	'TOCANTINS': 'TO',
	'AC': 'Acre',
	'AL': 'Alagoas',
	'AP': 'Amapá',
	'AM': 'Amazonas',
	'BA': 'Bahia',
	'CE': 'Ceará',
	'DF': 'Distrito Federal',
	'ES': 'Espírito Santo',
	'GO': 'Goiás',
	'MA': 'Maranhão',
	'MT': 'Mato Grosso',
	'MS': 'Mato Grosso do Sul',
	'MG': 'Minas Gerais',
	'PR': 'Paraná',
	'PB': 'Paraíba',
	'PA': 'Pará',
	'PE': 'Pernambuco',
	'PI': 'Piauí',
	'RN': 'Rio Grande do Norte',
	'RS': 'Rio Grande do Sul',
	'RJ': 'Rio de Janeiro',
	'RO': 'Rondônia',
	'RR': 'Roraima',
	'SC': 'Santa Catarina',
	'SE': 'Sergipe',
	'SP': 'São Paulo',
	'TO': 'Tocantins'
}