import axios from 'axios'

const teste = () => {
	axios
		.get('/api/dados-do-banco')
		.then((response) => {
			// Use os dados do PostgreSQL aqui
			console.log(response.data)
		})
		.catch((error) => {
			console.error('Erro na chamada de API:', error)
		})
}
