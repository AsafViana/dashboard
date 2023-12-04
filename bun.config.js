import { enableEsModules } from '@bun/core'

enableEsModules()

export default {
	// Informações sobre o seu projeto
	name: 'Meu Projeto',
	description: 'Um projeto React bem legal!',
	version: '1.0.0',

	// Diretórios e arquivos Ignorados
	ignored: ['node_modules'],

	// Arquivos de entrada e saída
	entryPoints: {
		main: './src/index.js',
	},

	// Opções de construção
	build: {
		// Localização do arquivo de saída
		outDir: './dist',

		// Formato do arquivo de saída
		format: 'cjs',

		// Habilita/desabilita a compactação do código
		compact: true,
	},
}
