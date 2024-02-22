const urlApi = process.env.REACT_APP_URL_API


const GetLojas = () => {
	return new Promise((resolve, reject) => {
		const data = JSON.stringify({
			dados: 'lojas',
			perfil: 'adm'
		})
		const request = new XMLHttpRequest()
		request.open('POST', urlApi + 'linx', true)

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

const GetDadosLojas = (loja, range) => {
	return new Promise((resolve, reject) => {
		const data = JSON.stringify({
			dados: 'vendas',
			perfil: 'adm',
			loja: String(loja),
			datas: range
		})
		const request = new XMLHttpRequest()
		request.open('POST', urlApi + 'linx', true)

		request.setRequestHeader('Content-Type', 'application/json')
		request.onload = function () {
			if (request.status === 200) {
				// Requisição bem-sucedida
				const resposta = Object.entries(JSON.parse(request.responseText))
				resposta.sort((a, b) => b[1].total_vendas_valor_int - a[1].total_vendas_valor_int)
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

export {
	GetLojas,
	GetDadosLojas
}
