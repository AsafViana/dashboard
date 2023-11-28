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
console.log(urlApi)

const campanha = () => {
	return new Promise((resolve, reject) => {
		const data = JSON.stringify({
			acao: 'receber',
			dados: 'campanhas',
			perfil: 'franquias',
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

const campanhaQuantidade = () => {
	return new Promise((resolve, reject) => {
		const data = JSON.stringify({
			acao: 'quantidade_campanha True',
			dados: 'campanhas',
			perfil: 'franquias',
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

const adsets = () => {
	return new Promise((resolve, reject) => {
		const data = JSON.stringify({
			acao: 'receber',
			dados: 'campanhas',
			perfil: 'franquias',
			filtro: '',
		})
		const request = new XMLHttpRequest()
		request.open('POST', urlApi + 'meta', true)

		request.setRequestHeader('Content-Type', 'application/json')
		request.onload = function () {
			if (request.status === 200) {
				// Requisição bem-sucedida
				const resposta = JSON.parse(request.responseText)
				console.log(resposta)
				resolve(resposta)
			} else {
				// Tratar erros aqui
				console.error('Erro na requisição:', request.status, request.statusText)
				reject(new Error(`Erro ${request.status}: ${request.statusText}`))
			}
		}
		request.send(data)
	})
}

const clicksPorMes = () => {
	return new Promise((resolve, reject) => {
		const data = JSON.stringify({
			acao: 'clicks_por_mes True',
			dados: 'campanhas',
			perfil: 'franquias',
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

const gastosPorMes = () => {
	return new Promise((resolve, reject) => {
		const data = JSON.stringify({
			acao: 'gastos_por_mes True',
			dados: 'campanhas',
			perfil: 'franquias',
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

export { campanha, adsets, clicksPorMes, campanhaQuantidade, gastosPorMes }
