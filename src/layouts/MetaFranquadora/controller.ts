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
			const mes = []

			array.map((obj) => {
				mes.push(obj.date_start)
			})
			console.log(mes)
		})
		.catch(() => {
			console.error('Ocorreu um erro')
		})
}

export { campanhaFranquias, adsetsFranquias, clicksPorMes }
