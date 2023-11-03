import { mesNumeroParaCursivo, arredondarNumero } from '../../tools/date.ts'

const meses = {
	janeiro: 1,
	fevereiro: 2,
	marco: 3,
	abril: 4,
	maio: 5,
	junho: 6,
	julho: 7,
	agosto: 8,
	setembro: 9,
	outubro: 10,
	novembro: 11,
	dezembro: 12,
}

const campanhaFranquias = () => {
	return new Promise((resolve, reject) => {
		const data = JSON.stringify({
			acao: 'receber',
			dados: 'campanhas',
			perfil: 'franqueadora',
			filtro: '',
			range: 0,
		})
		const request = new XMLHttpRequest()
		request.open('POST', 'http://127.0.0.1:5000/meta', true)

		request.setRequestHeader('Content-Type', 'application/json')
		request.onload = function () {
			if (request.status === 200) {
				// Requisição bem-sucedida
				const resposta = JSON.parse(request.responseText)
				resolve(resposta)
			} else {
				// Tratar erros aqui
				reject(new Error(`Erro ${request.status}: ${request.statusText}`))
				console.error('Erro na requisição:', request.status, request.statusText)
			}
		}
		request.send(data)
	})
}

const adsetsFranquias = () => {
	return new Promise((resolve, reject) => {
		const data = JSON.stringify({
			acao: 'receber',
			dados: 'campanhas',
			perfil: 'franqueadora',
			filtro: '',
		})
		const request = new XMLHttpRequest()
		request.open('POST', 'http://127.0.0.1:5000/meta', true)

		request.setRequestHeader('Content-Type', 'application/json')
		request.onload = function () {
			if (request.status === 200) {
				// Requisição bem-sucedida
				const resposta = JSON.parse(request.responseText)
				console.log(resposta)
			} else {
				// Tratar erros aqui
				console.error('Erro na requisição:', request.status, request.statusText)
			}
		}
		request.send(data)
	})
}

const clicksPorMes = () => {
	campanhaFranquias()
		.then((array: Array<any>) => {
			const resultado = {
				label: [],
				datasets: [],
			}
			const datasSemFormatacao = []
			let mes = []

			array.map((obj) => {
				datasSemFormatacao.push(obj.date_start)
			})
			const datas = datasSemFormatacao.filter((value, index, self) => {
				return self.indexOf(value) === index
			})

			datas.map((data) => mes.push(mesNumeroParaCursivo(data)))
			mes = mes.filter((value, index, self) => {
				return self.indexOf(value) === index
			})
			resultado.label = mes
			console.log(somatorioCliquesPorMes(array))
		})
		.catch(() => {
			console.error('Ocorreu um erro')
		})
}

function somatorioCliquesPorMes(dados) {
	let somatorio = {}

	dados.map((item) => {
		const data = new Date(item.date_start)
		const mes = data.getMonth()
		const mesCursivo = Object.keys(meses).find((chave) => meses[chave] === mes)

		if (!isNaN(parseInt(item.clicks))) {
			if (somatorio[mesCursivo]) {
				somatorio[mesCursivo] += parseInt(item.clicks)
			} else {
				somatorio[mesCursivo] = parseInt(item.clicks)
			}
		} else {
			if (somatorio[mesCursivo]) {
				somatorio[mesCursivo] += 0
			} else {
				somatorio[mesCursivo] = 0
			}
		}
	})

	// Converta o objeto em uma matriz de pares chave-valor e ordene com base nos valores.
	const mesesOrdenados = {}

	// Ordene as chaves (meses) em ordem alfabética
	const mesesOrdenadosAlfabeticamente = Object.keys(mesesOrdenados).sort()

	// Preencha o objeto mesesOrdenados com os meses ordenados alfabeticamente
	for (const mes of mesesOrdenadosAlfabeticamente) {
		mesesOrdenados[mes] = mesesOrdenados[mes]
	}

	return somatorio
}

export { campanhaFranquias, adsetsFranquias, clicksPorMes }
