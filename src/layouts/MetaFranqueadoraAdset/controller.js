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

const adsetQuantidade = () => {
	return new Promise((resolve, reject) => {
		const data = JSON.stringify({
			acao: 'quantidade_adset',
			dados: 'adsets',
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

const clicksPorMes = () => {
	return new Promise((resolve, reject) => {
		const data = JSON.stringify({
			acao: 'clicks_por_mes True',
			dados: 'adsets',
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

export { adset, clicksPorMes, adsetQuantidade, gastosPorMes }
