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

const urlApi = process.env.REACT_APP_URL_API

const adset = () => {
	return new Promise((resolve, reject) => {
		const data = JSON.stringify({
			acao: 'receber',
			dados: 'adsets',
			perfil: 'franqueadora',
			filtro: '',
			range: 0,
		})
		const request = new XMLHttpRequest()
		request.open('POST', urlApi + 'meta', true)

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

const adsetQuantidade = (data) => {
	return new Promise((resolve, reject) => {
		const requestData = {
			acao: 'quantidade_adset',
			dados: 'adsets',
			perfil: 'franqueadora',
			filtro: `where 'date_start' = '${data}'`,
			range: 0,
		}

		const request = new XMLHttpRequest()
		request.open('POST', urlApi + 'meta', true)

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

		request.send(JSON.stringify(requestData))
	})
}

const clicksPorMes = (data) => {
	return new Promise((resolve, reject) => {
		const comando = !!data ? `where 'date_start' = '${data}'` : ''
		const requestData = JSON.stringify({
			acao: 'clicks_por_mes True',
			dados: 'adsets',
			perfil: 'franqueadora',
			filtro: comando,
			range: 0,
		})
		console.log(requestData)
		const request = new XMLHttpRequest()
		request.open('POST', urlApi + 'meta', true)

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
		request.send(JSON.stringify(requestData))
	})
}

const gastosPorMes = () => {
	return new Promise((resolve, reject) => {
		const data = JSON.stringify({
			acao: 'gastos_por_mes True',
			dados: 'adsets',
			perfil: 'franqueadora',
			filtro: '',
			range: 0,
		})
		const request = new XMLHttpRequest()
		request.open('POST', urlApi + 'meta', true)

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

export { adset, clicksPorMes, adsetQuantidade, gastosPorMes }
