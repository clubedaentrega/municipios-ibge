'use strict'

var ibge = require('./'),
	assert = require('assert')

assert.strictEqual(ibge('São Paulo', 'Paulínia'), '3536505')
assert.strictEqual(ibge('sp', 'Aparecida'), '3502507')
assert.strictEqual(ibge('paraná', 'BOAVISTA DAAPARECIDA'), '4103057')
assert.strictEqual(ibge('GO', 'Aparecida do Taboado'), '')