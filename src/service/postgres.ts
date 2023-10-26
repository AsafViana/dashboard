import axios from 'axios'

const teste = () => {
	axios
		.get('http://127.0.0.1:5000')
		.then((response) => {
			// Use os dados do PostgreSQL aqui
			console.log(response.data)
		})
		.catch((error) => {
			console.error('Erro na chamada de API:', error)
		})
}


export {teste}
